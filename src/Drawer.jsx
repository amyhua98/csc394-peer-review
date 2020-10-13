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

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
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
    }
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
