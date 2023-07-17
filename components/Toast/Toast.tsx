import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
    <>
      {" "}
      <ToastContainer
        autoClose={2000}
        position="bottom-left"
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default Toast;
