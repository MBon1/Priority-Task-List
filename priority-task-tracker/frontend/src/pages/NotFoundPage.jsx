import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <p className='text-xl mb-5'>Sorry! We can't seem to find the page you are looking for.</p>
      <Link to='/' className='text-black bg-green-200 hover:bg-green-300 rounded-md px-3 py-2 mt-4'> Return Home </Link>
    </section>
  );
};
export default NotFoundPage;
