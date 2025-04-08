import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/images/profile.png";
import wash100 from "../assets/images/wash100.png";
import govconexec from "../assets/images/govconexec.png";
import govconindex from "../assets/images/govconindex.png";




import logo1 from "../assets/images/logos/1.png";
import logo2 from "../assets/images/logos/2.png";
import logo3 from "../assets/images/logos/3.png";
import logo4 from "../assets/images/logos/4.png";
import logo5 from "../assets/images/logos/5.png";
import logo6 from "../assets/images/logos/6.png";
import logo7 from "../assets/images/logos/7.png";
import logo8 from "../assets/images/logos/8.png";
import logo9 from "../assets/images/logos/9.png";
import logo10 from "../assets/images/logos/10.png";
import logo11 from "../assets/images/logos/11.png";
import logo12 from "../assets/images/logos/12.png";
import logo13 from "../assets/images/logos/13.png";
import logo14 from "../assets/images/logos/14.png";
import logo15 from "../assets/images/logos/15.png";
import logo16 from "../assets/images/logos/16.png";
import logo17 from "../assets/images/logos/17.png";
import logo18 from "../assets/images/logos/18.png";
import logo19 from "../assets/images/logos/19.png";
import logo20 from "../assets/images/logos/20.png";
import logo21 from "../assets/images/logos/21.png";
import logo22 from "../assets/images/logos/22.png";
import logo23 from "../assets/images/logos/23.png";
import logo24 from "../assets/images/logos/24.png";
import logo25 from "../assets/images/logos/25.png";
import logo26 from "../assets/images/logos/26.png";
import logo27 from "../assets/images/logos/27.png";
import logo28 from "../assets/images/logos/28.png";
import logo29 from "../assets/images/logos/29.png";
import logo30 from "../assets/images/logos/30.png";
import logo31 from "../assets/images/logos/31.png";
import logo32 from "../assets/images/logos/32.png";
import logo33 from "../assets/images/logos/33.png";
import logo34 from "../assets/images/logos/34.png";
import logo35 from "../assets/images/logos/35.png";
import logo36 from "../assets/images/logos/36.png";
import logo37 from "../assets/images/logos/37.png";
import logo41 from "../assets/images/logos/41.png";
import logo42 from "../assets/images/logos/42.png";



