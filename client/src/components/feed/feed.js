import React, { useEffect, useState } from "react";
import api from "../../api/index";
import Card from "../card/card";
import styles from "./feed.module.css";
import { Redirect } from "react-router"

export const Feed = ({ Token }) => {
  const [feedItems, setFeedItems] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await api.get("feed/", {
        headers: { Authorization: `Token ${Token}` },
      });
      console.log(request.data);
      setFeedItems(request.data);
      return request.data;
    }
    if (Token) {
      fetchData();
    }
    
  }, [Token]);

  const feed = (feedItems)=>{
    if(feedItems)
    {
      return (
        feedItems.map(feedItem => ( <Card key={feedItem.id} text= {feedItem.status_text}/>))
      )
    }
    else{
      return(
        <div>Loading</div>
      )
    }
  }
  return (
    <div>
      <div className={styles.box}>
      {
        Token?feed(feedItems):<Redirect to= 'redirect/'/>
      }
      </div>
    </div>
  );
};
