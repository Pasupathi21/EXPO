import { useState } from "react";

// **************** Component
import {
  ContainerWrapper,
  PaperContainerV2,
  ContainerBoxV2,
  TextField_v1,
  Button_v1,
  Divider_v1,
  Button_v2,
} from "../../components/MUI/mui.index";

// ******************** Formik
import { useFormik } from "formik";

// ************** MUI
import { Grid, IconButton, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// *************** Router
import { useNavigate } from 'react-router-dom'

// ************* const
import { APP_ROUTES } from '../../data/AppRoutes'

export default function SignUp() {
    const navigate = useNavigate()
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);
  const getSignIn = () => {};
  const formik = useFormik({
    initialValues: {
      username: "",
      phoneno: "",
      email: "",
      password: "",
    },
    onSubmit: getSignIn,
  });
  return (
    <ContainerWrapper>
      <ContainerBoxV2
        styles={{
          width: "inherit",
          height: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PaperContainerV2
          styles={{
            padding: "0%",
            display: "flex",
            height: "80%",
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 0,
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 15,
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "90%",
            }}
          >
            <Grid container xs={12} rowGap={2}>
            <Grid item xs={12}>
                <TextField_v1
                  label="User name"
                  placeholder="enter email"
                  fullWidth
                  size="small"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField_v1
                  label="Phone No"
                  placeholder="enter email"
                  fullWidth
                  size="small"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField_v1
                  label="Email"
                  placeholder="enter email"
                  fullWidth
                  size="small"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField_v1
                  label="Password"
                  type={showPass ? "text" : "password"}
                  placeholder="enter password"
                  fullWidth
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => {
                          setShowPass(!showPass);
                        }}
                        disableRipple
                      >
                        {showPass ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField_v1
                  label="Confirm Password"
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="enter password"
                  fullWidth
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => {
                            setShowConfirmPass(!showConfirmPass);
                        }}
                        disableRipple
                      >
                        {showConfirmPass ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button_v1 variant="contained">singup</Button_v1>
              </Grid>
              <Grid item xs={12}>
                <Divider_v1 style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={12} style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}>
                <Typography>
                  {" "}
                  Do you have a account?&nbsp;{" "}
                  <Button_v2
                    disableRipple
                    size="small"
                    style={{ borderStyle: "none" }}
                    onClick={() => {navigate(APP_ROUTES?.SIGN_IN?.pathName)}}
                  >
                    Signin
                  </Button_v2>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </PaperContainerV2>
      </ContainerBoxV2>
    </ContainerWrapper>
  );
}
