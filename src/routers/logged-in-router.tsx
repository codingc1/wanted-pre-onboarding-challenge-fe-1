import {  BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { NotFound } from "../components/common/404";
import { Footer } from "../components/footer/footer";
import { Home } from "../page/home/home";
import { Login } from "../page/user/login";
import { LOGIN_ROUTE_NAME } from "./route-name-constants";





export const LoggedInRouter = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path={LOGIN_ROUTE_NAME} element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
      {<Footer />}
    </Router>
  );
};



