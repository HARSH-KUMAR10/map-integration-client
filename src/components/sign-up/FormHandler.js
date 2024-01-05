import React from "react";
import FormInput from "../FormInput";

export default function FormHandler() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill email, password and confirm password.");
    }
    if (password != confirmPassword) {
      alert("Password and confirm password are different");
    }
    console.log(email, password);
    fetch(`http://localhost:8000/api/v1/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
          window.location.href = "/sign-in";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="py-4 text-center">
      <div className="display-4 p-2 text-bold">Map Integration</div>
      <div className="h4 p-2">Sign Up</div>
      <FormInput
        inputLabel="Email"
        inputType="email"
        inputValue={email}
        inputSetter={setEmail}
      />
      <FormInput
        inputLabel="Password"
        inputType="password"
        inputValue={password}
        inputSetter={setPassword}
      />
      <FormInput
        inputLabel="Confirm Password"
        inputType="password"
        inputValue={confirmPassword}
        inputSetter={setConfirmPassword}
      />
      <div className="row p-2">
        <div className="col-6 text-center">
          <button
            style={{
              border: 0,
              color: "white",
              backgroundColor: "#2962ff",
            }}
            className="w-100 p-2"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        <div className="col-6 text-center">
          <button
            style={{
              border: 0,
              color: "black",
              backgroundColor: "#21ff22",
            }}
            className="w-100 p-2"
            onClick={() => (window.location.href = "/sign-in")}
          >
            Login to account
          </button>
        </div>
      </div>
    </div>
  );
}
