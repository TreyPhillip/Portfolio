import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles ((theme)=> ({
  root: {
    maxWidth: 375,
    minHeight: 375,
    maxHeight: 375,
    backgroundColor: "white"
  },
  media: {
    height: 340,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={props.project.url}>
            <CardMedia
              component="img"
              height="150"
              image={props.project.image}
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.project.description}                 
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
        <a href={props.project.github} rel="noopener noreferrer" target="_blank">         
          <Button size="small" color="primary" label="GitHub">
            GitHub
          </Button>
        </a>
        </CardActions>
      </Card>
  );
}