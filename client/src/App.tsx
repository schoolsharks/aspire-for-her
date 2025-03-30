import { Route, Routes } from "react-router-dom";
import "./App.css";
import ApplicantsMain from "./pages/applicants/ApplicantsMain";
import UsersMain from "./pages/users/UsersMain";
// import AdminMain from "./pages/admin/AdminMain";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<ApplicantsMain />} />
      <Route path="/users/*" element={<UsersMain />} />
      {/* <Route path="/admin/*" element={<AdminMain />} /> */}
    </Routes>
  );
}

export default App;
