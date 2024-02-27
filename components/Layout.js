
import Navbar from "./navbar/Navbar.js";
import Footer from "./footer/Footer.js";
import PageHead from "./PageHead/PageHead.js";

export default function Layout({ children, metaTitle }) {

  return (
    <>
      <PageHead />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
