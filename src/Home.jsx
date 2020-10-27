import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width:150,
    padding: 0,
    position: 'relative',
    background: 'rgbA(116,219,172,0.18)',
  },
  inner: {
    padding: 0,
  },
  cardsRow: {
    display: 'flex',
    padding: '40px 0',
  },
  itemWrap: {
    marginRight: 15,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000000',
    marginTop: '40px',
    fontWeight: 'bold',
  },
  headers: {
    fontSize: 25,
    textAlign: 'left',
    color: '#007a50',
    marginTop: '40px',
    fontWeight: 'bold',
  },

});


export default function Home() {
  const classes = useStyles();
  return (
  <div className="div-wraps">
  <h2 className="title">Home Page</h2>

  <Typography className={classes.headers} color="textSecondary" gutterBottom>
    Your Teammates
  </Typography>

    <div className={classes.cardsRow} >
      <div className={classes.itemWrap}>
        <Card className={classes.root} style={{ backgroundColor: '#2ccce4'}}>
          <CardContent className={classes.inner}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Ingrid
            </Typography>
          </CardContent>
        </Card>
      </div>
      
      <div className={classes.itemWrap}>
        <Card className={classes.root} style={{ backgroundColor: '#fccb00'}}>
          <CardContent className={classes.inner}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Amy
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.itemWrap}>
        <Card className={classes.root} style={{ backgroundColor: '#8a54ec'}}>
          <CardContent className={classes.inner}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Muhammad
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.itemWrap}>
        <Card className={classes.root} style={{ backgroundColor: '#4caf50'}}>
          <CardContent className={classes.inner}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Issam
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.itemWrap}>
        <Card className={classes.root} style={{ backgroundColor: '#f06292'}}>
          <CardContent className={classes.inner}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Mikala
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.itemWrap}>
        <Card className={classes.root} style={{ backgroundColor: '#ff9800'}}>
          <CardContent className={classes.inner}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Mohammad
            </Typography>
          </CardContent>
        </Card>
      </div>

    </div>

    <Typography className={classes.headers} color="textSecondary" gutterBottom>
    Recent Projects
    </Typography>

  </div>
  
  );
};