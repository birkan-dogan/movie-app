import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = { displayName: "birkan" }; // demo authentication
  // const currentUser = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            <h4>React Movie App</h4>
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize">
                  {currentUser.displayName}
                </h5>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate("/")}
                >
                  LogOut
                </button>
              </>
            ) : (
              <>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate("/login")}
                >
                  LogIn
                </button>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
