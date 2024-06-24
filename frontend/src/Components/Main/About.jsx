function About() {
  
  return (
    <>
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row md:w-full md:h-full h-[250px]">
                      <img
                        width={"100%"}
                        src="/img/aboutimg.png"
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Us</h5>
                      </div>
                      <p className="lead">
                      Welcome to "The Homemakers," a pioneering platform dedicated to empowering and celebrating the remarkable contributions of homemakers worldwide. We recognize the vital role of homemakers in nurturing families and communities. Our mission is to empower these extraordinary individuals by providing essential resources in employment opportunities, skill development, and leisure activities tailored to their unique needs.
                      </p>
                      <p className="lead">
                      At "The Homemakers," we believe in fostering a supportive environment where homemakers can thrive beyond their traditional roles. Our platform is designed to offer flexible job opportunities, curated skill development programs, and enriching leisure activities. By empowering homemakers to explore their potential and pursue their aspirations, we aim to redefine societal norms and elevate the status of homemakers globally.
                      </p>
                      <p className="lead">
                      "The Homemakers" is committed to creating a positive impact. Join us as we celebrate the resilience and dedication of homemakers, and together, let's build a future where every homemaker can achieve personal fulfillment and professional success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
