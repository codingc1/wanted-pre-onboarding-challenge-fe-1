// import React from "react";

import { BrowserRouter , Route, Routes,  } from "react-router-dom";
import { NotFound } from "../components/common/404";
import { Footer } from "../components/footer/footer";
import { Home } from "../page/home/home";
import { Login } from "../page/user/login";
import { SignUp } from "../page/user/signup";
import { LOGIN_ROUTE_NAME, NOTFOUND_ROUTE_NAME, SIGNUP_ROUTE_NAME } from "./route-name-constants";




export const LoggedOutRouter = () => { //v6에 맞게 수정 - swich exact  https://velog.io/@soryeongk/ReactRouterDomV6

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path={LOGIN_ROUTE_NAME} element={<Login />} />
      <Route path={SIGNUP_ROUTE_NAME} element={<SignUp />} />
      
      <Route path={NOTFOUND_ROUTE_NAME} element={<NotFound />} />
      <Route path='*' element={<Login />} />
     
    </Routes>
    <Footer />
  </BrowserRouter>
  );
};