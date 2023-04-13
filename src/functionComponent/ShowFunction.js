import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/Show.css";
import { useState } from "react";
// import FunctionEditData from "./FunctionEditData";

const ShowFunction = () => {
  const dispatch = useDispatch();
  const [editData, setEditData]= useState([])
  const empData = useSelector((state) => state.reducer.empData);
  console.warn("showData", empData);
  
  return (
    <div className="tableContaint">
      <table className="tableData">
        <tr className="trContaint">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Address</th>
            <th></th>
            <th></th>
        </tr>
        {empData.map((data, i) => (
          <tr key={i} className="trContaint">
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.mobno}</td>
            <td>{data.address}</td>
            <td>
                <Link to="/functionEditData" state={data}>
                <button className="btn" >Edit</button>
              </Link>
            </td>
            {/* <td>
            <button className="btn" onClick={()=>{setEditData( empData.filter((fdata)=>{
              return data.id === fdata.id
            }))
            console.log(editData)}}>update</button>

            </td> */}
            <td>
              <button
                className="btn"
                onClick={() =>
                  dispatch({ type: "remove_Data", payload: data.id })
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
                <div className="displayedit">
                    {/* <FunctionEditData editData={editData}/> */}
                </div>

    </div>
  );
};
export default ShowFunction;