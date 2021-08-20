import React, { useEffect, useState } from "react";
import api from "../../api/index";
import Card from "../card/card";
import styles from "./feed.module.css";
import { Redirect } from "react-router";

export const Feed = ({ Token }) => {
  const [feedItems, setFeedItems] = useState("");
  const [users, setUsers] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await api.get("feed/", {
        headers: { Authorization: `Token ${Token}` },
      });
      console.log(request.data);
      setFeedItems(request.data);
      fetchUser()
      return request.data;
    }
    async function fetchUser() {
      const request = await api.get("profile/");
      console.log(request.data);
      setUsers(request.data);
      return request.data;
    }

    if (Token) {
      fetchData();      
    }
  }, [Token]);

  const feed = (feedItems,users) => {
    if (feedItems && users) {
      return feedItems.map((feedItem) =>(
          <div className={styles.top} key={feedItem.id}>
          <Card
            text={feedItem.status_text}
            email = {users.find(user => user.id === feedItem.user_profile).email}
            name = {users.find(user => user.id === feedItem.user_profile).name}/>
            
        </div>
        ));
    } else {
      return <div>Loading</div>;
    }
  };
  return (
    <div>
      <div className={styles.box}>
        {Token ? feed(feedItems,users) : <Redirect to="redirect/" />}
      </div>
    </div>
  );
};
