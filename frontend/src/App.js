import { useState } from "react";
import Data from "./components/Data";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const fetchApiHandler = async () => {
    const response = await fetch("http://localhost:5000/api");
    const data = await response.json();
    // console.log(data.data.project);
    setApiData(data.data.project);
  };

  console.log(apiData);
  return (
    <div style={{ background: "skyblue" }}>
      <div
        style={{
          textAlign: "center",
          padding: "20px 20px",
          border: "none",
        }}
      >
        <button
          onClick={fetchApiHandler}
          style={{
            border: "none",
            background: "yellow",
            fontFamily: "monospace",
            padding: "12px 12px",
            borderRadius: "8px",
          }}
        >
          Fetch Data Results
        </button>
      </div>
      {apiData.map((e) => (
        <Data data={e} key={e._id} />
      ))}
    </div>
  );
};

export default App;
