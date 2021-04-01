import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiEndpoint } from "../proxy";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { MyCard } from "./reuseable/MyCard";

export const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      setLoading(true);
      let result = await axios.get(apiEndpoint);
      setLoading(false);
      if (result) {
        setUsers(result.data.data);
      }
    } catch (error) {
      console.log(error);
      alert("Data Fetching Failed Due to Server Error");
    }
  };

  return (
    <div>
      {loading && <CircularProgress />}
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        All Users
      </Typography>
      <Grid container style={{ padding: "5px" }}>
        {loading === false &&
          users.map((user) => <MyCard key={user.id} user={user} />)}
      </Grid>
    </div>
  );
};
