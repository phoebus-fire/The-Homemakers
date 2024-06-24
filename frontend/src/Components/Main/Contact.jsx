import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Loading");
    try {
      const response = await axios.post(
        "http://localhost:8000/users/send_mail",
        formData
      );
      console.log("response", response.data);
      setStatus(response.message);
      toast.success("Mail Send Successfully")
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("Error sending email");
      toast.error("Error sending email")
    }
  };

  return (
    <>
      <section
        id="contact"
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(/img/overlay-bg.jpg)" }}
      >
        <div className="overlay-mf" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send Message Us</h5>
                      </div>
                      <div>
                        <form
                          onSubmit={handleSubmit}
                          role="form"
                          className="php-email-form"
                        >
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  required
                                  value={formData.name}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  required
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  required
                                  value={formData.subject}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows={5}
                                  placeholder="Message"
                                  required
                                  value={formData.message}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-12 text-center my-3">
                              {status === "Loading" && (
                                <div className="loading">Loading</div>
                              )}
                              {status && (
                                <div>
                                  {status}
                                </div>
                              )}
                            </div>
                            <div className="col-md-12 text-center">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                        Certainly! Here's the text formatted without JSON:

We welcome your inquiries and feedback. Feel free to reach out to us with any questions, concerns, or suggestions you may have. Our team is dedicated to providing prompt assistance and addressing your needs.

For direct communication, please use the contact information provided below. Whether by email or through our social media channels, we are here to listen and assist you.

Additionally, you can connect with us via our social media platforms for updates and news.

We look forward to hearing from you and ensuring your experience with us is seamless and satisfying.                        </p>
                        <ul className="list-ico">
                          <li>
                            <span className="bi bi-geo-alt" />LUCKNOW
                          </li>
                          <li>
                            <span className="bi bi-phone" /> (617) 557-0089
                          </li>
                          <li>
                            <span className="bi bi-envelope" />
                            laxmishivashukla@gmail.com
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/laxmishivashukla">
                              <span className="ico-circle">
                                <i className="bi bi-facebook" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/_phoebus_fire/">
                              <span className="ico-circle">
                                <i className="bi bi-instagram" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/shiva-shukla-phoebus-fire/">
                              <span className="ico-circle">
                                <i className="bi bi-linkedin" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
  );
}

export default Contact;
