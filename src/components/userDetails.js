import React, {Component} from "react";

export default class UserDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData: "",
        }
    }
    componentDidMount(){
        const apiUrl = process.env.REACT_APP_API_HOST;
        fetch(`http://${apiUrl}:8080/userData`,{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body:JSON.stringify({
     token: window.localStorage.getItem("token"),
    }),

  }
  ).then((res)=>res.json())
  .then((data)=>{
    console.log(data, "userData");
    this.setState({userData:data.data});
  });
}
logOut=()=>{
    window.localStorage.clear();
    window.location.href="./sign-in";
}
    render() {
        return (
            <div>
                Bienvenido al sitio web
                <br/>
                <button onClick={this.logOut} className="btn btn-primary">Log Out</button>
            </div>
        );
    }
}