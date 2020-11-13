import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
    flexGrow: 1,
    width: 250,
  },
});

export default function MultiSelectTreeView({ nameUnitDoc, handleGetName }) {
  const classes = useStyles();
  const listUnit = Object.keys(nameUnitDoc);

  return (
    <div>
      {listUnit.map(unit => (
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
          key={unit}
        >
          <TreeItem nodeId="1" label={unit}>
            {nameUnitDoc[unit].map(doc => (
              <TreeItem
                nodeId="2"
                label={doc.titleDoc}
                key={doc.titleDoc}
                onClick={() => handleGetName(doc.urlDoc)}
              />
            ))}
          </TreeItem>
        </TreeView>
      ))}
    </div>
  );
}