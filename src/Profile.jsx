import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';


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

  return (
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
            Full Name
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Custom empty icon</Typography>
        <Rating
        name="customized-empty"
        defaultValue={2}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
        </Box> 
        </div>
      </Grid>

    </Card>

    
  );
}