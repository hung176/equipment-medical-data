import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DescriptionIcon from '@material-ui/icons/Description';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
}));

export default function ListNameDoc({ nameUnitDoc, handleDocUrl }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };

  const onViewDoc = (url) => {
    handleDocUrl(url);
    // history.push({pathname: `/documents/${title}`});
  };

  return (
    <>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
    {Object.keys(nameUnitDoc).map(unit => (
      <div>
        <ListItem button onClick={handleClick}>
          <ListItemText primary={unit} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {nameUnitDoc[unit].map(detail => (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button 
              className={classes.nested}
              onClick={() => onViewDoc(detail.urlDoc)}
            >
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary={detail.titleDoc} />
            </ListItem>
          </List>
        </Collapse>
        ))}
      </div>
    ))};
    </List>
    </>
  );
}
