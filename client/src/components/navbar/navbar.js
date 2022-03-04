import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from "@material-ui/core/Link";
import SvgIcon from '@material-ui/core/SvgIcon';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links:{
      textDecoration: "none",
      marginRight:"10px",
      color: '#ffffff'
  }
}));
function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
export default function NavBar({Token}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
       <HomeIcon color="action" />
    </IconButton>
          <Typography variant="h6" className={classes.title}>
            <a className={classes.links} href="/"> Reminder</a>
          </Typography>
             {Token ? <Link className={classes.links} underline="none" href="/logout" variant="body2">Logout</Link> :
             <>
             <Link className={classes.links} underline="none" href="/signin" variant="body2">SignIn</Link>
             <Link className={classes.links} underline="none" href="/signup" variant="body2">SignUp</Link></>}

             
            
        </Toolbar>
      </AppBar>
    </div>
  );
}