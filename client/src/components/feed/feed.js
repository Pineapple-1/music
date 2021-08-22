import React, { useEffect, useState } from "react";
import api from "../../api/index";
import Card from "../card/card";
import { Redirect } from "react-router";
import { Container, Grid } from "@material-ui/core";

const feed = (feedItems, users) => {
  if (feedItems && users) {
    return feedItems.map((feedItem) => (
      <Grid item key={feedItem.id} xs={9} sm={6} md={4} lg={4} xl={4}>
        <Card
          text={feedItem.status_text}
          date={feedItem.created_on}
          email={users.find((user) => user.id === feedItem.user_profile).email}
          name={users.find((user) => user.id === feedItem.user_profile).name}
        />
      </Grid>
    ));
  } else {
    return <div>Loading</div>;
  }
};

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
      fetchUser();
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

  return (
    <Container>
        <Grid container  >
        {Token ? feed(feedItems, users) : <Redirect to="redirect/" />}
      </Grid>
      </Container>

  );
};
