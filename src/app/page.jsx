"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import toast from "react-hot-toast";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const LINKEDIN_URL = "https://www.linkedin.com/in/fenil-panseriya-16306823b/";
const GITHUB_URL = "https://github.com/Fenilpanseriya";
const EMAIL = "fenilpanseriya2004@gmail.com";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    company: "Fynd (Shopsense Retail Technologies)",
    location: "Mumbai, India",
    role: "Software Development Engineer - 1",
    period: "Jul 2025 — Present",
    bullets: [
      "Built scalable microservices for an AI-native commerce platform serving 300M+ users across 30+ countries.",
      "Resolved a critical cross-storefront session vulnerability affecting 40+ applications within a 24-hour SLA — deployed storefront-scoped token validation and audience-bound session controls.",
      "Designed RBAC across 20K+ storefronts and built the auth module with Redis, JWT, OAuth2.0 and 95%+ test coverage.",
      "Delivered end-to-end Apple Sign-In integration — credentials configuration flow, Superion API spec versioning, GraphQL validation, and resilient profile-field fallback handling.",
      "Shipped multilingual support for registration and onboarding flows, enabling cross-country users to sign up in their native language across 30+ countries.",
      "Built a seller permissions module — backend service + custom UI — letting sellers define and manage fine-grained custom access controls across their stores.",
      "Migrated console webhook system to v2 API with extended productId payload and back-channel staff-expiry triggers, enabling downstream consumers to filter events natively.",
      "Lifted unit-test coverage to 95% across 3+ microservices by authoring missing specs and stabilizing flaky cases — raising release confidence on critical platform services.",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Apache Kafka",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "React",
      "Vue.js",
      "GraphQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "Grafana",
    ],
  },
  {
    company: "DRC Systems",
    location: "Gandhinagar, India",
    role: "Full-stack Software Engineer (Promoted from Intern)",
    period: "Jul 2024 — Jul 2025",
    bullets: [
      "Built backend services for auth, sessions and email notifications; crafted reusable TS/React components for 20+ workflows.",
      "Improved Appizap performance by 35% via React code splitting, lazy loading & Module Federation — cutting load time and network requests by 40%.",
      "Built custom authentication using Supabase Auth and end-to-end logging infrastructure with 100% request-response traceability — slashing debugging cycles by 30%.",
      "Delivered low-code capabilities — workflow automation, drag-and-drop builder, and analytics widgets.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Webpack",
    ],
  },
  {
    company: "DRC Systems",
    location: "Gandhinagar, India",
    role: "Full-stack Software Engineer Intern",
    period: "Jan 2024 — Jun 2024",
    bullets: [
      "Built MyMedico — a distributed microservice for doctor appointments using SAGA orchestration & Apache Kafka.",
      "Achieved zero double-booking conflicts via slot-locking; reduced XSS risk by 95%; integrated Mapbox for location features.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Kafka",
      "MongoDB",
      "PostgreSQL",
      "React",
      "JWT",
      "Mapbox",
    ],
  },
];

const SKILLS = [
  {
    title: "Languages",
    items: [
      "Java",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL / NoSQL",
      "C++ / C",
      "Go (Intermediate)",
    ],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Apache Kafka",
      "GraphQL",
      "REST APIs",
      "gRPC",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Vue.js",
      "Next.js",
      "Redux",
      "Webpack",
      "SSR",
      "HTML5 / CSS3",
      "TailwindCSS",
    ],
  },
  {
    title: "Databases & Caching",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Lambda, SES, SQS, SNS, CloudWatch)",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Grafana / Prometheus",
    ],
  },
  {
    title: "Testing & Architecture",
    items: [
      "Jest",
      "JUnit",
      "Mockito",
      "Microservices",
      "Event-Driven Architecture",
      "OAuth2.0 / JWT",
      "API Security",
    ],
  },
];

const EDUCATION = [
  {
    school: "Dharmsinh Desai University, Nadiad",
    degree: "B.Tech in Information Technology — CGPA: 8.35/10",
    period: "Sep 2020 — May 2024",
  },
  {
    school: "The School Of Science, Rajkot",
    degree: "HSC — Science",
    period: "Jun 2018 — Apr 2020",
  },
];

