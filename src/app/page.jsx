"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import pic from "../../images/pic12.png";
import instagram from "../../images/instagram.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { makeScroll } from "./scrolls";
import "./scrolls";
import { FaBars, FaTimes } from 'react-icons/fa'; 
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const [feedback, setFeedback] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id) {
      setEmail(e.target.value);
    } else {
      setFeedback(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setFeedback("");
    toast.success("Thank your for contact😀");
  };
  const handleScroll = (e) => {
    makeScroll(e.target);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };
  
  return (
    <div className="bodys">
      <header className="header">
      <div className="headerContent">
        <h1>@fenilpanseriya.dev</h1>
        <button className="menuButton" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Toggle icons */}
        </button>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul className="menuItems">
            <li className="aboutme" onClick={handleScroll}>About Me</li>
            <li className="skill" onClick={handleScroll}>Skills</li>
            <li><a href="https://github.com/Fenilpanseriya?tab=repositories" target="_blank" rel="noopener noreferrer">Project</a></li>
            <li className="Achievement" onClick={handleScroll}>Achievements</li>
            <li className="Certificate" onClick={handleScroll}>Certificates</li>
            <li className="Contact" onClick={handleScroll}>Contact Me</li>
          </ul>
        </div>
      </div>
    </header>
      <div className="textContainer">
        <div className="about">
          <div className="photo">
            <Image className="pic" src={pic} alt="Me" />
          </div>
          <div className="text">
            <div className="animation">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Fenil.",
                  1000,
                  " I'm a Full Stack Developer.",
                  1000,
                  " SDE @ Fynd.",
                  1000,
                ]}
                wrapper="span"
                repeat={Infinity}
                speed={50}
                deletionSpeed={50}
                style={{
                  fontSize: "4rem",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              />
            </div>
            <p>
              I am a Software Engineer at <strong>Fynd</strong>, building
              scalable microservices for an AI-native commerce platform serving{" "}
              <strong>300M+ users</strong> across <strong>30+ countries</strong>.
            </p>
            <p>
              I work across the stack with <strong>Java, Spring Boot, Apache
              Kafka, React</strong> and <strong>TypeScript</strong> — designing
              event-driven systems with a focus on performance, security, and
              clean APIs.
            </p>
          </div>
        </div>
      </div>
      <div className="Resume">
        <h2>Resume</h2>
        <div className="box">
          
          <div className="boxes">
            <h2>Work Experience</h2>
            <h3>Fynd (Shopsense Retail), Mumbai.</h3>
            <p>Software Development Engineer - 1</p>
            <p>Jul 2025 - Present</p>
            <ul className="role-highlights">
              <li>Built scalable microservices for an AI-native commerce platform serving 300M+ users across 30+ countries.</li>
            </ul>
            <br/>
            <h3>DRC Systems, Gandhinagar.</h3>
            <p>Full-stack Software Engineer (Promoted from Intern)</p>
            <p>Jul 2024 - Jul 2025</p>
            <ul className="role-highlights">
              <li>Built backend services for auth, sessions and email notifications; crafted reusable TS/React components for 20+ workflows.</li>
              <li>Improved Appizap performance 35% via React code splitting, lazy loading & Module Federation — cutting load time and network requests by 40%.</li>
              <li>Delivered low-code capabilities — workflow automation, drag-and-drop builder, and analytics widgets.</li>
            </ul>
            <br/>
            <p>Full-stack Software Engineer Intern</p>
            <p>Jan 2024 - Jun 2024</p>
            <ul className="role-highlights">
              <li>Built MyMedico — a distributed microservice for doctor appointments using SAGA orchestration & Kafka.</li>
              <li>Achieved zero double-booking conflicts with slot-locking and 95% XSS risk reduction.</li>
            </ul>
          </div>
          <div className="boxes">
            <h2>Education</h2>
            <h3>Dharmsinh Desai University, Nadiad</h3>
            <p>B.Tech in Information Technology — CGPA: 8.35/10</p>
            <p>Sep 2020 - May 2024</p>
            <h3>The School Of Science, Rajkot.</h3>
            <p>HSC-Science</p>
            <p>Jun 2018 - April-2020</p>
          </div>
          <div className="boxes">
            <h2 className="h23">Achievements</h2>
            <h4>
              <a href="https://www.credly.com/badges/f6235e99-1d7b-48f5-84b5-0976a409429a">
                AWS Certified Solutions Architect – Associate (Apr 2025)
              </a>
            </h4>
            <h4>
              AWS Certified Cloud Practitioner (Feb 2025)
            </h4>
            <h4>
              <a href="https://leetcode.com/fenilpanseriya/">
                Solved 1500+ Problems on Leetcode.{" "}
              </a>
            </h4>
            <h4>
              <a href="https://www.hackerrank.com/profile/fenilpanseriya21">
                5-Star Coder at HackerRank in Problem Solving.
              </a>
            </h4>
            <h4>
              <a href="https://www.codechef.com/users/fenilpanseriya">
                Achieve Max rating 1585 at Codechef.
              </a>
            </h4>
            <h4>
              <a href="https://www.hackerrank.com/certificates/00990dccc5b0">
                Got certificate from HackerRank for Problem
                Solving(Intermediate).
              </a>
            </h4>

          </div>
          <div className="boxes">
            <h2>Skills</h2>
            <div className="skills">
              <div className="languages">
                <h3>Languages</h3>
                <ul>
                  <li>Java</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>SQL / NoSQL</li>
                  <li>C++ / C</li>
                  <li>Go (Intermediate)</li>
                </ul>
              </div>
              <div className="backend">
                <h3>Backend</h3>
                <ul>
                  <li>Spring Boot</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Apache Kafka</li>
                  <li>GraphQL</li>
                  <li>REST APIs</li>
                  <li>gRPC</li>
                </ul>
              </div>
              <div className="frontend">
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>Vue.js</li>
                  <li>Next.js (Intermediate)</li>
                  <li>Redux</li>
                  <li>Webpack</li>
                  <li>SSR</li>
                  <li>HTML5 / CSS3</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
              <div className="database">
                <h3>Databases & Caching</h3>
                <ul>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div className="devops">
                <h3>Cloud & DevOps</h3>
                <ul>
                  <li>AWS (EC2, S3, Lambda, SES, SQS, SNS, CloudWatch)</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>CI/CD</li>
                  <li>Git</li>
                  <li>Grafana / Prometheus</li>
                </ul>
              </div>
              <div className="testing">
                <h3>Testing</h3>
                <ul>
                  <li>Jest</li>
                  <li>JUnit</li>
                  <li>Mockito</li>
                  <li>Jasmine</li>
                  <li>Postman</li>
                  <li>Swagger</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactDetails">
        <h2>Contact</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleClick}
            placeholder=" Enter your name.."
          />
          <label>Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleClick}
            placeholder=" Enter your email.."
          />
          <label>Feedback</label>
          <textarea
            placeholder=" Enter your feedback.."
            value={feedback}
            onChange={handleClick}
          ></textarea>
          <button onClick={handleSubmit} className="btn">
            Submit
          </button>
        </form>
      </div>

      <div className="footer"></div>
      <div className="footerContent">
        <div className="footerImage">
          <a href="https://www.linkedin.com/in/fenil-panseriya-16306823b/">
            <Image src={linkedin} />
          </a>
          <a href="https://github.com/Fenilpanseriya?tab=repositories">
            <Image src={github} />
          </a>
          <a href="https://www.instagram.com/fenil___panseriya2034/?utm_source=qr&igsh=MTFmMmx5aDJkNjN1cg%3D%3D">
            <Image src={instagram} />
          </a>
        </div>
        <p>Crafted and Curated By Me :)</p>
      </div>
    </div>
  );
}
