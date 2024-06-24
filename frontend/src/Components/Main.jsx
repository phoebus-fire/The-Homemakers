import Contact from "./Main/Contact";
import About from "./Main/About";
import Blog from "./Main/Blog";
import Service from "./Main/Service";

function Main() {
  return (
    <>
      <main id="main">
        {/* ======= About Section ======= */}
        <About />
        {/* End About Section */}
        {/* ======= Services Section ======= */}
        <Service />
        {/* End Services Section */}
        {/* ======= Portfolio Section ======= */}

        <Blog />
        {/* End Blog Section */}
        {/* ======= Contact Section ======= */}
        <Contact />
        {/* End Contact Section */}
      </main>
    </>
  );
}

export default Main;
