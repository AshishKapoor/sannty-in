import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import styles from "./index.module.css";

function HomePage(): ReactNode {
  return (
    <div className={styles.container}>
      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.gridLayout}>
          {/* Left Column - Profile */}
          <div className={styles.profileColumn}>
            <div className={styles.profileImage}>
              <img src="/img/dp.jpeg" alt="Ashish Kapoor" />
            </div>

            <div className={styles.profileInfo}>
              <h2 className={styles.profileName}>Ashish Kapoor</h2>
              <p className={styles.profileTitle}>
                Software Consultant <br />
                an Indian Problem Solver & Vibe Code Cleaning Expert
              </p>
              <a
                href="https://netix.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.companyLink}
              >
                NETIX AI
              </a>
              {/* Social Links */}
              <div className={styles.socialLinks}>
                <a href="mailto:swiftobjc@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/ashishkapoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashshkapoor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}

          <div className={styles.contentColumn}>
            <div>
              <h2 className={styles.aboutTitle}>About</h2>

              <div className={styles.aboutContent}>
                <p>
                  I am a tech enthusiast with a focus on developing and
                  maintaining software. I am committed to delivering reliable
                  solutions with a customer-first approach. In my free time, I
                  am an open-source contributor and a YouTuber, where I share my
                  knowledge and passion for technology.
                </p>

                <p>
                  I specialize in{" "}
                  <span className={styles.highlight}>TypeScript</span>,{" "}
                  <span className={styles.highlight}>REST</span>,{" "}
                  <span className={styles.highlight}>Web Performance</span>, and{" "}
                  <span className={styles.highlight}>Mobile Applications</span>,
                  and I love making complex computer science concepts accessible
                  to anyone interested in technology through my YouTube videos.
                </p>

                <p>
                  I have been a full-time software engineer since 2014, and I
                  have had the opportunity to work with some incredible startups
                  ranging from pre-seed to Series A. This has been an amazing
                  learning experience for me, both in terms of technology and
                  business. Since 2022, I have been focusing more on back-end
                  development, site reliability, and system architecture to step
                  out of my coding comfort zone.
                </p>

                <p>
                  During my free time, I challenge myself to be more creative
                  and improve my technical skills by writing in-depth product
                  requirement documents to enhance existing
                  technologies/products.
                </p>
              </div>

              {/* Latest Thoughts Section */}
              <div className={styles.latestThoughts}>
                <h4 className={styles.latestThoughtsTitle}>Latest Thoughts</h4>
                <p className={styles.latestThoughtsText}>
                  I regularly share insights about technology, software
                  development, and industry trends on my blog.
                </p>
                <a
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.blogButton}
                >
                  Visit My Blog
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="In my head">
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
