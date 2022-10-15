import { ErrorPage, Main } from "../pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="404" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
