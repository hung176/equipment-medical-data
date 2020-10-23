import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div >
      <CircularProgress
        className={classes.root}
        size={20}
      />
    </div>
  );
}