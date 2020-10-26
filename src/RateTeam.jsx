import React, { useState } from "react";
import './Rating.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';


const teams = [
  {
    value: 'Team 1',
    label: 'Team 1',
  },
  {
    value: 'Team 2',
    label: 'Team 2',
  },
  {
    value: 'Team 3',
    label: 'Team 3',
  },
  {
    value: 'Team 4',
    label: 'Team 4',
  },
];

const labels = {
  0.5: 'Unacceptable',
  1: 'Bad',
  1.5: 'Poor',
  2: 'Not Good',
  2.5: 'Ok',
  3: 'Decent!',
  3.5: 'Good!',
  4: 'Great!',
  4.5: 'Excellent!',
  5: 'Amazing!',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
  submit: {
    background: '#007a50',
  }
});

export default function App() {
  const [team, setTeam] = useState("");
  const handleChange = e =>{
    setTeam(e.target.team)
  }
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  return <div>
  <h2 class="title">Rate Your Team</h2>
  <List class="teamForm" component="form" aria-label="questions">
    <ListItem >
      <ListItemText primary="Which Team are you rating?" />
      {/* <select name="Teams" id="Teams">
        <option value="Team1">Team 1</option>
        <option value="Team2">Team 2</option>
        <option value="Team3">Team 3</option>
        <option value="Team4">Team 4</option>
      </select> */}
      <TextField value={team} variant="outlined" onChange= {handleChange} margin="dense">
      </TextField>
    </ListItem>
    <Divider />
    <ListItem >
      <ListItemText primary="How was the work ethics of this Team?" />
      <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
    </ListItem>
    <ListItem>
      <ListItemText primary="Comment below on anything you'd like to add:" />
    </ListItem>
    <ListItem >
      <TextField variant="outlined" multiline rows={15} fullWidth={true} >
      </TextField>
    </ListItem>
    <ListItem>
      <Button className={classes.submit} variant="contained" color="primary" disableElevation>
        SUBMIT
      </Button>
    </ListItem>
  </List>
  </div>

  ;
};



