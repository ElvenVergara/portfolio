import React, { useEffect } from "react";
import profilePic from "../assets/images/profile.png";


function Resume() {

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
    
    const downloadCv = () => {
        const domain = window.location.origin; 
        const cvUrl = `${domain}/portfolio/elven-vergara-cv.pdf`; 
        window.open(cvUrl, "_blank"); 
    };      



    return (
    <>

        <div className="main-content-wrapper">
                <div className="container-fluid">

                    <div className="resume-wrapper mx-auto rounded-2" style={{border:"solid gray 1px",boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"}}>
                    <div className="resume-header px-4 px-lg-5">
                        <div className="resume-profile-holder text-center">
                            <img 
                            className="resume-profile-pic rounded-circle" 
                            src={profilePic} 
                            alt="Profile"
                            />

                            <h2 className="resume-name text-uppercase">Elven Vergara</h2>
                            <div className="resume-role-title text-uppercase">Full-Stack Developer</div>
                           
                            <section id="download-cv">
                                <a onClick={downloadCv} style={{cursor: "pointer"}} class="text-blue px-2 py-1">
                                    <b><i class="fas fa-download"></i> &nbsp;Download my CV</b>
                                </a>
                            </section>

                            <div className="resume-contact mt-4">
                            <ul className="resume-contact-list list-unstyled list-inline mb-0 justify-content-between">
                                {/* <li 
                                style={{ color: "black" }} 
                                className="list-inline-item me-md-3 me-lg-5"
                                >
                                <i className="resume-contact-icon bi bi-telephone-inbound me-2"></i>
                                (+639)27-937-7615
                                </li> */}
                                
                                <li 
                                style={{ color: "black" }} 
                                className="list-inline-item me-md-3 me-lg-5"
                                >
                                <i className="resume-contact-icon bi bi-envelope me-2"></i>
                                yuirthme@gmail.com
                                </li>

                                <li className="list-inline-item me-lg-3">
                                <a 
                                    style={{ textDecoration: "none", color: "black", cursor: "pointer" }} 
                                    href="https://www.linkedin.com/in/elven-vergara/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="resume-contact-icon fa-brands fa-linkedin-in fa-fw"></i> 
                                    https://www.linkedin.com/in/elven-vergara/
                                </a>
                                </li>

                                <li 
                                style={{ color: "black" }} 
                                className="list-inline-item me-lg-3"
                                >
                                <a 
                                    style={{ textDecoration: "none", color: "black", cursor: "pointer" }} 
                                    href="https://elvenvergara.github.io/portfolio/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="resume-contact-icon bi bi-globe me-2"></i>
                                    https://elvenvergara.github.io/portfolio/
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                        
                        <div className="resume-body p-4 p-lg-5">
                            <div className="row">
                                <div className="col-main col-12 col-lg-8 pe-lg-4">
                                    <section className="animate-on-scroll resume-summary-section resume-section">
                                        <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-2 py-lg-3"><i className="resume-section-heading-icon bi bi-person me-2"></i>About Me</h3>
                                        <div className="resume-summary-desc">
                                            I am a Full Stack Developer with 8 years of experience in PHP, Laravel,
                                            Vue.js, React.js, TypeScript, MySQL, and WordPress specializing in building dynamic and scalable web applications.
                                             With expertise in both frontend and backend development, I have worked on government and private sector projects, including custom WordPress solutions, API integrations, document tracking systems, and online review platforms.
                                              I am proficient in server management, database optimization, and UI/UX design, ensuring high-performance and user-friendly applications. Passionate about problem-solving and automation, I continuously seek innovative ways to improve system efficiency and functionality.
                                        </div>
                                    </section>

                                    <hr/>
                                    
                                    <section className="animate-on-scroll resume-experience-section resume-section">
                                        <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i className="resume-section-heading-icon bi bi-briefcase me-2"></i>Work Experience</h3>
                                        <div className="resume-timeline position-relative">

                                            <article className="animate-on-scroll resume-timeline-item position-relative pb-5">

                                                <div className="resume-timeline-item-header mb-2">

                                                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                                                        <div className="resume-position-time">June 2025 – Present</div>
                                                    </div>

                                                    <h3 className="resume-position-title mb-1">Web Developer</h3>

                                                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                                                        <div className="resume-company-name">
                                                            Rocket Station (Superstar Virtual Assistance Inc.) · Full-time
                                                        </div>
                                                        <div className="resume-position-time">(Remote)</div>
                                                    </div>

                                                    <div className="resume-position-meta mb-1">
                                                        <div className="resume-position-time">
                                                            20th Floor, Zuellig Building, Makati Avenue corner Paseo de Roxas, Makati City 1226, Philippines
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="resume-timeline-item-desc">

                                                    <div className="container">
                                                        <p><strong>📍 Rocket Station | June 2025 – Present</strong></p>

                                                        <h3 className="resume-position-title mb-1">Key Responsibilities:</h3>

                                                        <ul className="resume-timeline-list">
                                                            <li>Developed and maintained full-stack applications using Vue.js, Reactjs Laravel, and WordPress.</li>
                                                            <li>Developed dynamic and interactive UI components using Vue.js, improving frontend performance and usability.</li>
                                                            <li>Designed and optimized MySQL databases to support large datasets and complex relational queries.</li>
                                                            <li>Built custom Elementor widgets, shortcodes, and backend tools to extend WordPress functionality.</li>
                                                            <li>Improved site SEO and application performance through query optimization, caching strategies, and best practices.</li>
                                                        </ul>

                                                        <h3 className="resume-position-title mb-1">Skills:</h3>

                                                        <ul className="resume-timeline-list">
                                                            <li>Vue.js, React, TypeScript, Laravel, WordPress</li>
                                                            <li>MySQL Database Design & Optimization</li>
                                                            <li>REST API & Third-Party Integrations</li>
                                                            <li>SEO & Performance Optimization</li>
                                                            <li>Server Deployment & Maintenance</li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </article>



                                            <article className="animate-on-scroll resume-timeline-item position-relative pb-5">
                                                
                                                <div className="resume-timeline-item-header mb-2">
                                                    
                                                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                                                        <div className="resume-position-time">Apr 2022 - Feb 2025 · 2 yrs 11 mos</div>
                                                    </div>

                                                    <h3 className="resume-position-title mb-1">Full-stack Developer</h3>

                                                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                                                        <div className="resume-company-name">
                                                            ArchIntel Corporation · Full-time
                                                        </div>
                                                        <div className="resume-position-time">(Remote)</div>
                                                    </div>

                                                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                                                        <div className="resume-position-tim	e">8245 Boone Boulevard, Tysons Corner, VA, United States, Virginia</div>
                                                    </div>

                                                </div>
                                                <div className="resume-timeline-item-desc">
                                                 
                                                   
                                                    <ul className="resume-timeline-list">
                                                        <div className="container">
                                                            <p><strong>📍 Archintel | April 2022 – February 2025 (2 years, 9 months)</strong></p>
                                                            
                                                        <h3 className="resume-position-title mb-1">Key Responsibilities:</h3>

                                                            <ul>
                                                                <li>Developed and maintained full-stack applications using Vue.js, Laravel, and WordPress.</li>
                                                                <li>Built custom WordPress solutions, including ACF fields, REST API integrations, and WooCommerce customizations.</li>
                                                                <li>Developed dynamic and interactive UI components with Vue.js and optimized frontend performance.</li>
                                                                <li>Designed and optimized MySQL databases, ensuring efficient data retrieval and storage.</li>
                                                                <li>Implemented APIs and third-party integrations (Salesforce, Klaviyo, Eventin, and custom RESTful APIs).</li>
                                                                <li>Developed custom Elementor widgets and WordPress shortcodes for enhanced website functionality.</li>
                                                                <li>Automated data syncs between WordPress and Salesforce, reducing manual input.</li>
                                                                <li>Improved site SEO and performance by optimizing queries, caching, and implementing best practices.</li>
                                                                <li>Deployed applications on AWS (EC2, RDS) and managed server configurations.</li>
                                                            </ul>
                                                            
                                                            <h3 className="resume-position-title mb-1">Key Achievements:</h3>
                                                            <div className="achievements">
                                                                <ul>
                                                                    <li>✅ <strong>Optimized API Syncing</strong> – Streamlined Salesforce-WordPress integration, reducing sync time by 40%.</li>
                                                                    <li>✅ <strong>Scalable Voting System</strong> – Developed an interactive voting system for Wash100 nominees, improving engagement.</li>
                                                                    <li>✅ <strong>Custom SEO-friendly URLs</strong> – Created dynamic, user-friendly permalinks for WordPress posts.</li>
                                                                    <li>✅ <strong>Enhanced User Experience</strong> – Built a Vue.js-powered profile tile system for better navigation and engagement.</li>
                                                                    <li>✅ <strong>Automated Form Submissions</strong> – Integrated WPForms with Klaviyo for seamless lead capture.</li>
                                                                    <li>✅ <strong>Performance Boost</strong> – Optimized database queries and caching, reducing load times by 50%.</li>
                                                                    <li>✅ <strong>WooCommerce Customization</strong> – Extended WooCommerce with custom fields, order automation, and payment integrations.</li>
                                                                </ul>
                                                            </div>
                                                            
                                                            <h3 className="resume-position-title mb-1">Skills:</h3>
                                                            <ul>
                                                                <li>Amazon Web Services (AWS)</li>
                                                                <li>Salesforce.com Development</li>
                                                                <li>Vue.js, React, TypeScript, Laravel, WordPress</li>
                                                                <li>MySQL Database Optimization</li>
                                                                <li>REST API Integrations</li>
                                                                <li>WooCommerce Customization</li>
                                                                <li>SEO Optimization</li>
                                                                <li>Server Deployment & Management</li>
                                                            </ul>
                                                        </div>
                                                    </ul>
                                                    
                                                </div>
        
                                            </article>

                                            <article className="animate-on-scroll resume-timeline-item position-relative pb-5">
                                                
                                                <div className="resume-timeline-item-header mb-2">
                                                    
                                                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                                                        <div className="resume-position-time">Mar 2021 - Dec 2021 · 10 mos</div>
                                                    </div>

                                                    <h3 className="resume-position-title mb-1">Web Developer</h3>

                                                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                                                        <div className="resume-company-name">
                                                            Philippine Department of Labor and Employment · Full-time
                                                        </div>
                                                        <div className="resume-position-time">(On-site)</div>
                                                    </div>

                                                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                                                        <div className="resume-position-tim	e">Tacloban City, Leyte, Philippines</div>
                                                    </div>

                                                </div>
                                                <div className="resume-timeline-item-desc">
                                                 
                                                   
                                                    <ul className="resume-timeline-list">
                                                        <div className="container">
                                                            <p><strong>📍 Department of Labor and Employment (DOLE VIII), Philippines | March 2021 – December 2021 (9 months)</strong></p>
                                                            
                                                        <h3 className="resume-position-title mb-1">Key Responsibilities:</h3>

                                                            <ul>
                                                                <li>Designed and developed a Document Tracking System (DTS) using Laravel and Vue.js to streamline document processing.</li>
                                                                <li>Built role-based access controls to ensure secure handling of sensitive government documents.</li>
                                                                <li>Designed and optimized MySQL databases for efficient storage and retrieval of document records.</li>
                                                                <li>Implemented real-time tracking features, allowing users to monitor document progress across departments.</li>
                                                                <li>Developed a custom dashboard and reporting system, improving transparency and efficiency in document processing.</li>
                                                                <li>Deployed and configured the system on the agency’s dedicated server, ensuring reliability and security.</li>
                                                                <li>Integrated audit logs and notifications, enhancing accountability and workflow automation.</li>
                                                                <li>Ensured system security and compliance with government IT policies.</li>
                                                            </ul>
                                                            
                                                            <h3 className="resume-position-title mb-1">Key Achievements:</h3>
                                                            <div className="achievements">
                                                                <ul>
                                                                    <li>✅ <strong>Developed a Document Tracking System</strong> – Reduced document processing time and improved transparency.</li>
                                                                    <li>✅ <strong>Optimized Database Performance</strong> – Designed efficient MySQL queries, enabling fast document retrieval.</li>
                                                                    <li>✅ <strong>Secured System Deployment</strong> – Set up and maintained an in-house server for hosting the DTS.</li>
                                                                    <li>✅ <strong>Enhanced Workflow Efficiency</strong> – Automated document movement tracking, reducing manual follow-ups.</li>
                                                                    <li>✅ <strong>Improved User Accessibility</strong> – Developed a user-friendly interface for employees across different departments.</li>
                                                                </ul>
                                                            </div>
                                                            
                                                            <h3 className="resume-position-title mb-1">Skills:</h3>
                                                            <ul>
                                                                <li>Vue.js, React, TypeScript, Laravel, WordPress</li>
                                                                <li>MySQL Database Optimization</li>
                                                                <li>REST API Integrations</li>
                                                                <li>Server Deployment & Management</li>
                                                            </ul>
                                                        </div>
                                                    </ul>
                                                    
                                                </div>
        
                                            </article>


                                            <article className="animate-on-scroll resume-timeline-item position-relative pb-5">
                                                <div className="resume-timeline-item-header mb-2">
                                                    <div className="resume-position-meta d-flex justify-content-between mb-1">
                                                        <div className="resume-position-time">June 2017 - March 2022</div>
                                                    </div>
                                                    <h3 className="resume-position-title mb-1">Freelance & Independent Projects</h3>
                                                    
                                                </div>
                                                <div className="resume-timeline-item-desc">
                                                    <ul className="resume-timeline-list">
                                                        <div className="container">
                                                            <p><strong>📍 Freelance Software Development & Web Applications | June 2017 – 2022</strong></p>
                                                            
                                                            <h3 className="resume-position-title mb-1">Key Projects:</h3>
                                                            <ul>
                                                                <li>
                                                                    <strong>MaxRevOne Online Review System (June 2017)</strong><br/>
                                                                    <em>Tech Stack: PHP, MySQL, Bootstrap 4.0, JavaScript</em>
                                                                    <ul>
                                                                        <li>Designed and developed an online review system to help students prepare for exams.</li>
                                                                        <li>Implemented user authentication and progress tracking features.</li>
                                                                        <li>Optimized database queries for seamless user experience.</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <strong>Helper Choice (Find Helper) Website (January 2018)</strong><br/>
                                                                    <em>Tech Stack: Laravel, Vue.js, MySQL, Bootstrap 4.0, JavaScript, jQuery</em>
                                                                    <ul>
                                                                        <li>Created a platform to connect users with domestic helpers.</li>
                                                                        <li>Integrated real-time search and filtering functionality.</li>
                                                                        <li>Designed an intuitive UI/UX for easy navigation.</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <strong>SeaDream Seafood Restaurant Management System (June 2019)</strong><br/>
                                                                    <em>Tech Stack: Laravel, Vue.js, MySQL, Bulma, JavaScript, jQuery</em>
                                                                    <ul>
                                                                        <li>Developed a restaurant management system for order and inventory tracking.</li>
                                                                        <li>Built a responsive UI with Bulma for mobile and desktop compatibility.</li>
                                                                        <li>Implemented real-time order management for efficiency.</li>
                                                                    </ul>
                                                                </li>

                                                                <li><strong>DOLE RO VIII Systems (June 2021)</strong><br/>
                                                                    <em>Tech Stack: Laravel, Vue.js, MySQL, Bulma, JavaScript, jQuery</em>
                                                                    <ul>
                                                                        <li>Developed a document tracking system to streamline government document management.</li>
                                                                        <li>Automated workflow processes to enhance efficiency and reduce manual workload.</li>
                                                                        <li>Created a reporting module for performance analysis and monitoring.</li>
                                                                        <li>Implemented a secure and scalable architecture to ensure data integrity and accessibility.</li>
                                                                        <li>Designed a user-friendly interface using Bulma for an intuitive user experience.</li>
                                                                    </ul>
                                                                </li>
                                                                
                                                                <li>
                                                                    <strong>Product 8 Online Point of Sales System (February 2022)</strong><br/>
                                                                    <em>Tech Stack: Laravel, Vue.js, MySQL, Bulma, JavaScript, jQuery</em>
                                                                    <ul>
                                                                        <li>Built a cloud-based POS system for real-time transaction processing.</li>
                                                                        <li>Integrated sales analytics and reporting tools.</li>
                                                                        <li>Ensured high performance with database query optimizations.</li>
                                                                    </ul>
                                                                </li>

                                                                

                                                            </ul>
                                                            
                                                            <h3 className="resume-position-title mb-1">Skills:</h3>
                                                            <ul>
                                                                <li>Laravel, Vue.js, WordPress</li>
                                                                <li>PHP, JavaScript, jQuery</li>
                                                                <li>MySQL Database Optimization</li>
                                                                <li>REST API Integrations</li>
                                                                <li>UI/UX Design & Responsive Web Development</li>
                                                                <li>Server Deployment & Management</li>
                                                            </ul>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </article>
                                            
                                           
                                        </div>
                                    </section>
                                </div>
                                <div className="col-12 col-lg-4 ps-lg-4">
                                    
                                    <section className="animate-on-scroll resume-skills-section resume-section">
                                        <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3">
                                            <i className="resume-section-heading-icon bi bi-gear me-2"></i>Tech Stack
                                        </h3>
                                    
                                        <div className="container">
                                            <b className="item-heading mt-3">Frontend Development</b>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <ul className="list-unstyled">
                                                        <li className="item-desc">Vue.js</li>
                                                        <li className="item-desc">React.js</li>
                                                        <li className="item-desc">JavaScript</li>
                                                        <li className="item-desc">TypeScript</li>
                                                        <li className="item-desc">Bootstrap 4 & 5</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="list-unstyled">
                                                        <li className="item-desc">Bulma</li>
                                                        <li className="item-desc">Materialize</li>
                                                        <li className="item-desc">HTML5, CSS, SASS</li>
                                                        <li className="item-desc">Tailwind CSS</li>
                                                    </ul>
                                                </div>
                                            </div>

                                    
                                            <b className="item-heading mt-3">Backend Development</b>
                                            <ul className="list-unstyled">
                                                <li className="item-desc">Laravel (PHP Framework)</li>
                                                <li className="item-desc">PHP (Core & OOP)</li>
                                                <li className="item-desc">Node.js</li>
                                                <li className="item-desc">Python</li>
                                                <li className="item-desc">Authentication & Authorization (JWT, OAuth)</li>
                                            </ul>
                                    
                                            <b className="item-heading mt-3">Database Management</b>
                                            <ul className="list-unstyled">
                                                <li className="item-desc">MySQL (Schema Design, Optimization, Indexing)</li>
                                                <li className="item-desc">PostgreSQL</li>
                                                <li className="item-desc">SQL Queries & Performance Tuning</li>
                                                <li className="item-desc">NoSQL (Firebase, MongoDB)</li>
                                            </ul>
                                    
                                            <b className="item-heading mt-3">Content Management Systems (CMS)</b>
                                            <ul className="list-unstyled">
                                                <li className="item-desc">WordPress (Theme & Plugin Development)</li>
                                                <li className="item-desc">WooCommerce Customization</li>
                                                <li className="item-desc">Advanced Custom Fields (ACF)</li>
                                            </ul>
                                    
                                            <b className="item-heading mt-3">DevOps & Server Management</b>
                                            <ul className="list-unstyled">
                                                <li className="item-desc">AWS (EC2, RDS, S3, LightSail, CodeCommit)</li>
                                                <li className="item-desc">Apache & Nginx Configuration</li>
                                                <li className="item-desc">Linux Server Administration</li>
                                            </ul>
                                    
                                            <b className="item-heading mt-3">Tools & Version Control</b>
                                            <ul className="list-unstyled">
                                                <li className="item-desc">Git & GitHub</li>
                                                <li className="item-desc">Postman (API Testing)</li>
                                                <li className="item-desc">cPanel & WHM</li>
                                            </ul>
                                    
                                            <b className="item-heading mt-3">Third-Party Integrations</b>
                                            <ul className="list-unstyled">
                                                <li className="item-desc">Salesforce Integration</li>
                                                <li className="item-desc">Klaviyo API</li>
                                                <li className="item-desc">Contact Form 7 & Eventin</li>
                                            </ul>
                                    
                                            <b className="item-heading mt-3">Other Skills & Tools</b>
                                            <ul className="list-unstyled">
                                                <li className="item-desc">UI/UX Design Principles</li>
                                                <li className="item-desc">SEO Optimization & Web Performance Tuning</li>
                                                <li className="item-desc">JIRA (Agile Development, Sprint Planning)</li>
                                                <li className="item-desc">Basecamp (Team Collaboration, Task Management)</li>
                                            </ul>
                                        </div>
                                    </section>
                                    
                                    
                                    <hr/>
                                    
                                    <section className="animate-on-scroll resume-skills-section resume-section">
                                        <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i className="resume-section-heading-icon bi bi-person-gear me-2"></i>Soft Skills</h3>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><span className="badge resume-skill-badge">Leadership</span></li>
                                            <li className="list-inline-item"><span className="badge resume-skill-badge">Project Management</span></li>
                                            <li className="list-inline-item"><span className="badge resume-skill-badge">DevOps</span></li>
                                            <li className="list-inline-item"><span className="badge resume-skill-badge">Analytical thinking</span></li>
                                            <li className="list-inline-item"><span className="badge resume-skill-badge">Troubleshooting complex issues</span></li>
                                            <li className="list-inline-item"><span className="badge resume-skill-badge">Debugging and code optimization</span></li>
                                        </ul>
                                    </section>
                                    
                                    <hr/>
                                    
                                    <section className="animate-on-scroll resume-projects-section resume-section">
                                        <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3">
                                            <i className="resume-section-heading-icon bi bi-code-slash me-2"></i>Projects
                                        </h3>


                                        <div className="item">
                                            <h4 className="item-heading">
                                                <i className="item-icon bi bi-square-fill me-2"></i>
                                                <a href="https://govconindex.com" target="_blank">AVM International Online</a>
                                            </h4>
                                            <div className="item-desc">
                                                An MLM system designed to handle complex computations, high-volume transactions, and massive datasets.
                                                The platform supports binary and unilevel compensation structures,
                                                it implements multi-tier payouts, overrides and rank-based incentives calculations.
                                                <br/><strong>Tech Stack:</strong> Laravel, Vue.js, MySql, Tailwind Css
                                            </div>
                                        </div>


                                    
                                        <div className="item">
                                            <h4 className="item-heading">
                                                <i className="item-icon bi bi-square-fill me-2"></i>
                                                <a href="https://govconindex.com" target="_blank">GovConIndex</a>
                                            </h4>
                                            <div className="item-desc">
                                                Led the development of <strong>govconindex.com</strong>, a WordPress-based platform providing insights and analytics for the government contracting industry. 
                                                Implemented custom WordPress themes and plugins for data visualization and real-time data fetching.
                                                Integrated third-party APIs and optimized performance for high traffic loads.
                                                <br/><strong>Tech Stack:</strong> WordPress, ACF, WP REST API, Vue.js, Custom PHP, JavaScript
                                            </div>
                                        </div>
                                    
                                        <div className="item">
                                            <h4 className="item-heading">
                                                <i className="item-icon bi bi-square-fill me-2"></i>
                                                <a href="https://wash100.com" target="_blank">Wash100</a>
                                            </h4>
                                            <div className="item-desc">
                                                Led the development of <strong>wash100.com</strong>, a WordPress-powered voting platform for top government and industry executives.
                                                Implemented a custom voting system using Advanced Custom Fields (ACF) and AJAX.
                                                Integrated Vue.js for dynamic user interactions and a real-time ranking system.
                                                Optimized the WordPress backend for efficient vote management and security.
                                                <br/><strong>Tech Stack:</strong> WordPress, ACF, WP REST API, Vue.js, Custom PHP, JavaScript
                                            </div>
                                        </div>
                                    
                                        <div className="item">
                                            <h4 className="item-heading">
                                                <i className="item-icon bi bi-square-fill me-2"></i>
                                                <a href="#">MaxRevOne Online Review System</a>
                                            </h4>
                                            <div className="item-desc">
                                                Designed and developed an online review system to help students prepare for exams.
                                                Implemented user authentication and progress tracking features.
                                                Optimized database queries for seamless user experience.
                                                <br/><strong>Tech Stack:</strong> PHP, MySQL, Bootstrap 4.0, JavaScript
                                            </div>
                                        </div>
                                    
                                        <div className="item">
                                            <h4 className="item-heading">
                                                <i className="item-icon bi bi-square-fill me-2"></i>
                                                <a href="#">Helper Choice (Find Helper) Website</a>
                                            </h4>
                                            <div className="item-desc">
                                                Created a platform to connect users with domestic helpers.
                                                Integrated real-time search and filtering functionality.
                                                Designed an intuitive UI/UX for easy navigation.
                                                <br/><strong>Tech Stack:</strong> Laravel, Vue.js, MySQL, Bootstrap 4.0, JavaScript, jQuery
                                            </div>
                                        </div>
                                    
                                        <div className="item">
                                            <h4 className="item-heading">
                                                <i className="item-icon bi bi-square-fill me-2"></i>
                                                <a href="#">SeaDream Seafood Restaurant Management System</a>
                                            </h4>
                                            <div className="item-desc">
                                                Developed a restaurant management system for order and inventory tracking.
                                                Built a responsive UI with Bulma for mobile and desktop compatibility.
                                                Implemented real-time order management for efficiency.
                                                <br/><strong>Tech Stack:</strong> Laravel, Vue.js, MySQL, Bulma, JavaScript, jQuery
                                            </div>
                                        </div>
                                    
                                        <div className="item">
                                            <h4 className="item-heading">
                                                <i className="item-icon bi bi-square-fill me-2"></i>
                                                <a href="#">Product 8 Online Point of Sales System</a>
                                            </h4>
                                            <div className="item-desc">
                                                Built a cloud-based POS system for real-time transaction processing.
                                                Integrated sales analytics and reporting tools.
                                                Ensured high performance with database query optimizations.
                                                <br/><strong>Tech Stack:</strong> Laravel, Vue.js, MySQL, Bulma, JavaScript, jQuery
                                            </div>
                                        </div>
                                    </section>
                                    
                                    <hr/>
                                    
                                    <section className="animate-on-scroll resume-educate-section resume-section">
                                        <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i className="resume-section-heading-icon bi bi-book me-2"></i>Education</h3>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <div className="resume-degree font-weight-bold">Bachelor of Science in Information Technology</div>
                                                <div className="resume-degree-org">Eastern Visayas State University</div>
                                                <div className="resume-degree-time">2007 - 2017</div>
                                            </li>
                                        </ul>
                                    </section>
                                    
                                    <hr/>
                                    
                                    <section className="animate-on-scroll resume-lang-section resume-section">
                                        <h3 className="resume-section-heading text-uppercase py-2 py-lg-3 py-3"><i className="resume-section-heading-icon bi bi-translate me-2"></i>Languages</h3>
                                         <ul className="list-unstyled resume-lang-list">
                                            <li className="mb-2">
                                                <div className="resume-lang-name">English</div>
                                                <div className="resume-level-indicator row gx-0 flex-nowrap">
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-half"></span></div>
                                                    <div className="col"><span className="item"></span></div>
                                                    <div className="col"><span className="item"></span></div>
                                                </div>
                                            </li>
                                             <li className="mb-2">
                                                <div className="resume-lang-name">Tagalog</div>
                                                <div className="resume-level-indicator row gx-0 flex-nowrap">
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                    <div className="col"><span className="item item-full"></span></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>
                                    
                                    
                                    
                                </div>
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
         
    
    </>
    );

}
  
  export default Resume;