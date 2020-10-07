import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import VisualizerImage1 from '../../images/VisualizerImage1.jpg'

const useStyles = makeStyles ((theme)=> ({
  root: {
    maxWidth: 375,
    backgroundColor: "white"
  },
  media: {
    height: 240,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export function ProjectCard(props) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={VisualizerImage1}
            title="Visualizer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.project.description}                 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {props.project.github}
          </Button>
        </CardActions>
      </Card>
  );
}

export default ProjectCard