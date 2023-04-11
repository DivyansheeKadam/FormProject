import { useNavigate } from "react-router-dom";

const EditButton = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn"
        id="submitBTN"
        onClick={() => props.handleEdit(navigate("/empEdit"))}
      >
        Edit
      </button>
    </>
  );
};
export default EditButton;
