import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Show.css";
const ShowFunction = () => {
  const dispatch = useDispatch();
  const empData = useSelector((state) => state.reducer.empData);
  console.warn("show_Data", empData);
  
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
                <button className="btn"> Edit </button>
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
