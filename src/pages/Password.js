import React from "react";
import PasswordCard from "../component/PasswordCard";
import { Grid, makeStyles } from "@material-ui/core";
import atlan from "../assets/atlan.jpg";
import v500 from "../assets/evitaV500.jpg";
import a500 from "../assets/a500.jpg";
import vn500 from "../assets/vn500.jpg";
import primus from "../assets/primus.jpg";
import v300 from "../assets/v300.jpg";
import m540 from "../assets/m540.webp";

const passwordData = [
  {
    unitName: 'Atlan',
    imageURL: atlan,
    password: ['service: 8400', 'user: 0000']
  },
  {
    unitName: 'Evita V500',
    imageURL: v500,
    password: ['service: 8400', 'user: 0000']
  },
  {
    unitName: 'Perseus A500',
    imageURL: a500,
    password: ['service: 8400', 'user: 0000']
  },
  {
    unitName: 'Primus',
    imageURL: primus,
    password: ['service: 8400', 'user: 0000']
  },
  {
    unitName: 'VN500',
    imageURL: vn500,
    password: ['service: 8400', 'user: 0000']
  },
  {
    unitName: 'Evita V300',
    imageURL: v300,
    password: ['service: 8400', 'user: 0000']
  },
  {
    unitName: 'M540',
    imageURL: m540,
    password: ['service: 8550', 'biomed: 4756']
  },
];

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "16px",
    paddingTop: "30px",
    paddingRight: "16px",
  }
})

function Password() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      {passwordData.map(unit => (
        <Grid key={unit.unitName} item xs={12} sm={6} md={4} lg={3}>
          <PasswordCard unitPassword = {unit}/>
        </Grid>
      ))}
    </Grid>
  )
};

export default Password;