import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function RegisterPage(){
    const navigate=useNavigate()

    const [user,setUser]=useState(
        {
            fname:"",
            email:"",
            mobile:"",
            username:"",
            password:""
        }
    )

    const inputHandlar=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
    }
  const  onsubmit=(e)=>{
e.preventDefault();

    }
    return(<>

    <div className="container">
        <div className="row  justify-content-center ">
            <div className="col-md-4 p-4 text-center bg-warning shadow">
                <h3>Register User</h3>

                  <div className="mb-4">
                    <input type="text" placeholder="Fname" name="fname" value={user.fname} 
                    className="form-control"
                    onChange={inputHandlar}/>
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="email" name="email" value={user.email} 
                    className="form-control"
                    onChange={inputHandlar}/>
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="mobile" name="mobile" value={user.mobile} 
                    className="form-control"
                    onChange={inputHandlar}/>
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
                <div className="btn btn-info">Submit</div>
                <Link to="/login" className="btn btn-info mx-3" >Already register</Link>
              
            </div> 
        </div>
    </div>
    </>)
}