import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PaginationLoadMore() {
  const [passenger, setPassenger] = useState({
    data: [],
    isLoading: true,
    isLoadingmore: false,
    totalPage: 0,
    error: false,
  });
  const [page, setPage] = useState(0);
  let handleChange = () => {
    console.log(page);
    setPage(page + 1);
    passenger.isLoadingmore = true;
    setPassenger({ ...passenger, passenger });
  };

  function apiCall() {
    axios
      .get(
        "https://api.instantwebtools.net/v1/passenger?page=" +
          page +
          "&size=100"
      )
      .then(function (response) {
        if (page === 0) {
          passenger.data = response.data.data;
        } else {
          passenger.data = passenger.data.concat(response.data.data);
        }
        passenger.isLoading = false;
        passenger.isLoadingmore = false;
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
  }, [page]);
  return (
    <div>
      {passenger.isLoading ? (
        <CircularProgress></CircularProgress>
      ) : (
        <div>
          {passenger.data.map((item, index) => (
            <Card key={index} sx={{ maxWidth: "80%" }}>
              <CardActionArea>
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
      {passenger.isLoadingmore ? (
        <CircularProgress></CircularProgress>
      ) : (
        <Button onClick={handleChange} color="primary" varient="filled">
          Load More
        </Button>
      )}
    </div>
  );
}