function About() {

	const [alllogo, setAlllogo] = useState([
		logo1, logo2, logo3, logo4, logo41, logo42, logo5, logo6, logo7, logo8,
		logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
		logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24,
		logo25, logo26, logo27, logo28, logo29, logo30, logo31, logo32,
		logo33, logo34, logo35, logo36, logo37
	]) ;

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

                            <h2 className="resume-name text-uppercase">Elven Vergara</h2>
                            <div className="resume-role-title text-uppercase">Full-Stack Developer</div>
                            <br/>
							
							<center>
							<div className="resume-summary-desc"> 
								<p style={{width:'80%'}}>
									I am a Full Stack Developer with 8 years of experience in Laravel, Vue.js, React.js, TypeScript, MySQL, and WordPress, specializing in building dynamic and scalable web applications.
									With expertise in both frontend and backend development, I have worked on government and private sector projects, including custom WordPress solutions, API integrations, document tracking systems, and online review platforms.
									I am proficient in server management, database optimization, and UI/UX design, ensuring high-performance and user-friendly applications. Passionate about problem-solving and automation, I continuously seek innovative ways to improve system efficiency and functionality.
								</p>
							</div>
							<div class="section-cta text-center mt-4">
								<Link to={"/resume"} class="bg-primary text-white btn btn-secondary theme-btn-cta" href="resume.html">View Resume<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
									</svg>
								</Link>
							</div>
							<br/>
							</center>
                            
                        </div>
                    </div>

						
	
						
				    </div>



					
					<div className="animate-on-scroll resume-wrapper mx-auto rounded-2" style={{border:"solid gray 1px",boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", padding: "40px",marginTop: "50px"}}>
                        <div className="resume-profile-holder text-center">
							<section class="featured-projects-section section mx-auto">
								<h2 >Featured Projects</h2>
								<div class="section-intro mb-5 limit-max-width mx-auto text-md-center">During my tenure at <strong>Archintel Corporation</strong>, I managed, maintained, and enhanced multiple high-traffic websites 
									focused on government contracting, executive news, and industry insights. My role included development, optimization, 
									and feature implementation to improve user experience and performance.</div>
								<div class="featured-project-list container">
									<div class="row justify-content-center gy-4">

										<div class="col-12 col-md-6 col-lg-4">
											<div class="card" style={{minHeight: "352px"}}>
												<img src={govconindex} class="card-img-top" alt="image"/>
												<div class="card-body px-0">
													<h5 class="card-title"><a style={{color:"black"}} href="https://govconindex.com" target="_blank">GovConIndex</a></h5>
													<p class="card-text mb-1">Tracks and analyzes market performance in the government contracting sector.</p>
													<div><a class="card-link more-link" href="https://wash100.com" target="_blank">View more <span class="link-arrow"><i class="bi bi-arrow-right"></i></span></a></div>
												</div>
											</div>
										</div>

										<div class="col-12 col-md-6 col-lg-4">
											<div class="card" style={{minHeight: "374px"}}>
												<img src={govconexec} class="card-img-top" alt="image"/>
												<div class="card-body px-0">
													<h5 class="card-title"><a style={{color:"black"}} href="https://govconexec.com" target="_blank">GovConExec</a></h5>
													<p class="card-text mb-1 p-1">Provides insights and strategic analysis for executives in the GovCon industry.</p>
													<div><a class="card-link more-link" href="https://govconexec.com" target="_blank">View more <span class="link-arrow"><i class="bi bi-arrow-right"></i></span></a></div>
												</div>
											</div>
										</div>

										<div class="col-12 col-md-6 col-lg-4">
											<div class="card" style={{minHeight: "374px"}}>
												<img src={wash100} class="card-img-top" alt="image"/>
												<div class="card-body px-0">
													<h5 class="card-title"><a style={{color:"black"}} href="https://wash100.com" target="_blank">Wash100</a></h5>
													<p class="card-text mb-1 p-1">Recognizes the top 100 influential leaders in the government contracting industry annually.</p>
													<div><a class="card-link more-link" href="https://wash100.com" target="_blank">View more <span class="link-arrow"><i class="bi bi-arrow-right"></i></span></a></div>
												</div>
											</div>
										</div>
										
									</div>
									<div class="section-cta text-center mt-3">
										<Link to={"/projects"} class="bg-primary text-white btn btn-secondary theme-btn-cta">More Projects<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
			</svg></Link>
									</div>
								</div>
									
							</section>

				

                        </div>						
				    </div>



					
					<div className="animate-on-scroll resume-wrapper mx-auto rounded-2"
						style={{
							border: "solid gray 1px",
							boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
							padding: "40px",
							marginTop: "50px"
						}}>
						<div className="resume-profile-holder text-center">
							<section className="featured-projects-section section mx-auto">
								<h2>Skills & Experiences</h2>
								<div className="section-intro mb-5 limit-max-width mx-auto text-md-center">
									As a Full-Stack Developer, I have extensive experience in designing, 
									developing, and maintaining web applications using modern technologies. 
									My expertise spans both front-end and back-end development, allowing me 
									to build seamless, high-performance solutions.
								</div>

								<div className="featured-project-list container">
									<div className="row justify-content-center gy-4">

										<div class="row tech-list justify-content-center align-items-center">

											{alllogo.map((std,i) => 
												<div class="col-12 col-sm-6 col-md-4 col-lg-2 text-center d-flex justify-content-center" style={{padding:"10px"}}>
													<img class="rounded" style={{width:'150px', marginTop:"30px"}} src={std} alt={`logo ${i+1}`}/>
												</div>
											)}
							
											
										</div>

									</div>

									<div class="section-cta text-center mt-4">
										<Link to={"/resume"} class="bg-primary text-white btn btn-secondary theme-btn-cta" href="resume.html">View Resume<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
											<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
											</svg>
										</Link>
									</div>
								</div>
							</section>
						</div>
					</div>
					



					<div className="animate-on-scroll resume-wrapper mx-auto rounded-2"
						style={{
							border: "solid gray 1px",
							boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
							padding: "40px",
							marginTop: "50px"
						}}>
						<div className="resume-profile-holder text-center">
							<section className="featured-projects-section section mx-auto">
								
								<div className="featured-project-list container">
									<div className="row justify-content-center gy-4">

									<div class="item col-md-6 col-lg-4 text-md-center">
										<div class="item-icon-holder mx-md-auto"><i class="item-icon bi bi-code-slash fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">Frontend Development</h4>
										<div class="item-desc">
											Expertise in modern frontend frameworks like Vue.js and React.js, ensuring responsive and interactive UI/UX designs. Proficient in HTML, CSS, JavaScript (ES6+), and CSS frameworks like Bootstrap, Tailwind CSS, and Bulma for creating visually appealing web applications.
										</div>
									</div>

									<div class="item col-md-6 col-lg-4 text-md-center">
										<div class="item-icon-holder mx-md-auto"><i class="item-icon bi bi-server fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">Backend Development</h4>
										<div class="item-desc">
											Skilled in building robust backend solutions using Laravel (PHP), Node.js, and Python. Experienced in implementing authentication systems such as JWT and OAuth, ensuring secure and efficient data handling.
										</div>
									</div>

									<div class="item col-md-6 col-lg-4 text-md-center">
										<div class="item-icon-holder mx-md-auto"><i class="item-icon bi bi-database fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">Database Management</h4>
										<div class="item-desc">
											Proficient in MySQL, NoSQL, and Firebase database management. Expertise in schema design, query optimization, indexing, and database performance tuning for scalable applications.
										</div>
									</div>

									<div class="item col-md-6 col-lg-4 text-md-center">
										<div class="item-icon-holder mx-md-auto"><i class="item-icon bi bi-wordpress fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">Content Management Systems</h4>
										<div class="item-desc">
											Extensive experience in WordPress development, including theme and plugin customization, WooCommerce enhancements, and Advanced Custom Fields (ACF) for dynamic content management.
										</div>
									</div>

									<div class="item col-md-6 col-lg-4 text-md-center">
										<div class="item-icon-holder mx-md-auto"><i class="item-icon bi bi-cloud fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">DevOps & Server Management</h4>
										<div class="item-desc">
											Hands-on experience with AWS (EC2, RDS, S3, LightSail, CodeCommit), Apache & Nginx configurations, and Linux server administration for efficient cloud-based infrastructure management.
										</div>
									</div>

									<div class="item col-md-6 col-lg-4 text-md-center">
										<div class="item-icon-holder mx-md-auto"><i class="item-icon bi bi-git fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">Tools & Version Control</h4>
										<div class="item-desc">
											Proficient in Git, GitHub, and Postman for version control and API testing. Experience with cPanel & WHM for web hosting and server management.
										</div>
									</div>

									<div class="item col-md-6 col-lg-4 text-md-center">
										<div class="item-icon-holder mx-md-auto"><i class="item-icon bi bi-plug fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">Third-Party Integrations</h4>
										<div class="item-desc">
											Skilled in integrating third-party services such as Salesforce API, Klaviyo API, Segment.io, and Contact Form 7 to extend website functionalities and automate workflows.
										</div>
									</div>

									<div class="item col-md-6 col-lg-4 text-md-center">
										<div class="item-icon-holder mx-md-auto"><i class="item-icon bi bi-lightbulb fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">Other Skills & Tools</h4>
										<div class="item-desc">
											Experienced in UI/UX design principles, SEO optimization, web performance tuning, and Agile tools like JIRA and Basecamp for project management.
										</div>
									</div>


									</div>

									<div class="section-cta text-center mt-4">
										<Link to={"/contact"} class="bg-primary text-white btn btn-secondary theme-btn-cta" href="resume.html">Get in touch<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
											<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
											</svg>
										</Link>
									</div>
								</div>
								
							</section>
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
         
    
    </>
    );

}
  
  export default About;