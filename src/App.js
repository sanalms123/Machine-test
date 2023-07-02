import logo from "./logo.svg";
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import MainLayOut from "./Layout/MainLayOut";
import Routers from "./Router/Routers";


function App() {

  return (
 <div>
    {/* <MainLayOut>
    
      <div className="d-flex">
      <h1>This body</h1>
      </div>
    </MainLayOut> */}
    <Routers/>
 </div>
  );
}

export default App;
