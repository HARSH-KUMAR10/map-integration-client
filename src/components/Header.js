import React from "react";

export default function Header() {
  React.useEffect(() => {
    const jwt = localStorage.getItem(process.env.JWT_TOKEN || "USER_TOKEN");
    console.log(jwt);
    if (!jwt || jwt.length <= 0) {
      alert("Logging out");
      window.location.href = "/sign-in";
    }
  }, []);
  const logout = () => {
    localStorage.removeItem(process.env.JWT_TOKEN || "USER_TOKEN");
    window.location.href = "/sign-in";
  };
  return (
    <div className="row justify-content-between align-items-center bg-light pt-3 px-2 pb-2">
      <div className="col-3 h3">Map Integration</div>
      <div className="col-5 row justify-content-around">
        <button
          style={{ backgroundColor: "transparent" }}
          className="border-0"
          onClick={() => (window.location.href = "/dashboard")}
        >
          Dashboard
        </button>
        <button
          style={{ backgroundColor: "transparent" }}
          className="border-0"
          onClick={() => (window.location.href = "/new-place")}
        >
          Add new place
        </button>
        <button
          style={{ backgroundColor: "transparent" }}
          className="border-0"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
