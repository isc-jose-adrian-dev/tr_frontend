import React, { Component } from 'react'

export default class Login extends Component {
constructor(props){
  super (props)
  this.state={
    email:"",
    password:"",
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(e){
  e.preventDefault();
  const {email,password} = this.state;
  console.log(email,password);
  const apiUrl = process.env.REACT_APP_API_HOST;
  fetch(`http://${apiUrl}:8080/login`,{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body:JSON.stringify({
      email,
      password,
    }),

  }
  ).then((res)=>res.json())
  .then((data)=>{
    console.log(data, "userRegister");
    if(data.status === "ok"){
      alert("login successfull");
      window.localStorage.setItem("token",data.data);
      window.localStorage.setItem("loggedIn",true);

      window.location.href="./userDetails";
    }
  });
}

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <h3>Iniciar Sesion</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Contrasena</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
             Recuerdame
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Iniciar
          </button>
        </div>
        <p className="forgot-password text-right">
          Olvido <a href="oo">Contrasena?</a>
        </p>
      </form>
    )
  }
}
