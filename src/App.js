import React from "react";
import "./styles.css";
import CreateTeam from "./CreateTeam";
import RateStudent from "./RateStudent";
import RateTeam from "./RateTeam";
import { Route, Switch } from "react-router-dom";
import Drawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
        <Route exact path="/Create-Team" render={props => <CreateTeam {...props} />} />
        <Route exact path="/Rate-Team" render={props => <RateTeam {...props} />} />
        <Route exact path="/Rate-Student" render={props => <RateStudent {...props} />} />
      </Switch>
    </div>
  );
}
