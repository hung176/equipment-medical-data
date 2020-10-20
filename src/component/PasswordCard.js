import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { blue } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonPass: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function RecipeReviewCard({ unitPassword }) {
  const { unitName, imageURL, password } = unitPassword;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          {unitName[0]}
        </Avatar>
      }
      title={unitName}
    />
    <CardMedia
      className={classes.media}
      image={imageURL}
      title={unitName}
    />
  
    <CardActions disableSpacing>
      <Link
        component="button"
        variant="body2"
        onClick={handleExpandClick}
      >
        Show password
      </Link>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.buttonPass}>
          {password.map(pass => (
            <Button size="small" variant="contained" color="primary" key={pass}>
              {pass}
            </Button>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}