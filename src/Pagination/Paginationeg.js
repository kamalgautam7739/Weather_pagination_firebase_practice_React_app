import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Paginationeg() {
  const [passenger, setPassenger] = useState({
    data: [],
    isLoading: true,
    totalPage: 0,
    error: false,
    page: 0,
  });
  let handleChange = (e, newPage) => {
    passenger.page = newPage - 1;
    setPassenger({ ...passenger, passenger });
  };

  function apiCall() {
    axios
      .get(
        "https://api.instantwebtools.net/v1/passenger?page=" +
          passenger.page +
          "&size=100"
      )
      .then(function (response) {
        passenger.data = response.data.data;
        passenger.isLoading = false;
        passenger.totalPage = response.data.totalPages;
        setPassenger({ ...passenger, passenger });
      })
      .catch((e) => {
        passenger.error = true;
        setPassenger({ ...passenger, passenger });
      });
  }
  useEffect(() => {
    apiCall();
  }, [passenger.page]);
  return (
    <div>
      {passenger.isLoading ? (
        <CircularProgress></CircularProgress>
      ) : (
        <div>
          {passenger.data.map((item, index) => (
            <Card sx={{ maxWidth: "80%" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="90"
                  maxWidth="90px"
                  image={item.airline[0].logo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.airline[0].slogan}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      )}

      <Stack spacing={2}>
        <Pagination
          count={passenger.totalPage}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
}
