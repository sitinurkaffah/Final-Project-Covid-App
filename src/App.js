import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Layout>
        {/*
        * Render Halaman Home
        * Jika ingin diubah, maka ubah di Halaman Home.
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid/indonesia" element={<Indonesia />} />
          <Route path="/covid/provinsi" element={<Provinsi />} />
        </Routes>
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;