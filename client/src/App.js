import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
