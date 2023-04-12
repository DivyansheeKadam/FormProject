import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Show.css";
const ShowFunction = () => {
  const dispatch = useDispatch();
  const empData = useSelector((state) => state.reducer.empData);
  console.warn("showData", empData);
  return (
    <div className="tableContaint">
      <table className="tableData">
        <tr className="trContaint">
          <b>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone No.</td>
            <td>Address</td>
            <td></td>
            <td></td>
          </b>
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

    </div>
  );
};
export default ShowFunction;
