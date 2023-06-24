import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import LeftSideBar from "./Component/LeftSideBar";
import { setContactForm } from "./Api/fetchClient";
import Card from "./Component/Card";
import List from "./Component/List";

function App() {
  const [CurrentState, setCurrentState] = useState(1);
  const [Data, setData] = useState();
  useEffect(() => {
    setContactForm().then((res) => {
      console.log("resData", res);
      setData(res);
    });
  }, []);
  const [CurrenetPage, setCurrenetPage] = useState(1)
  const [ID, setID] = useState()
const filterData = Data?.filter((items,i)=>(
  items?.id !== ID
))
console.log("Data",filterData);

const lengthPage = Data && Math?.round(Data?.length/6)
  return (
    <div className="App d-flex p-30">
      <LeftSideBar
        setCurrentState={setCurrentState}
        CurrentState={CurrentState}
      />
      <div style={{ width: "70%"}}>
        <div
          className="d-flex  flex-wrap justify-content-center p-70"
          style={{ gap: "20px", }}
        >
          {filterData?.slice((CurrenetPage*6)-6, CurrenetPage*6)?.map((items) =>
            CurrentState === 1 ? <Card items={items} setID={setID} /> : <List items={items} />
          )}
        </div>
        <div style={{paddingBottom:"60px"}} className="d-flex  justify-content-center">
          {[...new Array(lengthPage && lengthPage)].map((items,i)=>(
            <div style={{height:"30px",width:"30px",borderRadius:"50%"}} className={`mb-0 d-flex align-items-center justify-content-center ${CurrenetPage===i+1 ? "bg-white ":"bg-gray"}`} onClick={()=>setCurrenetPage(i+1)}>{i+1}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
