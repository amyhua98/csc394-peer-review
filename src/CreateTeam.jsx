import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import addSvg from './assets/images/add.svg';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:200,
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
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 56,
    textAlign: 'center',
    color: '#007a50',
    marginTop: '40px',
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
    textAlign: 'center',
    color: '#007a50',
    fontWeight: '600',
  },
  members: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
  addBtnWrap: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  addBtn: {
    backgroundColor: 'transparent',
  },
  addBtn:{
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover img': {
      width: 25,
    },
  },
  img: {
    width: 20,
    transition: 'all 0.2s'
  },
  accordion: {
    border: 'none',
    boxShadow: 'none',
    color: 'rgb(5,155,103)',
  },
  AddTeamDiv: {
    width: 275,
    height: 272,
    background: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 20px 20px rgba(238, 238, 238, 0.7)',
    transition: 'all 0.2s',
    cursor: 'pointer',
    '&  img': {
      width: 75,
    },
    '&:hover': {
      marginTop: '-15px',
      boxShadow: 'none',
    }
  }
});

export default function CreateTeam() {
  const classes = useStyles();
  return (
  <div className="div-wraps">
    <h2>Create Teams</h2>
    <div className={classes.cardsRow}>
      <div className={classes.itemWrap}>
      <Card className={classes.root}>
      <CardContent className={classes.inner}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          1
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Team 1
        </Typography>
      </CardContent>
      <CardContent className={classes.lists}>
     
      </CardContent>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  className={classes.members}>Members</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
                <ListItem>
                  <ListItemText> Amy </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText> Ingrid </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText> Usman </ListItemText>
                </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <CardActions className={classes.addBtnWrap}>
        <Button size="small" className={classes.addBtn} tile="Add Member">
          <img  className={classes.img} alt="Remy Sharp" src={addSvg} />
        </Button>
      </CardActions>
    </Card>
      </div>
      <div className={classes.itemWrap}>
      <Card className={classes.root}>
      <CardContent className={classes.inner}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          2
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Team 2
        </Typography>
      </CardContent>
      <CardContent className={classes.lists}>
     
      </CardContent>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  className={classes.members}>Members</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
                <ListItem>
                  <ListItemText> Amy </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText> Ingrid </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText> Usman </ListItemText>
                </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <CardActions className={classes.addBtnWrap}>
        <Button size="small" className={classes.addBtn} tile="Add Member">
          <img  className={classes.img} alt="Remy Sharp" src={addSvg} />
        </Button>
      </CardActions>
    </Card>
      </div>
      <div className={classes.itemWrap}>
        <Button className={classes.AddTeamDiv}>
          <img className={classes.img} alt="Remy Sharp" src={addSvg} />
        </Button>
        </div>
    </div>
  </div>
  );
};

// /export default createTeam;
