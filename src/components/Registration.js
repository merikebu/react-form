import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "please enter value in";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += "username";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += "username";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += "username";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += "username";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    }
    return isproceed;
  };
  const handleSubmit = (e) => {
    
      e.preventDefault();

      let regob = {
        id,
        name,
        password,
        email,
        phone,
        country,
        address,
        gender,
      };

      fetch("http://localhost:3005/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regob),
      })
        .then((res) => {
          toast.success("registered successfully");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("failed :" + err.message);
        });
    
  };
  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h1>register please</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    user name<span className="errmsg text-danger m-2">*</span>
                  </label>
                  <input
                    re
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    password<span className="errmsg text-danger m-2">*</span>
                  </label>
                  <input
                    type="password"
                    required value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    full name<span className="errmsg text-danger m-2">*</span>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    email<span className="errmsg text-danger m-2">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    phone<span className="errmsg text-danger m-2">*</span>
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    country<span className="errmsg text-danger m-2">*</span>
                  </label>
                  <select
                    className="form-control"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="kenya">Kenya</option>
                    <option value="uganda">Uganda</option>
                    <option value="tanzania">Tanzania</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>
                    address<span className="errmsg text-danger m-2">*</span>
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>gender</label>
                  <br></br>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      value="male"
                    />
                    <label class="form-check-label" for="option1">
                      male
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      value="female"
                    />
                    <label class="form-check-label" for="option2">
                      female
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
            <a className="btn btn-secondary m-2">back</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
