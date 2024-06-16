"use client";
import { useState } from "react";
import SignUpComponent from "./ui/SignUpComponent";
import SignUpCompletePageComponent from "./ui/SignUpCompletePageComponent";

export default function SignUp() {
  const [signUpSuccess, setSignUpSuccess] = useState(
    undefined as boolean | undefined,
  );

  if (signUpSuccess === undefined) {
    return (
      <SignUpComponent
        onSignUp={(signUpSuccess: boolean) => setSignUpSuccess(signUpSuccess)}
      />
    );
  }

  return <SignUpCompletePageComponent signUpSuccess={signUpSuccess} />;
}
