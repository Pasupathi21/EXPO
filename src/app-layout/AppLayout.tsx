/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

// ******************* components
import { ContainerWrapper } from "../components/MUI/mui.index";

// **************** MUI
import { Grid } from "@mui/material";

// ************* Layout component
import AppTopBar from "./AppTopBar/AppTopBar";
import { PaperContainer } from "../components/MUI/mui.index";

export default function AppLayout() {
  return (
    <>
      <ContainerWrapper>
        <PaperContainer>
          <Grid container xs={12}>
            <Grid container item xs={12}>
              <AppTopBar />
            </Grid>
          </Grid>
        </PaperContainer>
      </ContainerWrapper>
    </>
  );
}
