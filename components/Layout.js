import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-max-full min-h-screen p-5">{children}</div>
      <ScrollToTopButton /> 
      <Footer />
    </>
  );
};

export default Layout;