const ACHIEVEMENTS = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    detail: "Apr 2025",
    href: "https://www.credly.com/badges/f6235e99-1d7b-48f5-84b5-0976a409429a",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    detail: "Feb 2025",
  },
  {
    title: "Solved 1500+ Problems on LeetCode",
    detail: "Competitive programming",
    href: "https://leetcode.com/fenilpanseriya/",
  },
  {
    title: "5-Star Coder at HackerRank",
    detail: "Problem Solving",
    href: "https://www.hackerrank.com/profile/fenilpanseriya21",
  },
  {
    title: "Max rating 1585 on CodeChef",
    detail: "Competitive programming",
    href: "https://www.codechef.com/users/fenilpanseriya",
  },
  {
    title: "HackerRank Problem Solving (Intermediate)",
    detail: "Verified credential",
    href: "https://www.hackerrank.com/certificates/00990dccc5b0",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
    toast.success("Thanks for reaching out — I'll get back to you soon!");
  };

  return (
    <div className="page">
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#hero" className="logo">
            @fenilpanseriya.dev
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav
            className={`nav ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Hi, I&apos;m</p>
          <h1 className="hero-name">Fenil Panseriya</h1>
          <div className="hero-role">
            <TypeAnimation
              sequence={[
                "Software Development Engineer @ Fynd",
                1800,
                "Backend & Distributed Systems",
                1800,
                "Full-stack Engineer",
                1800,
              ]}
              wrapper="span"
              repeat={Infinity}
              speed={50}
            />
          </div>
          <p className="hero-tagline">
            Building scalable microservices for an AI-native commerce platform
            serving <strong>300M+ users</strong> across{" "}
            <strong>30+ countries</strong>. Focused on performance, security,
            and clean event-driven architecture.
          </p>
          <div className="hero-cta">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary">
              <FaEnvelope /> Get in touch
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost icon-only"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost icon-only"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-text">
            <p>
              I&apos;m a Software Development Engineer at{" "}
              <strong>Fynd</strong>, where I architect distributed systems
              powering an AI-native commerce platform serving{" "}
              <strong>300M+ users</strong> across{" "}
              <strong>30+ countries</strong>. I work end-to-end across
              event-driven microservices, high-throughput APIs, and the
              user-facing surfaces consumed by <strong>20K+ storefronts</strong>{" "}
              worldwide.
            </p>
            <p>
              My toolbelt spans{" "}
              <strong>
                Java, Spring Boot, Node.js, TypeScript, Apache Kafka, Redis, PostgreSQL, MongoDB,
                GraphQL, REST, gRPC, React, Vue.js, AWS, Grafana, Prometheus, Docker, and Kubernetes
              </strong>{" "}
              — wired together with OAuth2.0 / JWT, fine-grained RBAC, and
              observability via Grafana &amp; Prometheus.
            </p>
            <p>
              I care about <strong>performance, security, and APIs that
              don&apos;t lie to their consumers</strong>. Recent wins: sealed a
              critical cross-storefront session vulnerability across 40+ apps
              inside a 24-hour SLA, designed RBAC across 20K+ storefronts,
              shipped multilingual onboarding for cross-country signups, and
              pushed unit-test coverage to <strong>95% across 3+ critical
              services</strong>.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {EXPERIENCE.map((exp, i) => (
              <article key={i} className="experience-card">
                <header className="experience-header">
                  <div>
                    <h3 className="experience-company">{exp.company}</h3>
                    <p className="experience-role">{exp.role}</p>
                  </div>
                  <div className="experience-meta">
                    <span>{exp.period}</span>
                    <span className="experience-location">
                      <FaMapMarkerAlt size={11} /> {exp.location}
                    </span>
                  </div>
                </header>
                <ul className="experience-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div key={s.title} className="skill-card">
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {EDUCATION.map((e, i) => (
              <div key={i} className="education-card">
                <h3>{e.school}</h3>
                <p>{e.degree}</p>
                <span className="muted">{e.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="section">
        <div className="container">
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="achievements-grid">
            {ACHIEVEMENTS.map((a, i) => {
              const inner = (
                <>
                  <h3>{a.title}</h3>
                  <p>{a.detail}</p>
                  {a.href && (
                    <span className="muted small">
                      View credential <FaExternalLinkAlt size={10} />
                    </span>
                  )}
                </>
              );
              return a.href ? (
                <a
                  key={i}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-card"
                >
                  {inner}
                </a>
              ) : (
                <div key={i} className="achievement-card">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <p>
                I&apos;m always open to interesting conversations — engineering
                problems, career chats, or collaborations.
              </p>
              <div className="contact-links">
                <a href={`mailto:${EMAIL}`}>
                  <FaEnvelope /> {EMAIL}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={onSubmit}>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={onChange("name")}
                  required
                  placeholder="Your name"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  required
                  placeholder="you@email.com"
                />
              </label>
              <label>
                <span>Message</span>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  required
                  placeholder="Say hello..."
                  rows={4}
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>Crafted by Fenil Panseriya · {new Date().getFullYear()}</p>
          <div className="footer-links">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
