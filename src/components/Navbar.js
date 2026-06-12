import "./Navbar.css";
import { FaCoins,FaHome, FaShoppingCart } from "react-icons/fa"
import CategoryBar from "./CategeryBar";
export default function TopNav(){
  return(<>

  <div className="container-fluid bg-light py-2 px-3 ">
  <div className="d-flex justify-content-between">

    <div>
      <button className="btn btn-info me-2">Flipkart</button>
      <button className="btn btn-warning mx-3">Travel</button>
    </div>

    <div>
      <h6 className="m-0">
        Home <FaHome />
      </h6>
   
</div>
    <div>
      <h6 className="m-0">
        Coin <FaCoins />
      </h6>
    </div>

  </div>
</div>

{/* main nav */}
<div className="container-fluid bg-dark text-light py-3">
  <div className="d-flex align-items-center justify-content-between flex-nowrap">


    {/* Search */}
    <div className="mx-3 flex-grow-1">
      <input
        type="text"
        placeholder="Search Products..."
        className="form-control"
      />
    </div>

    {/* Cart */}
    <div className="mx-3">
      <h6 className="m-0">
        <FaShoppingCart/> Cart
      </h6>
    </div>

    {/* Login */}
    <div>
      <button className="btn btn-info">
        Login
      </button>
    </div>

  </div>
</div>

<CategoryBar/>
  </>)

}