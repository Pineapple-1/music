import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router";
import Card from "../card/card";
import Post from "../post/post";

import api from "../../api/index";

const useStyles = makeStyles((theme) => ({

  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },

}));

export default function Album({ Token }) {
  const [feedItems, setFeedItems] = useState("");
  const [users, setUsers] = useState("");
  const classes = useStyles();
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
    <React.Fragment>
      <CssBaseline />

      <main>
      <Post Token={Token} setFeedItems={setFeedItems}/>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          
          <Grid container spacing={4}>
          {Token ? (
              feedItems && users ? (
                feedItems.map((feedItem) => (
                    <Grid item key = {feedItem.id} xs={12} sm={6} md={4}>
                    <Card
                      text={feedItem.status_text}
                      date={feedItem.created_on}
                      email={
                        users.find((user) => user.id === feedItem.user_profile)
                          .email
                      }
                      name={
                        users.find((user) => user.id === feedItem.user_profile)
                          .name
                      }
                      Token = {Token}
                      id = {feedItem.id}
                    />
                  </Grid>
                ))
              ) : (
                <div>Loading</div>
              )
            ) : (
              <Redirect to="redirect/" />
            )}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
