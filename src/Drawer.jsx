import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import RateReviewIcon from '@material-ui/icons/RateReview';
import GradeIcon from '@material-ui/icons/Grade';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  drawer: {
    width: "185px"
  },
  drawerList: {
    '& span': {
      color: '#007a50'
    }
  },
  icon:{
    '& svg ': {
      fill: '#007a50'
    },
  },
  drawerBox: {
    '& div:first-child ': {
      minWidth: '35px'
    },
  },
  signOut: {
    backgroundColor: '#ffffff',
    color: '#000000',
    "&:hover": {
      backgroundColor: '#007a50',
      color: '#ffffff',
    }
  },
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/")
    },
    {
      text: "Create Team",
      icon: <GroupIcon />,
      onClick: () => history.push("/Create-Team")
    },
    {
      text: "Rate Team",
      icon: <RateReviewIcon />,
      onClick: () => history.push("/Rate-Team")
    },
    {
      text: "Rate Student",
      icon: <GradeIcon />,
      onClick: () => history.push("/Rate-Student")
    },
    {
      text: "Profile",
      icon: <AccountBoxRoundedIcon />,
      onClick: () => history.push("/Profile")
    }
    
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem className={classes.drawerBox} button key={text} onClick={onClick}>
              {icon && <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>}
              <ListItemText className={classes.drawerList} primary={text} />
            </ListItem>
          );
        })}
        <ListItem>
          <Button className={classes.signOut} variant="contained" color="primary" disableElevation>
            Sign Out
          </Button>
        </ListItem>
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
