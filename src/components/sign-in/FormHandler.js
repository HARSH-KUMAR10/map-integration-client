import React from "react";
import FormInput from "../FormInput";

export default function FormHandler() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSignIn = () => {
    if (!email || !password) {
      alert("Please fill email, password.");
    }
    fetch(`http://localhost:8000/api/v1/auth/sign-in`, {
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
          localStorage.setItem(
            process.env.JWT_TOKEN || "USER_TOKEN",
            data.data.jwtToken
          );
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-5 text-center">
      <div className="display-4 p-3 text-bold">Map Integration</div>
      <div className="h4 p-2">Sign In</div>
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
      <div className="row p-2">
        <div className="col-6 text-center">
          <button
            style={{
              border: 0,
              color: "black",
              backgroundColor: "#21ff22",
            }}
            className="w-100 p-2"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
        <div className="col-6 text-center">
          <button
            style={{
              border: 0,
              color: "white",
              backgroundColor: "#2962ff",
            }}
            className="w-100 p-2"
            onClick={() => (window.location.href = "/sign-up")}
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}
