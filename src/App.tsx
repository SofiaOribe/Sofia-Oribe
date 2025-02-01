import React from "react";
import { withMainData } from "./hoc/with-main-data";

const TempApp = () => {
  return (
    <div>
      <Routes></Routes>
    </div>
  );
};

const App = withMainData(TempApp);
export default App;
