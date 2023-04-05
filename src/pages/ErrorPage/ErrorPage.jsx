import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {

  return (
    <div id="error-page" className="error-page">
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
}
