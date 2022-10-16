import { ErrorPage, Main, ContactsPage } from "../pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
