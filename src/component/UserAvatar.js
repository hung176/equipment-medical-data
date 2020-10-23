import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips({ handleLogout, name }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        icon={<FaceIcon />}
        label={name}
        onDelete={handleLogout}
      />
    </div>
  );
}