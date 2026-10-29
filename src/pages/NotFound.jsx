import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <div className="not-found">
        <h1>Page Not Found</h1>
        <p>We could not find that page. Maybe check the menu instead?</p>
        <Link className="button" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
