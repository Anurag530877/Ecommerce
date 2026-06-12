import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function LoginPage(){
    const navigate=useNavigate();

    const [user,setUser]=useState(
        {
            username:"",
            password:""
        }
    )

    const inputHandlar=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
    }

    const onsubmit=(e)=>{
e.preventDefault();
    }
    return(<>


    <div className="container">

        <form onSubmit={onsubmit} >
        <div className="row justify-content-center ">
            <div className="col-md-4 p-4 text-center bg-warning shadow">
                <div className="mb-3">
                <h3>Login User</h3>
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="username" name="username" value={user.fname} 
                    className="form-control"
                    onChange={inputHandlar}/>
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="password" name="password" value={user.password} 
                    className="form-control"
                    onChange={inputHandlar}/>
                </div>
                <div className="mb-4">
                    <button className="btn btn-info" >Submit</button>
                    <Link to="/register" className="btn btn-info mx-3" >Already Login</Link>
                </div>
            </div>
        </div>
        </form>
    </div>
    </>)
}