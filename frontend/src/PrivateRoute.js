import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
function PrivateRoute({ path, ...props }) {
  const { token } = useSelector((state) => state.User.User);


  
  return token ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/landing" />
  );
}

export default PrivateRoute;
