import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="font-display text-6xl font-bold text-nakshatra-400 mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-8">Page not found</p>
      <Link to="/" className="btn-primary inline-block">
        Return Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
