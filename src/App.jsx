import { useState } from 'react'
import './App.css'

const skills = [
  { name: 'Python', type: 'Programming' },
  { name: 'SQL', type: 'Database' },
  { name: 'Microsoft Excel', type: 'Data Analytics' },
  { name: 'Power BI', type: 'Data Visualization' },
  { name: 'Java', type: 'Programming' },
  { name: 'Statistics', type: 'Data Analytics' },
]

const projects = [
  {
    number: '01',
    title: 'Retail Sales Analysis Dashboard',
    category: 'Microsoft Excel',
    description: 'An Excel-based project focused on organizing retail sales data and presenting meaningful insights through an interactive dashboard.',
    tools: 'Excel • Pivot Tables • Dashboard',
  },
  {
    number: '02',
    title: 'E-Commerce Sales Analysis',
    category: 'MySQL',
    description: 'A database analysis project using SQL queries to explore e-commerce sales data and understand business performance.',
    tools: 'MySQL • SQL Queries',
  },
  {
    number: '03',
    title: 'Student Performance Data Analysis',
    category: 'Python & Power BI',
    description: 'A data analysis project exploring student performance data and presenting insights through visual reports.',
    tools: 'Python • Power BI',
  },
]

const education = [
  {
    degree: 'B.Sc. Data Science and Analytics',
    institution: 'Rathinam Global Deemed to be University',
    period: '2025 – 2028',
    status: 'Currently Pursuing · Second Year',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Biology Major',
    period: '2025',
    status: 'Completed',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Vivek Vidya Mandir',
    period: '2023',
    status: 'Completed',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">SK</span>
          <span>
            <strong>Sri Kalanidhi CB</strong>
            <small>Data Science Student</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href="#contact">
          Let's Connect ↗
        </a>
      </header>

      <main>
        {/* HOME SECTION */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <span className="eyebrow">
              WELCOME TO MY PORTFOLIO
            </span>

            <h1>
              Hello, I'm <span>Sri Kalanidhi CB.</span>
            </h1>

            <h2>Aspiring Data Analyst</h2>

            <p>
              I am a B.Sc. Data Science and Analytics student passionate
              about data, technology and transforming information into
              meaningful insights.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                Explore My Work ↗
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-social">
              <a
                href="https://www.linkedin.com/in/sri-kalanidhi-cb-226b11385"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <span>Based in Coimbatore, India</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="initial-card">
              <span>DATA</span>
              <strong>DS</strong>
              <span>ANALYTICS</span>
            </div>

            <div className="floating-card card-top">
              ✦ Curious Learner
            </div>

            <div className="floating-card card-bottom">
              ◈ Data Enthusiast
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section content-section">
          <div className="section-heading">
            <span className="eyebrow">GET TO KNOW ME</span>
            <h2>
              About <span>Me</span>
            </h2>
            <p>
              A little introduction about my learning journey and interests.
            </p>
          </div>

          <div className="about-card">
            <div className="about-mark">SK.</div>

            <div>
              <h3>
                Passionate about learning and discovering through data.
              </h3>

              <p>
                I am currently pursuing a Bachelor's degree in Data Science
                and Analytics at Rathinam Global Deemed to be University.
                I enjoy working with data, learning programming concepts,
                exploring analytical tools and building practical projects.
                My goal is to develop my technical knowledge and grow into
                a skilled data professional.
              </p>

              <div className="about-tags">
                <span>Data Analytics</span>
                <span>Problem Solving</span>
                <span>Continuous Learning</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section content-section">
          <div className="section-heading">
            <span className="eyebrow">WHAT I WORK WITH</span>

            <h2>
              Technical <span>Skills</span>
            </h2>

            <p>
              Tools and technologies I have learned and practised.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-number">
                  0{index + 1}
                </span>

                <h3>{skill.name}</h3>
                <p>{skill.type}</p>
              </div>
            ))}
          </div>

          <div className="soft-skills">
            <h3>Professional Strengths</h3>

            <div className="about-tags">
              {[
                'Problem Solving',
                'Communication',
                'Leadership',
                'Teamwork',
                'Time Management',
              ].map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE AND TRAINING SECTION */}
        <section id="experience" className="section content-section">
          <div className="section-heading">
            <span className="eyebrow">MY LEARNING JOURNEY</span>

            <h2>
              Experience & <span>Training</span>
            </h2>

            <p>
              Practical learning, internship and professional training experiences.
            </p>
          </div>

          <div className="timeline">

            {/* PYTHON INTERNSHIP */}
            <div className="timeline-item">
              <span className="timeline-dot"></span>

              <span className="timeline-date">
                June 2026
              </span>

              <h3>Python with Data Science</h3>

              <h4>
                Accent Techno Solutions · Coimbatore
              </h4>

              <p>
                Completed internship training focused on Python
                with Data Science.
              </p>
            </div>

            {/* UI/UX TRAINEESHIP */}
            <div className="timeline-item">
              <span className="timeline-dot"></span>

              <span className="timeline-date">
                7 November 2026
              </span>

              <h3>UI/UX Design Traineeship</h3>

              <h4>
                Brandit Designs · Maiyyam Design Partner
              </h4>

              <p>
                Successfully completed UI/UX Design Traineeship,
                gaining knowledge of user interface design and
                user experience principles. Received a traineeship
                certificate and Letter of Recommendation.
              </p>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section content-section">
          <div className="section-heading">
            <span className="eyebrow">MY PRACTICAL WORK</span>

            <h2>
              Featured <span>Projects</span>
            </h2>

            <p>
              Academic projects built using data and analytical tools.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map(project => (
              <article
                className="project-card"
                key={project.number}
              >
                <div className="project-top">
                  <span>{project.category}</span>
                  <strong>{project.number}</strong>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tools">
                  {project.tools}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section content-section">
          <div className="section-heading">
            <span className="eyebrow">MY ACADEMIC BACKGROUND</span>

            <h2>
              My <span>Education</span>
            </h2>

            <p>
              My academic journey so far.
            </p>
          </div>

          <div className="education-list">
            {education.map((item, index) => (
              <div
                className="education-card"
                key={item.degree}
              >
                <span className="education-number">
                  0{index + 1}
                </span>

                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>

                  <span className="education-status">
                    {item.status}
                  </span>
                </div>

                <strong>{item.period}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact-section">
          <span className="eyebrow">LET'S CONNECT</span>

          <h2>
            Have an opportunity or idea?
          </h2>

          <p>
            I'd be happy to connect, learn and explore new opportunities.
          </p>

          <a
            className="btn primary"
            href="mailto:srikalanidhi02@gmail.com"
          >
            Send Me an Email ↗
          </a>

          <a
            className="contact-link"
            href="https://www.linkedin.com/in/sri-kalanidhi-cb-226b11385"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn ↗
          </a>

          <p className="email-text">
            srikalanidhi02@gmail.com
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2026 Sri Kalanidhi CB. Built with React.
        </p>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  )
}

export default App