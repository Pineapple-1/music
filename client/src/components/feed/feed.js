import React, { useEffect, useState } from "react";
import api from "../../api/index";
import Card from "../card/card";
import styles from "./feed.module.css";

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
    fetchData();
  }, [Token]);
  return (
    <div >
      <div className={styles.box}>
        <Card text={feedItems[0]?.status_text}/>
      </div>
    </div>
  );
};
