import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testimonials from "../src/components/testimonials/Testimonials";
import Feedback from "./components/feedback/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Testimonials />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
