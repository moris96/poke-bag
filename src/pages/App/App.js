import { useState, useEffect } from "react";
import AuthPage from "../AuthPage/AuthPage";
import BagsPage from "../BagsPage/BagsPage";
import { Routes, Route} from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";
import GamePage from "../GamePage/GamePage";
import MusicPage from "../MusicPage/MusicPage";

function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/pokebags" element={<BagsPage />} />
            <Route path="/games" element={<GamePage />} />
            <Route path="/music" element={<MusicPage />} />
          </Routes>
        </>
         :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
