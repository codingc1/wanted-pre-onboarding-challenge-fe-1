import {  BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { NotFound } from "../components/common/404";
import { Footer } from "../components/footer/footer";
import { Home } from "../page/home/home";
import { TodoList } from "../page/totos/todo-list";
import { Login } from "../page/user/auth/login";
import { SignUp } from "../page/user/auth/signup";
import { RequireAuth } from "./requireAuth";
import { ROUTES } from "./route-name-constants";




//footer안보이는 문제해결
export const TodoRouter = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<SignUp />} />

      <Route path={ROUTES.TODOLIST} element={
        <RequireAuth>
            <TodoList />
        </RequireAuth>}
      />
      
      <Route path='*' element={<NotFound />} />
    </Routes>
      <Footer />
    </Router>
  );
};



