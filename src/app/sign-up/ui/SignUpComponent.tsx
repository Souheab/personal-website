import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  createTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { red, blue } from "@mui/material/colors";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import { createUser } from "../../logic/db";
import Joi from "joi";

interface SignUpComponentProps {
  onSignUp: (signUpSuccess: boolean) => void;
}

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: red[600],
    },
  },
});

const handleMouseDownPassword = (
  event: React.MouseEvent<HTMLButtonElement>,
) => {
  event.preventDefault();
};

const emailValidationSchema = Joi.string()
  .email({ tlds: { allow: false } })
  .required();

const passwordValidationSchema = Joi.string().min(8).required();

export default function SignUpComponent(props: SignUpComponentProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          createUser({
            email: values.email,
            password: values.password,
            createdAt: new Date(),
          })
            .then(() => {
              setTimeout(() => {
                setSubmitting(false);
                props.onSignUp(true);
              }, 500);
            })
            .catch((e) => {
              setTimeout(() => {
                console.log("unable to create user");
                console.log(e);
                setSubmitting(false);
                props.onSignUp(false);
              }, 500);
            });
        }}
        validate={(values) => {
          const errors: any = {};

          const emailValidation = emailValidationSchema.validate(values.email);
          if (emailValidation.error) {
            errors.email = emailValidation.error;
          }

          const passwordValidation = passwordValidationSchema.validate(
            values.password,
          );

          if (passwordValidation.error) {
            errors.password = passwordValidation.error;
          }

          const confirmPasswordValidation =
            values.password === values.confirmPassword
              ? null
              : new Error("Passwords do not match");
          if (confirmPasswordValidation !== null) {
            errors.confirmPassword = confirmPasswordValidation;
          }

          return errors;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center border p-8 bg-white rounded w-[450px]"
          >
            <h1 className="text-slate-600 mb-5 text-xl">Sign In</h1>
            <div className="w-full text-slate-950 my-2">
              <div className="mb-2">Email</div>
              <TextField
                name="email"
                error={(errors.email && touched.email) !== undefined}
                helperText={
                  (errors.email && touched.email) !== undefined
                    ? "Please enter a valid email address"
                    : undefined
                }
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="mail@example.com"
              />
            </div>
            <div className="w-full text-slate-950 my-2">
              <div className="mb-2">Password</div>
              <TextField
                fullWidth
                name="password"
                error={(errors.password && touched.password) !== undefined}
                helperText={
                  (errors.password && touched.password) !== undefined
                    ? "Password must be at least 8 characters long"
                    : undefined
                }
                placeholder="Enter your password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
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
                name="confirmPassword"
                error={
                  (errors.confirmPassword && touched.confirmPassword) !==
                  undefined
                }
                helperText={
                  (errors.confirmPassword && touched.confirmPassword) !==
                  undefined
                    ? "Passwords do not match"
                    : undefined
                }
                placeholder="Confirm Password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
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
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <ThemeProvider theme={theme}>
              <Button
                disabled={isSubmitting}
                type="submit"
                sx={{ textTransform: "none" }}
                variant="contained"
                color="primary"
                className="mt-4 w-full text-lg p-2"
              >
                Sign Up
              </Button>
            </ThemeProvider>
          </form>
        )}
      </Formik>
    </div>
  );
}
