/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

// ******************* components
import { ContainerWrapper } from "../components/MUI/mui.index";

// **************** MUI
import { Grid, Box } from "@mui/material";

// ************* Layout component
import AppTopBar from "./AppTopBar/AppTopBar";
import AppSideBar from "./AppSideBar/AppSideBar";
import { PaperContainer } from "../components/MUI/mui.index";

export default function AppLayout() {
  const [wh, seWH] = useState({
    height: `${window.innerHeight}px`,
    width: `${window.innerWidth}px`,
  });
  useEffect(() => {
    seWH({
      height: `${window.innerHeight}px`,
      width: `${window.innerWidth}px`,
    });
  }, [window.innerHeight, window.innerWidth]);
  return (
    <>
      <ContainerWrapper>
        <PaperContainer>
          <Grid container xs={12} spacing={1.5} sx={{}}>
            <Grid container item xs={12}>
              {/* ************************ | Top Bar| */}
              <AppTopBar />
            </Grid>
            <Grid
              xs={12}
              container
              item
              spacing={1.5}
              sx={{
                height: "100%",
              }}
            >
              <Grid
                xs={2}
                item
                sx={{
                  height: "80%",
                }}
              >
                {/* ************************* | Side Bar| **********  */}

                <AppSideBar />
              </Grid>
              <Grid item xs={10}>
                <h1>Container</h1>
              </Grid>
            </Grid>
          </Grid>
        </PaperContainer>
      </ContainerWrapper>
    </>
  );
}
