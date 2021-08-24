import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import api from "../../api/index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },

  avatar: {
    backgroundColor: red[500],
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

export default function SimpleCard({
  name,
  email,
  text,
  date,
  Fid,
  Pid,
  Token,
  setFeedItems,
  setText,
  setUpdate,
  setValue,
}) {
  const classes = useStyles();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatedDate = new Date(date);

  const deleteitem = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${Token}`,
    };

    if (email === Pid) {
      const request = await api.delete(`feed/${Fid}/`, { headers: headers });
      const feed = await api.get("feed/", { headers: headers });
      setFeedItems(feed.data);
      console.log(request);
    } else {
      alert("Shame on you !! it is not your post delete your posts");
    }
  };
  const edititem = () => {
    if (email === Pid) {
      setUpdate(Fid);
      setText(text);
      setValue(text)
    } else {
      alert("Shame on you !! it is not your post update your posts");
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={edititem}>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={formatedDate.toLocaleDateString(undefined, options)}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton className={classes.expand} onClick={deleteitem}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
