import { Link } from "react-router-dom";
function Service() {
  return (
    <>
      <section id="services" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">SERVICES</h3>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Link to="/employment">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="bi bi-briefcase" />
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">EMPLOYMENT</h2>
                    <p className="s-description text-center">
                    Find Your Dream Job.
                    </p>
                    <p className="s-description text-center">
                   You Are More Than Just a Homemaker!
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
            <Link to="/skilldev">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                  <i class="bi bi-clipboard2-data"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">SKILL DEVELOPMENT</h2>
                  <p className="s-description text-center">
                  Dust Off Your Dreams.
                  </p>
                  <p className="s-description text-center">
                  Develop the Skills You've Always Wanted!
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-md-4">
            <Link to="/leisure">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                  <i class="bi bi-person-hearts"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Leisure</h2>
                  <p className="s-description text-center">
                  Ditch the Routine.
                  </p>
                  <p className="s-description text-center">
                  Explore Leisure Options!
                  </p>
                </div>
              </div>
              </Link>
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
