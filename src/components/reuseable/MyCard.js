import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "5px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginTop: "7%",
    marginLeft: "2%",
  },
}));

export const MyCard = (props) => {
  let { user } = props;
  const classes = useStyles();
  return (
    <Grid item lg={4} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <Avatar alt="Remy Sharp" src={user.avatar} className={classes.large} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {user.first_name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {user.last_name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {user.email}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};
