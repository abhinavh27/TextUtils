import "./App.css";
import Navbar from "./Components/Navbar";
import CaseConvert from "./Components/CaseConvert";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <CaseConvert heading="Enter the text to process" />
      </div>
    </>
  );
}

export default App;
