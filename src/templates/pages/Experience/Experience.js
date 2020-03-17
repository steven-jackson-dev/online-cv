import React, { useEffect } from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import Divider from '../../components/Divider/Divider'
import { BounceInRight } from "react-spring-pop";
import './Experience.scss'


const Experience = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section id="Experience" className="py-5 mt-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} lg={3}>
                        <div className="title text-center">
                            <h3>Experience</h3>
                        </div>
                    </Col>
                    <Col md={9} xs={12} lg={9} className="content">
                        <BounceInRight>
                            <div className="mb-5">
                                <h2>Freelance Developer</h2>
                                <b>July 2015 to Current</b> <br />
                                <em>Digital Agencies and Individual Clients</em>
                                <p className="mt-3">
                                    I have been a Freelance developer for the majority of my Developer career. I am purely self-taught
                                    and have learned many things and have worked with a few Agencies and many Clients to accomplish their
                                    goals and meet their requirements in a extremely short time frame.
                                </p>
                                <p><b>Roles and Responsibilities:</b></p>
                                <b>Freelance Developer</b>
                                <ul>
                                    <li>Building PHP websites using HTML5. CSS3, Javascript, jQuery, Wordpress and anything else required</li>
                                    <li>Planning and conducting cross-browser usability testing against W3C.</li>
                                    <li>Performance optimization and Maintenance of websites </li>
                                    <li>Developing compatible User Interface functionality using jQuery & other libraries. </li>
                                    <li>Documenting features, technical specifications & infrastructure requirements. </li>
                                    <li>Building Responsive Mailers using HTML and CSS.</li>
                                    <li>All-purpose developer according to Client’s systems (Wordpress, Custom and CS Cart)</li>
                                    <li>Client Liason and Training when required</li>
                                    <li>Managing of Client domains and requirements</li>
                                    <li>Everything else that comes with the Freelance development</li>
                                </ul>
                            </div>
                            <Divider />
                            <div className="mb-5">
                                <h2>ROI Digital/Media</h2>
                                <b>July 2012 to July 2015</b> <br />
                                <em>Intern/Junior Developer &amp; IT Technician</em>
                                <p className="mt-3">
                                    ROI was a fantastic place for me to get my foot in the door for I.T and Development
                                    and enjoyed every minute of working on multiple client's sites as well as different platforms.
                                    I was a I.T Technician by day and a Intern/Junior Dev by night and leading both the
                                    I.T and Development Department towards the end of my time there.
                                </p>
                                <p><b>Roles and Responsibilities:</b></p>

                                <b>Junior Developer</b>
                                <ul>
                                    <li>Build and testing / QA of email newsletters and websites (e-commerce focused)</li>
                                    <li>Create, build and manage assets for the websites and affiliate sites including homepage, category banners and competition pages.</li>
                                    <li>Development / Coding of landing pages and Websites (CS Cart and Wordpress)</li>
                                    <li>Draft business requirements and technical specs that are robust and meet the needs of client and developers</li>
                                    <li>Responsible for delivery of web development and e-commerce development projects within scope, budget and time</li>
                                    <li>Manage all Project related documentation</li>
                                    <li>Interrogate all requirements and ensure the best solution is provided to clients</li>
                                    <li>Run multiple medium to large projects concurrently and independently</li>
                                    <li>Ensure project post-mortems take place and that each project is better than the last (implement quality improvements)</li>
                                    <li>Adhoc development responsibilities as and when required</li>
                                    <li>Training departments in the basics of Web Development process and functions</li>
                                    <li>Clearly defining the problem via illustrations and simplied explanations</li>
                                    <li>Training clients in the use of their CMS via illustrations</li>
                                </ul>

                                <b>IT Technician</b>
                                <ul>
                                    <li>Repairing and Replacing PC's</li>
                                    <li>Setting up sites on Development environment</li>
                                    <li>Updating, inserting content and editing sites using CSS, LESS, Html, PHP, Smarty HTML</li>
                                    <li>Monthly Backups of Websites and Vault</li>
                                    <li>Hosting and Hosting related issues</li>
                                    <li>Full updated Audit sheet</li>
                                    <li>Internal issues</li>
                                    <li>General I.T. Issues</li>
                                    <li>Control over Firewall</li>
                                    <li>Reviewing CV's of potential candidates for IT and Development departments.</li>
                                    <li>Interviews with potential candidates for IT and Development departments.</li>
                                    <li>Managerial Meetings in regards to both IT and Development departments</li>

                                </ul>
                            </div>
                            <Divider />
                            <div className="mb-5">
                                <h2>DC Group – Trend Security</h2>
                                <b>2011 to 2012</b> <br />
                                <em>Technician</em>
                            </div>
                            <Divider />
                            <div className="mb-5">
                                <h2>Frontline Integrated Solutions</h2>
                                <b>2010 to 2011</b> <br />
                                <em>IT Support</em>
                            </div>
                            <Divider />
                            <div className="mb-5">
                                <h2>TVR Computers</h2>
                                <b>2009 to 2009</b> <br />
                                <em>IT Technician</em>
                            </div>
                            <Divider />
                            <div className="mb-5">
                                <h2>IT Outlook (Temp)</h2>
                                <b>2006 to 2006</b> <br />
                                <em>IT Technician</em>
                            </div>
                        </BounceInRight>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Experience
