import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigates=useNavigate()
  useEffect(()=>{
    let username=sessionStorage.getItem('username')
    if (username===''|| username===null) {
      navigates('/login')
    }

  },[])
  return (
    <div>
      <div className="header">
        <Link className="text-decoration-none m-2" to={'/'}>Home</Link>
        <Link className="text-decoration-none" to={'/login'}>log out</Link>
        <h2 className="text-center text-success">welcome</h2>
      </div>
    </div>
  );
};

export default Home;
