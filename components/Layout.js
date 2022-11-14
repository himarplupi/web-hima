import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='w-max-full min-h-screen p-5'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
