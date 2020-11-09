import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

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

  listWrapper: {
    width: '100%',
    maxWidth: 640,
    '&  li': {
      marginBottom: 10,
      fontSize: '20px !important',
      fontWeight:'bold !important ',
      color: '#007a50',
      cursor: 'pointer',
      borderRadius: 4,
      background: 'rgbA(116,219,172,0.18)',
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
  },
  wrap: {
    display:'flex',
    alignItems: 'center',
  },
  workers: {
    width:20,
    height:20,
    borderRadius:'50%',
    marginRight: -5,
    border:'2px solid white',
  },
  usman: {
    background: '#ff9800'
  },
  ingrid: {
    background: '#2ccce4'
  },
  mikala: {
    background: '#f06292'
  },
  amy:{ 
    background: '#fccb00'
  },
  muhammad: {
    background: '#8a54ec'
  },
  issam:{
    background: '#4caf50'
  }
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
    

    <List className={classes.listWrapper}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Homework 3" />
        <ListItemSecondaryAction>
          <div className={classes.wrap}>
            <div title="Muhammad" className={`${classes.workers} ${classes.muhammad}`}></div>
            <div title="Usman" className={`${classes.workers} ${classes.usman}`}></div>
            <div title="Issam" className={`${classes.workers} ${classes.issam}`}></div>
            <div title="Mikala" className={`${classes.workers} ${classes.mikala}`}></div>
          </div>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Draw Mockup"  />
        <ListItemSecondaryAction>
          <div className={classes.wrap}>
            <div title="Muhammad" className={`${classes.workers} ${classes.muhammad}`}></div>
            <div title="Usman" className={`${classes.workers} ${classes.usman}`}></div>
            <div title="Ingrid" className={`${classes.workers} ${classes.ingrid}`}></div>
            <div title="Amy" className={`${classes.workers} ${classes.amy}`}></div>
            <div title="Issam" className={`${classes.workers} ${classes.issam}`}></div>
            <div title="Mikala" className={`${classes.workers} ${classes.mikala}`}></div>

          </div>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Code Backend" />
        <ListItemSecondaryAction>
          <div className={classes.wrap}>
            <div title="Mikala" className={`${classes.workers} ${classes.mikala}`}></div>
            <div title="Ingrid" className={`${classes.workers} ${classes.ingrid}`}></div>
          </div>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Code Pages (Frontend)" />
        <ListItemSecondaryAction>
          <div className={classes.wrap}>
            <div title="Usman" className={`${classes.workers} ${classes.usman}`}></div>
            <div title="Ingrid" className={`${classes.workers} ${classes.ingrid}`}></div>
            <div title="Mikala" className={`${classes.workers} ${classes.mikala}`}></div>
          </div>
        </ListItemSecondaryAction>
      </ListItem>
    </List>

  </div>
  
  );
};