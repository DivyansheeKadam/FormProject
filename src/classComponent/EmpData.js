import { Component } from "react";
import EditButton from "./navigationButton/EditButton";
import EmpEdit from "./EmpEdit";
export class EmpData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employe: [],
      id: null,
      name: "",
      email: "",
      mobno: "",
      address: "",
      editData: " ",
      empId: "",
    };
  }
  //get data
  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ employe: result });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  //Delete Data
  handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then((response) => {
      alert(`"Delete" ${response}`);
    });
  };

  //Edit data
  handleEdit = (id, data) => {
    this.setState.editData = this.state.employe.filter((data) => {
      return id === data.id;
    });
    console.log(this.state.editData);
  };

  render() {
    const { error, employe } = this.state;
    if (error) {
      return <div> Error:{error.message}</div>;
    } else {
      return (
        <>
          <div className="tableContaint">
            <form>
              <table className="tableData">
                <tr className="trContaint">
                  <td>Id</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone No.</td>
                  <td>Address</td>
                  <td></td>
                  <td></td>
                </tr>
                {employe.map((employe, i) => (
                  <tr key={i} className="trContaint">
                    <td>{employe.id}</td>
                    <td>{employe.name}</td>
                    <td>{employe.email}</td>
                    <td>{employe.mobno}</td>
                    <td>{employe.address}</td>
                    <td>
                      <EditButton handleEdit={this.handleEdit(employe.id)} />
                    </td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => this.handleDelete(employe.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <EmpEdit editData={this.state.editData} />
                  </tr>
                ))}
              </table>
            </form>
            <div></div>
          </div>
        </>
      );
    }
  }
}
