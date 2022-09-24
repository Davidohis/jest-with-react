import React from "react";

export default function LoginComponent() {
  const handleSubmit = async () => {
    sessionStorage.setItem(
      "UserToken",
      JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")
    );
  };

  return (
    <React.Fragment>
        <form id="form">
          <h1 className="copyright">Login</h1>
          <fieldset>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue="davidigheose@gmail.com"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              defaultValue="Testing Testing"
            />
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" onClick={handleSubmit}>
              submit
            </button>
          </fieldset>
        </form>
    </React.Fragment>
  );
}
