import React, { useEffect } from "react";
import gif from "../../assets/space.gif";
import { Container, Grid, Link } from "@material-ui/core";
import Styles from "./logout.module.css";

export const Logout = ({ setToken }) => {
  useEffect(() => {
    let token = localStorage.clear("Token");
    setToken(token);
  });
  return (
    <div>
      <Container>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <div className={Styles.space}>
              <h2>Looks Like You Logged Out.</h2>{" "}
            </div>
            <div className={Styles.underline}>
            <Link href="signin/">
              <h3>Sign in</h3>
            </Link>
            </div>
           
          </Grid>
          <Grid item>
            {" "}
            <div className={Styles.gif}>
              <img src={gif} alt="gif" />
            </div>{" "}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
