import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5002/test")
      .then(res => res.json())
      .then(data => console.log("API DATA:", data))
      .catch(err => console.log("ERROR:", err));
  }, []);

  return <h1>Check Console</h1>;
}

export default App;