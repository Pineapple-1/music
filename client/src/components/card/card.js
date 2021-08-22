import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Divider from '@material-ui/core/Divider';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SimpleCard({name,email,text,date}) {
  const classes = useStyles();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formatedDate = new Date(date)
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
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
      <Divider variant="middle"/>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
        
      </CardActions>
    </Card>
  );
}
