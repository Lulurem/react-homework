import "./App.css";
import {
  ReviewNotice,
  ReviewPost,
} from "../components/ReviewBoard/ReviewBoard";

function App() {
  return (
    <div className="app">
      <ReviewNotice />
      <ReviewPost />
    </div>
  );
}

export default App;
