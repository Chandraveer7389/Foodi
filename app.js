import React from "react";
import ReactDOM from "react-dom/client";
const Title = <h1>Hey, my name is</h1>
const App = () => {
  return (
    <div>
        {Title}
      <h1>Chandraveer</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
