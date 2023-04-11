import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
const FunctionForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState(NaN);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobno, setMobno] = useState("");
  const [address, setAddress] = useState("");
  const data = useSelector((state) => state);
  const hendleSubmitform = (e) => {
    e.preventDefault();
    const newEmpData = {
      id: id,
      name: name,
      email: email,
      mobno: mobno,
      address: address,
    };
    dispatch({ type: "add_Data", payload: newEmpData });
    navigate("/showFunction");
  };
  //    const hendleSubmitform=(e)=>{
  //     e.preventDefault()
  //     console.warn({id, name, email, mobno, address})
  //         axios.post('http://localhost:3000/users',{id, name, email, mobno, address})
  //         .then(result=>setStoreData(result.data))
  //         .catch(err=>console.error(err));
  //         dispatch({type:'add_Data', payload: storeData})
  //     }

  return (
    <div className="contain-form">
      <form>
        <table>
          <tr>
            <label>
              Id
              <input
                type="number"
                placeholder="id"
                onChange={(e) => setId(e.target.value)}
              />
            </label>
          </tr>
          <tr>
            <label>
              Full Name
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </tr>
          <tr>
            <label>
              Email
              <input
                type="email"
                placeholder="@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </tr>
          <tr>
            <label>
              Mob no.
              <input
                type="text"
                placeholder="Mobno."
                onChange={(e) => setMobno(e.target.value)}
              />
            </label>
          </tr>
          <tr>
            <label>
              Address
              <input
                type="address"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
          </tr>
          <tr>
            <button type="submit" className="btn" onClick={hendleSubmitform}>
              Submit
            </button>
          </tr>
          <tr>
            <Link to="/showFunction">Show Data</Link>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default FunctionForm;
