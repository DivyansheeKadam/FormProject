import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Form.css";
import { useDispatch } from "react-redux";

const FunctionEditData = () => {
  const dispatch = useDispatch();
  let data = useLocation();
  const navigate = useNavigate();

  const [id, setId] = useState(data.state.id);
  const [name, setName] = useState(data.state.name);
  const [email, setEmail] = useState(data.state.email);
  const [mobno, setMobno] = useState(data.state.mobno);
  const [address, setAddress] = useState(data.state.address);

  const hendleSubmitform = (e) => {
    e.preventDefault();
    const newEmpData = {
      id: id,
      name: name,
      email: email,
      mobno: mobno,
      address: address,
    };
    dispatch({ type: "edit_Data", payload: newEmpData });
    navigate("/showfunction");
  };

  // const hendleSubmitform=(e)=>{
  //     e.preventDefault()
  //     axios.put(`http://localhost:3000/users/${id}`, {id, name, email, mobno, address})
  //     .then((result)=> {
  //         alert("data updating")
  //         })
  
  //     .catch(err=>console.log(err));
  // }

  return (
    <div className="contain-form">
      <form>
        <table>
          <tr>
            <label>
              Id
              <input
                type="text"
                placeholder="id"
                value={id}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </tr>
          <tr>
            <label>
              {" "}
              Email
              <input
                type="email"
                placeholder="@gmail.com"
                value={email}
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
                value={mobno}
                onChange={(e) => setMobno(e.target.value)}
              />
            </label>
          </tr>
          <tr>
            <label>
              {" "}
              Address
              <input
                type="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
          </tr>
          <tr>
            <button type="submit" onClick={hendleSubmitform}>
              Submit
            </button>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default FunctionEditData;
