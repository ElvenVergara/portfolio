import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/images/profile.png";

function Contact() {

	useEffect(() => {
		const elements = document.querySelectorAll(".animate-on-scroll");
	
		const observer = new IntersectionObserver(
		  (entries, observer) => {
			entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				entry.target.classList.add("show");
				observer.unobserve(entry.target); // Stop observing after animation
			  }
			});
		  },
		  { threshold: 0.2 } // Trigger when 20% of element is visible
		);
	
		elements.forEach((element) => observer.observe(element));
	
		return () => observer.disconnect(); // Cleanup observer on unmount
	  }, []);



      const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });

      const [showModal, setShowModal] = useState(false);
      const [loading, setLoading] = useState(false);
      const [status, setStatus] = useState("");
    
      // Handle input changes
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const response = await fetch("https://formspree.io/f/xyzegqrw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          setStatus("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" }); 
          setShowModal(true);
        } else {
          setStatus("Oops! Something went wrong.");
        }
        setLoading(false);

      };


      

    return (
    <>

        <div className="main-content-wrapper">
				<div className="container-fluid">
			
					<div className="animate-on-scroll resume-wrapper mx-auto rounded-2" style={{border:"solid gray 1px",boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"}}>
                    <div className="resume-header px-4 px-lg-5">
                        <div className="resume-profile-holder text-center">
                            <img 
                            className="resume-profile-pic rounded-circle" 
                            src={profilePic} 
                            alt="Profile"
                            />

                            <h2>Let’s Build Something Great</h2>

                            <br/>
							
							<center>
							<div className="resume-summary-desc"> 
								<p style={{width:'80%', color:"black"}}>
                                    Are you looking for a skilled web developer to bring your ideas to life?
                                     Whether you need a custom website, performance optimization, or seamless integrations, I’m here to help. Feel free to reach out for collaborations, freelance projects, or any inquiries. Let’s connect and create something amazing together!
								</p>
							</div>
							
                            <div className="col-12 col-sm-6 col-md-4 col-lg-8 text-center d-flex justify-content-center" style={{border: "solid gray 1px", borderRadius: "10px 10px 10px 10px"}}>

                                <form id="contact-form" className="contact-form p-3" onSubmit={handleSubmit}>
                                    <h2 className="text-center mb-4">Get in Touch</h2>
                                    <div className="row g-3">                                                           
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <span className="input-group-text bg-primary text-white"><i className="bi bi-person"></i></span>
                                                <input type="text" className="form-control custom-blue" value={formData.name} onChange={handleChange} id="cname" name="name" placeholder="Your Name" required />
                                            </div>
                                        </div>                    
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <span className="input-group-text bg-primary text-white"><i className="bi bi-envelope"></i></span>
                                                <input type="email" className="form-control custom-blue" value={formData.email} onChange={handleChange} id="cemail" name="email" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group">
                                                <span className="input-group-text bg-primary text-white"><i className="bi bi-chat"></i></span>
                                                <textarea className="form-control" value={formData.message} onChange={handleChange} id="cmessage" name="message" placeholder="Enter your message" rows="4" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="bg-primary text-white w-100 py-2">
                                                <i className="bi bi-send-fill"></i> Send Message
                                            </button>
                                        </div>                           
                                    </div>
                                </form>

                            </div>

							<br/>
							</center>
                            
                        </div>
                    </div>
						
				    </div>

                    <footer className="footer text-center py-4">
                            <small className="copyright">
                                Designed and Developed by  
                                <a className="theme-link" href="#" target="_blank"> Elven Vergara</a>. 
                                Built using React.js, JavaScript, Boostrap5 and hosted on GitHub Pages.
                            </small>
                    </footer>
				</div>
		</div>

        {loading && (
            <div className="overlay">
            <div className="spinner-border text-light" role="status"></div>
            </div>
        )}

        <div
            className="modal fade show"
            style={{ display: showModal ? "block" : "none" }}
            tabIndex="-1"
            role="dialog"
        >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">✅ Message Sent Successfully!</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <p>
                Thank you for reaching out! Your message has been received, and I truly appreciate you taking the time to contact me.  
                I will review your message and get back to you as soon as possible.  
              </p>
              <p>
                If your inquiry is urgent, feel free to follow up via email <b>yuirthme@gmail.com</b>.  
                Looking forward to connecting with you!
              </p>
              <p className="fw-bold">Have a wonderful day! 😊</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
         
    
    </>
    );

}
  
  export default 
Contact;