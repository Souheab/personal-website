"use client";
import { TextField, Button, IconButton, InputAdornment, createTheme } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from '@mui/icons-material/Google';
import { red, blue } from "@mui/material/colors";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import Joi from "joi";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: red[600],
    },
  },
})

const handleMouseDownPassword = (
  event: React.MouseEvent<HTMLButtonElement>,
) => {
  event.preventDefault();
};

// const schema = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().min(8).required(),
//   confirmPassword: Joi.ref("password"),
// });

export default function SignUpComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center border p-8 bg-white rounded w-[450px]">
            <h1 className="text-slate-600 mb-5 text-xl">
              Sign In
            </h1>
            <div className="w-full text-slate-950 my-2">
              <div className="mb-2">Email</div>
              <TextField fullWidth placeholder="mail@example.com" />
            </div>
            <div className="w-full text-slate-950 my-2">
              <div className="mb-2">Password</div>
              <TextField
                fullWidth
                placeholder="Enter your password"
                type="password"
                InputProps={{
                  type: showPassword ? "text" : "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="w-full text-slate-950 my-2">
              <div className="mb-2">Confirm Password</div>
              <TextField
                fullWidth
                placeholder="Confirm Password"
                type="password"
                InputProps={{
                  type: showConfirmPassword ? "text" : "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <ThemeProvider theme={theme}>
              <Button type="submit" sx={{ textTransform: "none" }} variant="contained" color="primary" className="mt-4 w-full text-lg p-2">
                Sign In
              </Button>
              <Button sx={{ textTransform: "none" }} startIcon={<GoogleIcon />} variant="contained" color="secondary" className="mt-4 w-full text-lg p-2">
                Sign In with Google
              </Button>
            </ThemeProvider>
          </form>
        )}
      </Formik>
    </div>
  );
}
