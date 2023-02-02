import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import ContextProvider from "./components/context/GlobalContext";
import Header from "./components/Header";
import WatchList from "./components/WatchList";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watchList" element={<WatchList name="watchlist" />} />
          <Route path="/watched" element={<WatchList name="watched" />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
