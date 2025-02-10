import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigates = useNavigate();
  useEffect(()=>{
      sessionStorage.clear()
  
    },[])

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("please enter username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("please enter paswood");
    }
    return result;
  };
  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:3005/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("please  insert correct username");
          } else {
            if (resp.password === password) {
              toast.success("success");
              sessionStorage.setItem('username',username)
              navigates("/");
            } else {
              toast.error("enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("login error due to:" + err.message);
        });
    }
  };
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>user login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  user name<span className="text-danger m-2">*</span>
                </label>
                <input
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label>
                  password<span className="text-danger m-2">*</span>
                </label>
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                login
              </button>
              <Link className="btn btn-success m-2" to={"/register"}>
                new user
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
