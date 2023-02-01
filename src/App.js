import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import ContextProvider from "./components/context/GlobalContext";
import Header from "./components/Header";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watchList" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
