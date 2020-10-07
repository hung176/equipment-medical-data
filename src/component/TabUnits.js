import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SavinaIcon from "../assets/savina.png";
import Savina300Icon from "../assets/savina300.png";
import CarinaIcon from "../assets/carina.png";
import Evita4Icon from "../assets/evita4.png";
import EvitaV300Icon from "../assets/evitav300.png";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  // tabUnit: {
  //   width: "35px"
  // }
});

export default function TabUnits() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabIcons = [
    {
      nameUnit: "Savina",
      iconPath: SavinaIcon,
    },
    {
      nameUnit: "Savina300",
      iconPath: Savina300Icon,
    },
    {
      nameUnit: "Carina",
      iconPath: CarinaIcon,
    },
    {
      nameUnit: "Evita4",
      iconPath: Evita4Icon,
    },
    {
      nameUnit: "Evita V300",
      iconPath: EvitaV300Icon,
    },
  ];

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        {tabIcons.map(tab => (
          <Tab
            // className={classes.tabUnit}
            icon={<img src={tab.iconPath} alt={tab.nameUnit} />}
            label={tab.nameUnit}
            key={tab.nameUnit}
          />
        ))};
      </Tabs>
    </Paper>
  );
}
