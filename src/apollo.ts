import { ApolloClient, InMemoryCache, makeVar, createHttpLink, split,from,   } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from '@apollo/client/utilities';

import { onError } from "@apollo/client/link/error";
import { serverAddress,  } from './api/app-setting';
import { LOCALSTORAGE_TOKEN } from './constants';
import { todoDataVar } from './stores/todo-data';

const token = localStorage.getItem(LOCALSTORAGE_TOKEN); 
export const isLoggedInVar =makeVar(Boolean(token));
export const authTokenVar = makeVar(token);


const httpLink = createHttpLink({
  uri: serverAddress()//+'/graphql', 
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "authorization": authTokenVar() || "",
    },
  };
});

const splitLink = split( 
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  authLink.concat(httpLink,),
);

const errorLink = onError(({  networkError }) => {
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)}
    ;
});
export const client = new ApolloClient({
  link: from([ errorLink, splitLink]), 
  cache: new InMemoryCache({
    typePolicies:{
      Query:{
        fields:{
          isLoggedIn : {
            read() {
              return isLoggedInVar()
            }
          },
          token: {
            read() {
              return authTokenVar();
            },
          },
          todo: {
            read() {
              return todoDataVar();
            },
          },
        }
      }
    }
  })
});
