
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark px-4">
      <div className="text-center card-glass p-10 max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-ocean">404</h1>
        <p className="text-xl text-white mb-8">Oops! Page not found</p>
        <p className="text-white/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
