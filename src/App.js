import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./Redux/Store";
import { FormClass } from "./classComponent/FormClass";
import EmpData from "./classComponent/EmpData";
import EmpEdit from "./classComponent/EmpEdit";
import FunctionEditData from "./functionComponent/FunctionEditData";
import FunctionForm from "./functionComponent/FunctionForm";
import Layout from "./Routing/Layout";
import ShowFunction from "./functionComponent/ShowFunction";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter basename="/formproject" >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="formClass" element={<FormClass />} />
              <Route path="empData" element={<EmpData/>}/>
              <Route path="empEdit" element={<EmpEdit />} />
        
              {/* Function From Routing */}
              <Route path="functionForm" element={<FunctionForm />} />
              <Route path="showfunction" element={<ShowFunction />} />
              <Route path="functionEditData" element={<FunctionEditData />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;