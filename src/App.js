import React, { useEffect } from "react";
import Login from "./Pages/Login";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constants";
import Spotify from "./components/Spotify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  // const [loading, setLoading] = useState(true);
  // const [tok, setTok] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      let token = hash.substring(1).split("&"[0].split("=")[1]);
      token = token[0].split("=")[1].split("&")[0];

      // console.log(token);
      // setTok(token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Spotify /> : <Login />}>
            <Route path="/Spotify" element={<Spotify />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
