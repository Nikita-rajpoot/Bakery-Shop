import React from "react";

const Signup = () => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span> Register
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="signupModal"
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
                  <label htmlFor="exampleInput" className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleForm"
                    placeholder="UserName"
                  />
                </div>
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
                <div>
                  <button className="btn btn-primary w-40 mb-4">
                    <i class="bi bi-google"></i> Sign up With Google
                  </button>
                  <br></br>
                  <button className="btn btn-primary w-40 mb-4">
                    <i class="bi bi-facebook"></i> Sign up With facebook
                  </button>
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
                <button
                  type="submit"
                  className="btn btn-outline-primary w-10 ml-5"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
