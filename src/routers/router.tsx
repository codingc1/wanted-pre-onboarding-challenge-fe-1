import {  BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { NotFound } from "../components/common/404";
import { Footer } from "../components/footer/footer";
import { Home } from "../page/home/home";
import { TodoDetail } from "../page/totos/todo-detail/todo-detail";
import { TodoList } from "../page/totos/todo-list";
import { TodoAdd } from "../page/totos/toto-list/todo-add";
import { Login } from "../page/user/auth/login";
import { SignUp } from "../page/user/auth/signup";
import { RequireAuth } from "./requireAuth";
import { ROUTES } from "./route-name-constants";


//</RequireAuth>

//footer안보이는 문제해결
export const TodoRouter = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />

      <Route path="/todos" element={
        <RequireAuth >
            <TodoList />
          </RequireAuth>
        }
      >
        <Route path=":todoId" element={<TodoDetail />} />
      </Route>
      
      <Route path='*' element={<NotFound />} />
    </Routes>
      <Footer />
    </Router>
  );
};



