import { useNavigate } from "react-router-dom";

const SubmitButton = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="submit"
        className="btn"
        id="submitBTN"
        onClick={() => props.hendleSubmitform(navigate("/empdata"))}
      >
        Submit
      </button>
    </>
  );
};
export default SubmitButton;
