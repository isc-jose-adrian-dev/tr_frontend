import React, { Component } from 'react'

export default class SignUp extends Component {
  constructor(props){
    super (props)
     this.state={
      fname:"",
      lname:"",
      email:"",
      password:"",
     };
     this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e){
  e.preventDefault();
  const { fname,lname,email,password} = this.state;
  console.log(fname,lname,email,password);
  const apiUrl = process.env.REACT_APP_API_HOST;
  fetch(`http://${apiUrl}:8080/register`,{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      fname,
      lname,
      email,
      password
    }),

  }
  ).then((res)=>res.json())
  .then((data)=>{
    console.log(data, "userRegister");
  });
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Registrarse</h3>

        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e)=> this.setState({ fname: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Apellido</label>
          <input type="text" className="form-control" placeholder="Last name"
           onChange={(e)=> this.setState({ lname: e.target.value})} />
        </div>

        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=> this.setState({ email: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Contrasena</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=> this.setState({ password: e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
        <p className="forgot-password text-right">
          Ya registrado? <a href="/sign-in">Iniciar Sesion?</a>
        </p>
      </form>
    )
  }
}
