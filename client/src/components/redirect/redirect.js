import React from "react";
import gif from "../../assets/robot.gif";
import { Container, Grid, Link } from "@material-ui/core";
import Styles from "./redirect.module.css";

export const Redirect = () => {
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
              <h2>Looks Like You Forgot To Log In.</h2>{" "}
            </div>
            <div className={Styles.underline}>
            <Link href ="/signin">
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
