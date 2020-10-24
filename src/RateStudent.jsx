import React from "react";
import './Rating.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const rateStudent = () => {
  return <div>
  <h1 class="title">Rate Your Student</h1>
  <List class="teamForm" component="form" aria-label="questions">
    <ListItem >
      <ListItemText primary="Which are you rating?" />
      <select name="students" id="students">
        <option value="student1">Student 1</option>
        <option value="student2">Student 2</option>
        <option value="student3">Student 3</option>
        <option value="student4">Student 4</option>
      </select>
    </ListItem>
    <Divider />
    <ListItem >
      <ListItemText primary="How was the work ethics on the Team?" />
      <div class="stars">
        <input type="radio" id="star5" name="stars" value="5" />
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="stars" value="4" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="stars" value="3" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="stars" value="2" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="stars" value="1" />
        <label for="star1" title="text">1 star</label>
      </div>
    </ListItem>
    <ListItem>
      <ListItemText primary="Comment below on anything you'd like to add:" />
    </ListItem>
    <ListItem >
      <textarea class="commentBox" rows="20" cols="80"></textarea>
    </ListItem>
    <ListItem>
    <input class="submit" type="submit" value="Submit"/>
    </ListItem>
  </List>
  </div>
};

export default rateStudent;
