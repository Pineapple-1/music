import api from "./api/index";
import React,{useState,useEffect} from "react";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";

import "./App.css";

function App() {
  const [feedItems, setFeedItems] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await api.get("feed/");
      console.log(request.data);
      setFeedItems(request.data);
      return request.data;
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      hello , {feedItems[0]?.status_text}
    </div>
  );
}

export default App;
