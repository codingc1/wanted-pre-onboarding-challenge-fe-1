## :: 원티드 프리온보딩 챌린지 프론트엔드 코스 

## 클라이언트 구현 과제 

## 작동 화면
### login
<img src="https://user-images.githubusercontent.com/53177533/185739821-c8e3371a-8324-486e-9c7e-d18fa0823b96.gif">
 - 새로고침에도 login 상태가 유지됩니다.

### Todo 
<img src="https://user-images.githubusercontent.com/53177533/185739832-16fb7d1a-fb69-4f7d-9f3d-7844fb7b7885.gif">
 - 뒤로 가기 버튼을 누르면 이전에 조회한 todo-detail이 주소를 바탕으로 나옵니다.

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요



### Packages

* typescript
* react router v6
* tanstack/react-query
* redux-toolkit


### API 실행

```bash
> npm install

> npm start # http://localhost:5000
```

### 프로젝트 회고

* react router v6 적용 
 - 프로텍트 라우터 : TodoList를 pros받는 라우터를 만들려고 했지만 v6에서는 잘 적용이 되지 않는듯 했습니다. 결국 공식문서대로 적용하였습니다. 
```
<Route path="/todos" element={
        <RequireAuth >
            <TodoList />
          </RequireAuth>
        }
      >
        <Route path=":todoId" element={<TodoDetail />} />
      </Route>
```

* reat-query 적용 
reat-query 적용은 문서나 동기들이 한것을 참고하면 되었지만. 디테일하게 이해를 하는데 시간을 많이 소비하였다.
```
const queryKeyGetTodoById = [QUERY.TODOLIST, 'getOne']
const { data } = useQuery<ApiGetTodoById>([...queryKeyGetTodoById, todoId], () => getTodoById(todoId, ),{
        enabled:!!todoId
        } )
```
enabled : state에 따라 api 요청을 막거나 처리

* apollo => redux-toolkit 대체
 - redux를 사용한지 너무 오래되어 apollo로 상태관리(login 유무)하다 redux-toolkit로 바꾸었다.
 - 공식문서는 예전 사용자가 보기 좋게 되어 있고 인터넷 예제들은 예전 버전이 대부분이라 적용하는데 어려움이 있었지만 그만큼 뿌듯했다.
 
 - 리덕스에서 스토어에 변경이 생기면 useSelector훅을 사용한 모든 컴포넌트의 useSelector의 인자와 store의 state와 비교하여 다르면 리렌더링된다.
하지만 state가 primitive value가 아닌 객체,배열 등이라면 실제 값들은 바뀌지 않았다 하더라도 다른 객체로 인식하여 리렌더링된다.
이럴 때는 특정 값을 가져오거나 조건 함수를 적용 시켜서 리렌더링을 방지할 수 있다.
```
 const userId=useSelect(state=>state.user.currentUser.id);
 const currentUser=useSelect(state=>state.user.currentUser,
			(left,right)=>left.id===right.id&&left.name===right.name);
```
* 제한된 시간동안 Todo도 만들고 여러 라이브러리 공식문서를 보고 적용하면서 그 과정이 반복 훈련이 되어 좋았다. 단순 적용보다 깊이 이해하는것은 더 어려운 일이고 많이 부족하다고 느꼇다. 하지만 여러 상황에 대처하려면 필요한 일이라고 생각하게 되었다.
