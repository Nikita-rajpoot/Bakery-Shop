import React from "react";

const Login = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span> Login
      </button>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleForm"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleForm"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="checkbox"
                    className="custom-control custom-checkbox"
                    id="exampleCheck1"
                  />
                  <label className="custom-input-label" htmlfor="checkbox">
                    Remember me
                  </label>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary w-10 ml-5">Sign in</button>
                </div>
                <p className="text-right">
                  Forget <a href="">Password?</a>
                  <a href="">
                    SignUp
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Login;
