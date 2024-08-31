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
            <li><a href="https://drive.google.com/file/d/1p3RaVF_HEsJe2Gp7WT-AR6Ggnjs7wutp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a></li>
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
                  "Hi,I'm Fenil.",
                  1000,
                  " I'm Full Stack Developer.",
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
              I am full stack developer with good understanding of{" "}
              <strong>M.E.R.N</strong> Technologies and{" "}
              <strong>S.O.L.I.D </strong>principles.
            </p>
            <p>
              I adapt the technology easily as technology change rapidly
              everyday.
            </p>
          </div>
        </div>
      </div>
      <div className="Resume">
        <h2>Resume</h2>
        <div className="box">
          
          <div className="boxes">
            <h2>Work Experience</h2>
            <h3>DRC Systems,Gandhinagar.</h3>
            <p>Associate Software Engineer</p>
            <p>Jul 2024 - Present</p>
            <br/>
            <p>SDE intern</p>
            <p>Jan 2024 - Jun 2024</p>
          </div>
          <div className="boxes">
            <h2>Education</h2>
            <h3>Dharmsinh Desai University, Nadiad</h3>
            <p>B.Tech in Information Technology</p>
            <p>Sep 2020 - Present</p>
            <h3>The School Of Science, Rajkot.</h3>
            <p>HSC-Science</p>
            <p>Jun 2018 - April-2020</p>
          </div>
          <div className="boxes">
            <h2 className="h23">Achievements</h2>

            <h4>
              <a href="https://leetcode.com/fenilpanseriya/">
                Solve 1100+ Problems on Leetcode.{" "}
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
            <h4>
              <a href="https://www.credly.com/users/fenil-panseriya/badges">
                Got AWS certificate from AWS cloud academy foundation after
                completing AWS course.
              </a>
            </h4>
          </div>
          <div className="boxes">
            <h2>Skills</h2>
            <div className="skills">
              <div div className="frontend">
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>Next.js(Intermidiate)</li>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>TailwindCSS</li>
                  <li>Redux</li>
                  <li>JQuery(Familier)</li>
                </ul>
              </div>
              <div className="backend">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>GO(Intermidiate)</li>
                  <li>SQL</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div className="database">
                <h3>Databases</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Redis</li>
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
