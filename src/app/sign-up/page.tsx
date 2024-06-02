"use client";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
      <form className="flex flex-col justify-center items-center border p-8 bg-white rounded w-3/6">
        <h1 className="text-slate-600 mb-5 text-xl">
          Sign up for an account 
        </h1>
        <div className="w-full text-slate-950 my-2">
          <div className="mb-2">Email</div>
          <TextField fullWidth placeholder="Enter Email" />
        </div>
        <div className="w-full text-slate-950 my-2">
          <div className="mb-2">Password</div>
          <TextField
            fullWidth
            placeholder="Enter Password"
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
        <Button variant="contained" color="primary" className="mt-4 w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
