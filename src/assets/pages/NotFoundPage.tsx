import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col position-center items-center justify-center h-screen gap-6">
        <FaExclamationTriangle className="text-red-900" size={80} />
        <h1 className="text-center text-2xl font-bold mb-10">
          404 | <span className="text-xs font-light">Page Not Found</span>
        </h1>
        <button>
          <Link
            to="/"
            className="flex items-center hover:border-b-2 border-red-900"
          >
            <FaArrowLeft className="text-red-900" />
            <span className="ml-2 text-black">Go Back</span>
          </Link>
        </button>
      </div>
    </>
  );
}

export default NotFoundPage;
