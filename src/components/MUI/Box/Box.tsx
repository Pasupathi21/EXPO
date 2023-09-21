/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState} from "react";

// **************** MUI
import { Box } from "@mui/material";
import { styled } from "@mui/system";

// const [sizeAndWidth, setSizeAndWidth] = useState({
//     height: `${window.innerHeight}px`,
//     width: `${window.innerWidth}px`
// })

// useEffect(() => {
//     setSizeAndWidth({
//         height: `${window.innerHeight}px`,
//         width: `${window.innerWidth}px`
//     })
// }, [window.innerHeight, window.innerWidth])

export const ContainerBox = styled(Box)(({ theme }) => ({
  border: "none",
  width: '100vw',
  height: '100vh',
  backgroundImage: `linear-gradient(to top right, ${theme.palette.primary.dark}, ${theme.palette.secondary.light})`,
  padding: '15px'
}));
