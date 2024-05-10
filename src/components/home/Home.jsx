import { Grid } from "@mui/material";

//components
import Banner from "../banner/Banner";
import Categories from "./Categories";
import Posts from "./post/Posts";

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={8.5} lg={8.5}>
          <Posts />
        </Grid>

        <Grid item lg={3.5} xs={12} sm={3.5}>
          <Categories />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;




