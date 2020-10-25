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


const students = [
  {
    value: 'Student 1',
    label: 'Student 1',
  },
  {
    value: 'Student 2',
    label: 'Student 2',
  },
  {
    value: 'Student 3',
    label: 'Student 3',
  },
  {
    value: 'Student 4',
    label: 'Student 4',
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
});

export default function App() {
  const [student, setStudent] = useState("");
  const handleChange = e =>{
    setStudent(e.target.Student)
  }
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  return <div>
  <h1 class="title">Rate Your Student</h1>
  <List class="studentForm" component="form" aria-label="questions">
    <ListItem >
      <ListItemText primary="Which Student are you rating?" />
      {/* <select name="Students" id="Students">
        <option value="Student1">Student 1</option>
        <option value="Student2">Student 2</option>
        <option value="Student3">Student 3</option>
        <option value="Student4">Student 4</option>
      </select> */}
      <TextField value={student} variant="outlined" onChange= {handleChange} margin="dense">
      </TextField>
    </ListItem>
    <Divider />
    <ListItem >
      <ListItemText primary="How was the work ethics of this student?" />
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
      <Button variant="contained" color="primary" disableElevation>
        SUBMIT
      </Button>
    </ListItem>
  </List>
  </div>

  ;
};



