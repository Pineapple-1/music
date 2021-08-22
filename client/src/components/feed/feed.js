import React, { useEffect, useState } from "react";
import api from "../../api/index";
import Card from "../card/card";
import { Redirect } from "react-router";
import { Grid } from "@material-ui/core";
import Post from "../post/post";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px"
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));



export const Feed = ({ Token }) => {
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
    <>
     <Post Token = {Token} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={5}>
            {Token ? (
              feedItems && users ? (
                feedItems.map((feedItem) => (
                  <Grid
                    item
                    key={feedItem.id}
                  >
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
        </Grid>
      </Grid>
    </>
  );
};
