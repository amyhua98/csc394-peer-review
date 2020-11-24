// PROFESSOR PROFILE

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ( {
  root: {
    maxWidth: window.innerWidth * 0.9,
    windows: "100%",
    '& > *': {
      margin: theme.spacing(1),
    },

  },
  media: {
    height: 140
  },
  paper: {
    textAlign: "center",
    padding: 5
  }
}));



export default function MediaCard() {
  const classes = useStyles();
  const [value] = React.useState(4);

  return (
  <div className="div-wraps">
  <h2 className="title">Profile</h2>

    <Card elevation={4} className={classes.root}>
      <Grid item>
        <Box display="flex" justifyContent="center" bgcolor="background.paper">
          <Badge
            color="primary"
            invisible={false}
            overlap="circle"
            badgeContent="✔"
          >
            <Avatar
              style={{ width: 150, height: 150, alignSelf: "center" }}
              alt="avatar"
              src=""
            />
          </Badge>
        </Box>
      </Grid>

      <Grid item>
        <Box display="flex" justifyContent="center" bgcolor="background.paper">
          <Typography variant="h6" gutterBottom>
            Professor John Smith
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Overall Rating</Typography>
            <Rating
            name="read-only"
            size="large"
            value={value} readOnly
            />
          </Box>
        </div>
      </Grid>

    </Card>

    <br />

    <Card>
    <CardContent className={classes.root} variant="outlined">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          CSC 394 Software Projects
        </Typography>
        <Button variant="outlined" color="primary">Team One</Button>
        <Button variant="outlined" color="primary">Team Two</Button>
        <Button variant="outlined" color="primary">Team Three</Button>
        <Button variant="outlined" color="primary">Team Four</Button>
      </CardContent>
    </Card>

    <br />

    <Card>
    <CardContent className={classes.root} variant="outlined">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          CSC 299 Sophomore Lab in Applied Computing
        </Typography>
        <Button variant="outlined" color="primary">Team One</Button>
        <Button variant="outlined" color="primary">Team Two</Button>
        <Button variant="outlined" color="primary">Team Three</Button>
        <Button variant="outlined" color="primary">Team Four</Button>
        <Button variant="outlined" color="primary">Team Five</Button>
        <Button variant="outlined" color="primary">Team Six</Button>
      </CardContent>
    </Card>

    <br />

    <Card>
    <CardContent className={classes.root} variant="outlined">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          CSC 371 Mobile Application Development for iOS
        </Typography>
        <Button variant="outlined" color="primary">Team One</Button>
        <Button variant="outlined" color="primary">Team Two</Button>
        <Button variant="outlined" color="primary">Team Three</Button>
      </CardContent>
    </Card>
  </div>
  );
}



//  STUDENT PROFILE


/*import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles({
  root: {
    maxWidth: window.innerWidth * 0.9,
    widows: "100%"
  },
  media: {
    height: 140
  },
  paper: {
    textAlign: "center",
    padding: 5
  }
});



export default function MediaCard() {
  const classes = useStyles();
  const [value] = React.useState(4);

  return (
  <div className="div-wraps">
  <h2 className="title">Profile</h2>

    <Card elevation={4} className={classes.root}>
      <Grid item>
        <Box display="flex" justifyContent="center" bgcolor="background.paper">
          <Badge
            color="primary"
            invisible={false}
            overlap="circle"
            badgeContent="✔"
          >
            <Avatar
              style={{ width: 150, height: 150, alignSelf: "center" }}
              alt="avatar"
              src=""
            />
          </Badge>
        </Box>
      </Grid>

      <Grid item>
        <Box display="flex" justifyContent="center" bgcolor="background.paper">
          <Typography variant="h6" gutterBottom>
            First, Last Name
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Overall Rating</Typography>
            <Rating
            name="read-only"
            size="large"
            value={value} readOnly
            />
          </Box>
        </div>
      </Grid>

    </Card>

    <br />

    <Card>
    <CardContent className={classes.root} variant="outlined">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          First, Last Name
        </Typography>
        <Typography variant="h5" component="h2">
          Team 2 Rating
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
            name="read-only"
            size="large"
            value={value} readOnly
            />
          </Box>
        </Typography>
        <Typography variant="body2" component="p">
          This person is a great team player. 
        </Typography>
      </CardContent>
    </Card>

    <br />

    <Card>
    <CardContent className={classes.root} variant="outlined">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          First, Last Name
        </Typography>
        <Typography variant="h5" component="h2">
          Individual Rating
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
            name="read-only"
            size="large"
            value={value} readOnly
            />
          </Box>
        </Typography>
        <Typography variant="body2" component="p">
          This person is great at backend. 
        </Typography>
      </CardContent>
    </Card>

    <br />

    <Card>
    <CardContent className={classes.root} variant="outlined">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          First, Last Name
        </Typography>
        <Typography variant="h5" component="h2">
          Team 2 Rating
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
            name="read-only"
            size="large"
            value={value} readOnly
            />
          </Box>
        </Typography>
        <Typography variant="body2" component="p">
          They are very organized and punctual.
        </Typography>
      </CardContent>
    </Card>

  </div>


    
  );
} */