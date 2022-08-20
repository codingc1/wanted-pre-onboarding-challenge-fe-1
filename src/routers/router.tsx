import {  BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { NotFound } from "../components/common/404";
import { Footer } from "../components/footer/footer";
import { Home } from "../page/home/home";
import { TodoDetail } from "../page/totos/todo-detail/todo-detail";
import { TodoList } from "../page/totos/todo-list";
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

      <Route path={ROUTES.TODOLIST} element={
        
            <TodoList />
        }
      >
        
      </Route>
      <Route path={ROUTES.TODOLIST+'/:id'} element={<TodoDetail />} />
      
      <Route path='*' element={<NotFound />} />
    </Routes>
      <Footer />
    </Router>
  );
};



