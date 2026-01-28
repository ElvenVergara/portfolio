import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/images/profile.png";


function Projects() {

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

							<h2 className="resume-name text-uppercase">Projects</h2>
							<br/>
														
							<center>
							<div className="resume-summary-desc"> 
								<p style={{width:'80%'}}>
								Welcome to Projects
								Explore a collection of my work, showcasing expertise in frontend and backend development, database management, DevOps, and third-party integrations. Each project reflects a commitment to building scalable, high-performance solutions using modern technologies like React, Vue, Laravel, WordPress, and AWS. Take a look at how I bring ideas to life through code and innovation.
								</p>
							</div>
							<br/>
							<div class="section-cta text-center mt-4">
								<Link to={"/contact"} class="bg-primary text-white btn btn-secondary theme-btn-cta"><i className="fa-solid fa-briefcase"></i> &nbsp; Hire Me<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
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
								<h2 >Recent Projects</h2>
								<div class="section-intro mb-5 limit-max-width mx-auto text-md-center">During my tenure at <strong>Archintel Corporation</strong>, I managed, maintained, and enhanced multiple high-traffic websites 
									focused on government contracting, executive news, and industry insights. My role included development, optimization, 
									and feature implementation to improve user experience and performance.</div>
								<div class="featured-project-list container">
									

									<div class="row">


										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-newspaper fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">ExecutiveBiz</h4>
											<div class="item-desc">
												Covers the latest news, trends, and insights in the government contracting industry.
												<br/><a href="https://executivebiz.com" target="_blank">Visit Site</a>
											</div>
										</div>

										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-building fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">ExecutiveGov</h4>
											<div class="item-desc">
												Focuses on government policies, executive moves, and federal contracting developments.
												<br/><a href="https://executivegov.com" target="_blank">Visit Site</a>
											</div>
										</div>

										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-people fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">Potomac Officers Club</h4>
											<div class="item-desc">
												A membership-based platform for senior executives in GovCon, featuring exclusive events and networking opportunities. <br/>
												Built with WooCommerce & Eventin Plugin.
												<br/><a href="https://potomacofficersclub.com" target="_blank">Visit Site</a>
											</div>
										</div>

										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-globe fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">GovConWire</h4>
											<div class="item-desc">
												Delivers real-time news and updates on government contracts, defense, and IT.
												<br/><a href="https://govconwire.com" target="_blank">Visit Site</a>
											</div>
										</div>

										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-graph-up fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">GovConIndex</h4>
											<div class="item-desc">
												Tracks and analyzes market performance in the government contracting sector.
												<br/><a href="https://govconindex.com" target="_blank">Visit Site</a>
											</div>
										</div>

										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-award fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">Wash100</h4>
											<div class="item-desc">
												Recognizes the top 100 influential leaders in the government contracting industry annually.
												<br/><a href="https://wash100.com" target="_blank">Visit Site</a>
											</div>
										</div>

										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-lightbulb fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">GovConExec</h4>
											<div class="item-desc">
												Provides insights and strategic analysis for executives in the GovCon industry.
												<br/><a href="https://govconexec.com" target="_blank">Visit Site</a>
											</div>
										</div>
									</div>

									<hr />
									<br/>
									<h2>Key Contributions</h2>
									<div class="section-intro mb-5 limit-max-width mx-auto text-md-center">
										In my role at <strong>Archintel Corporation</strong>, I played a key part in enhancing the performance, functionality, and user experience of high-traffic websites. My contributions ranged from optimizing site speed and SEO to implementing custom features and automation. <br/>Below are some of the key areas where I made a significant impact:
									</div>

									<div class="row">
										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-speedometer2 fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">Performance Optimization & SEO</h4>
											<div class="item-desc">
												Enhanced website performance and SEO to improve ranking and user experience.
											</div>
										</div>

										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-code-slash fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">Custom Development</h4>
											<div class="item-desc">
												Implemented new features and functionalities using WordPress, Vue.js, and custom PHP.
											</div>
										</div>

										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-gear fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">Content Management</h4>
											<div class="item-desc">
												Ensured smooth content updates, media handling, and overall website maintenance.
											</div>
										</div>

										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-cloud-upload fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">Automated Data Feeds</h4>
											<div class="item-desc">
												Integrated real-time data feeds and automated workflows for content updates.
											</div>
										</div>

										<div class="col-md-6 col-lg-4 text-md-center">
											<div class="item-icon-holder mx-md-auto"><i class="bi bi-layout-text-sidebar fs-1 text-primary"></i></div>
											<h4 class="item-title mb-3">UI/UX Improvements</h4>
											<div class="item-desc">
												Redesigned interfaces for better engagement, accessibility, and mobile responsiveness.
											</div>
										</div>
									</div>
								
								</div>
									
							</section>

				

                        </div>						
				    </div>







					<div className="animate-on-scroll resume-wrapper mx-auto rounded-2" style={{border:"solid gray 1px",boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", padding: "40px",marginTop: "50px"}}>
                        <div className="resume-profile-holder text-center">
							

						<section id="freelance-projects">
							<div class="container">
								<h2 class="text-center mb-4">Freelance Projects</h2>
								<p class="text-center mb-5">
									Beyond my professional experience at Archintel Corporation, I have worked on various freelance projects, 
									designing and developing custom web applications for different industries. These projects showcase my expertise 
									in full-stack development, UI/UX design, database optimization, and real-time functionality implementation.
								</p>

								<div class="row gy-4">

																		
									<div class="col-md-6 col-lg-4 text-center">
										<div class="item-icon-holder mx-auto"><i class="bi bi-person fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">AVM International Online</h4>
										<p class="item-desc">
											An MLM system designed to handle complex computations, high-volume transactions, and massive datasets.
											The platform supports binary and unilevel compensation structures,
											it implements multi-tier payouts, overrides and rank-based incentives calculations.
										</p>
										<p><strong>Tech Stack:</strong> Laravel, Vue.js, MySQL, Tailwind Css</p>
									</div>


									<div class="col-md-6 col-lg-4 text-center">
										<div class="item-icon-holder mx-auto"><i class="bi bi-book fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">MaxRevOne Online Review System</h4>
										<p class="item-desc">
											A web-based review system designed to help students prepare for exams efficiently. 
											Implemented user authentication for personalized progress tracking and optimized database queries 
											for a smooth and responsive experience.
										</p>
										<p><strong>Tech Stack:</strong> PHP, MySQL, Bootstrap 4.0, JavaScript</p>
									</div>

									
									<div class="col-md-6 col-lg-4 text-center">
										<div class="item-icon-holder mx-auto"><i class="bi bi-people fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">Helper Choice (Find Helper) Website</h4>
										<p class="item-desc">
											A platform that connects users with domestic helpers through real-time search and 
											advanced filtering options. Focused on intuitive UI/UX to enhance user engagement and 
											ease of navigation.
										</p>
										<p><strong>Tech Stack:</strong> Laravel, Vue.js, MySQL, Bootstrap 4.0, JavaScript, jQuery</p>
									</div>

									
									<div class="col-md-6 col-lg-4 text-center">
										<div class="item-icon-holder mx-auto"><i class="bi bi-shop fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">SeaDream Seafood Restaurant Management System</h4>
										<p class="item-desc">
											A complete restaurant management solution for tracking orders and inventory. 
											Developed a responsive user interface with Bulma for seamless use on both mobile and desktop devices. 
											Integrated real-time order processing for improved restaurant efficiency.
										</p>
										<p><strong>Tech Stack:</strong> Laravel, Vue.js, MySQL, Bulma, JavaScript, jQuery</p>
									</div>

									
									<div class="col-md-6 col-lg-4 text-center">
										<div class="item-icon-holder mx-auto"><i class="bi bi-cash-coin fs-1 text-primary"></i></div>
										<h4 class="item-title mb-3">Product 8 Online Point of Sales System</h4>
										<p class="item-desc">
											A cloud-based POS system designed for real-time transaction processing. 
											Implemented sales analytics and reporting tools to provide businesses with insightful data. 
											Optimized database queries for fast and efficient performance.
										</p>
										<p><strong>Tech Stack:</strong> Laravel, Vue.js, MySQL, Bulma, JavaScript, jQuery</p>
									</div>

									
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
  
  export default Projects;