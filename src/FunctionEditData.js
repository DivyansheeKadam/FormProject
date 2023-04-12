import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Form.css";
import { useDispatch } from "react-redux";

const FunctionEditData = () => {
  const dispatch = useDispatch();
  let data = useLocation();
  const navigate = useNavigate();

  const [allData, setAllData] = useState({
    id: data.state.id,
    name: data.state.name,
    email: data.state.email,
    mobno: data.state.mobno,
    address: data.state.address,
  });

  const hendleSubmitform = (e) => {
    e.preventDefault();
    console.log(allData);

    dispatch({ type: "edit_Data", payload: allData });
    navigate("/showfunction");
  };
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
                value={allData.id}
                onChange={(e) => setAllData({ ...allData, id: e.target.value })}
              />
            </label>
          </tr>
          <tr>
            <label>
              Full Name
              <input
                type="text"
                placeholder="Full Name"
                value={allData.name}
                onChange={(e) =>
                  setAllData({ ...allData, name: e.target.value })
                }
              />
            </label>
          </tr>
          <tr>
            <label>
              Email
              <input
                type="email"
                placeholder="@gmail.com"
                value={allData.email}
                onChange={(e) =>
                  setAllData({ ...allData, email: e.target.value })
                }
              />
            </label>
          </tr>
          <tr>
            <label>
              Mob no.
              <input
                type="text"
                placeholder="Mobno."
                value={allData.mobno}
                onChange={(e) =>
                  setAllData({ ...allData, mobno: e.target.value })
                }
              />
            </label>
          </tr>
          <tr>
            <label>
              Address
              <input
                type="address"
                placeholder="Address"
                value={allData.address}
                onChange={(e) =>
                  setAllData({ ...allData, address: e.target.value })
                }
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
