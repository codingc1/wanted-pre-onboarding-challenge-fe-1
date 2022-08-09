import { ApolloClient, InMemoryCache, makeVar, createHttpLink, split,from,   } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from '@apollo/client/utilities';

import { onError } from "@apollo/client/link/error";
import { serverAddress,  } from './api/app-setting';
import { LOCALSTORAGE_TOKEN } from './constants';
// import { isLoggedInVar } from './stores/auth-store';
// export const isLoggedInVar = makeVar(false)
const token = localStorage.getItem(LOCALSTORAGE_TOKEN); //1
export const isLoggedInVar =makeVar(Boolean(token)); //초기는 오토로그인도 있어야 가능
export const authTokenVar = makeVar(token); //2
// export const authTokenVar = makeVar('');
// export const modifyAuthTokenVar = (tokenString: string) => {
//   authTokenVar(tokenString);
// };



const httpLink = createHttpLink({
  uri: serverAddress()//+'/graphql', 
});
const authLink = setContext((_, { headers }) => {
  // console.log(authTokenVar(), 'headers apollo')
  return {
    headers: {
      ...headers,
      "authorization": authTokenVar() || "",
    },
  };
});

const splitLink = split( //OperationDefinition이면 wsLink로 subscription이면 authLink로 분배
  ({ query }) => {
    // console.log(authTokenVar(), 'headers apollo')
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  authLink.concat(httpLink,),
  
  //httpLink,
);

const errorLink = onError(({  networkError }) => {
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)}
    ;
});
export const client = new ApolloClient({
  link: from([ errorLink, splitLink]), //23.1 authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies:{
      Query:{
        fields:{
          isLoggedIn : {
            read() {
              return isLoggedInVar()//Boolean(localStorage.getItem("token"))
            }
          },
          token: {
            read() {
              return authTokenVar();
            },
          },
        }
      }
    }
  })
});
