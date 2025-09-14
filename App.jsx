// import Student from "./Students";
// import Complaint from "./Complaint";
// function App(){
//   return(
//     <>
//     <Student/>
//     <Complaint/>
//     </>
//   );
// }
// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Students";
import Complaint from "./Complaint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/Complaint" element={<Complaint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
