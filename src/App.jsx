import { useEffect, useState } from "react";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {}, []);

  return (
    <div
      style={{ minWidth: "100vw", minHeight: "100vh", backgroundColor: "#F5F5F5", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
    >
      {session ? <Home /> : <Login />}
    </div>
  );
};

export default App;
