import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/Show.css";

const ShowFunction = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const empData = useSelector((state) => state.reducer.empData);
  const handleEdit=(id)=>{
    navigate(`/functionEditData/${id}`)
  }

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
              <button
                className="btn"
                onClick={() => {
                  handleEdit(data.id)
                }}
              >
                update
              </button>
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