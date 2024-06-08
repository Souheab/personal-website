interface SignUpCompletePageComponentProps {
  signUpSuccess: boolean;
}

export default function SignUpCompletePageComponent(
  props: SignUpCompletePageComponentProps,
) {
  return (
    <div>
      <h1>Sign Up form submitted</h1>
      {props.signUpSuccess ? (
        <p>Sign up was successful.</p>
      ) : (
        <p>Sign up failed. Please try again.</p>
      )}
    </div>
  );
}
