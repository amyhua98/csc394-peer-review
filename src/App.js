import React from "react";
import "./styles.css";
import Home from "./Home";
import CreateTeam from "./CreateTeam";
import RateStudent from "./RateStudent";
import RateTeam from "./RateTeam";
import Profile from "./Profile";
import { Route, Switch } from "react-router-dom";
import Drawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    overflow: 'auto'
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}/>
      <Switch>
      <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/Create-Team" render={props => <CreateTeam {...props} />} />
        <Route exact path="/Rate-Team" render={props => <RateTeam {...props} />} />
        <Route exact path="/Rate-Student" render={props => <RateStudent {...props} />} />
        <Route exact path="/Profile" render={props => <Profile {...props} />} />
      </Switch>
    </div>
  );
}

