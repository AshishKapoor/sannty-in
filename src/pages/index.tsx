import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

function HomePage(): ReactNode {
  return (
    <div style={{ minHeight: '50vh' }} className="bg-background">
      {/* Main Content */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left Column - Profile */}
          <div style={{ minWidth: '300px', position: 'sticky', top: '4rem' }}>
            <div style={{ position: 'relative', width: '256px', height: '256px', margin: '0 auto 2rem' }}>
              <img
                src="/img/dp.jpeg"
                alt="Ashish Kapoor"
                style={{ borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>


            <div style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Ashish Kapoor
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Software Consultant <br />
                an Indian Problem Solver & Vibe Code Cleaning Expert
              </p>
              <a
                href="https://netix.ai/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#4B5563', marginBottom: '2rem', display: 'block', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                NETIX AI
              </a>
              {/* Social Links */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start' }}>
                <a href="mailto:swiftobjc@gmail.com" aria-label="Email" style={{ display: 'inline-flex', color: '#4B5563' }}>
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/ashishkapoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{ display: 'inline-flex', color: '#4B5563' }}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashshkapoor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ display: 'inline-flex', color: '#4B5563' }}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - About Content */}

          <div>
            <div>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '2rem' }}>
                About
              </h2>


              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#4B5563', lineHeight: '1.75' }}>
                <p>
                  I am a tech enthusiast with a focus on developing and
                  maintaining software. I am committed to delivering reliable
                  solutions with a customer-first approach. In my free time, I
                  am an open-source contributor and a YouTuber, where I share my
                  knowledge and passion for technology.
                </p>


                <p>
                  I specialize in{" "}
                  <span style={{ color: '#3B82F6', fontWeight: '500' }}>TypeScript</span>,{" "}
                  <span style={{ color: '#3B82F6', fontWeight: '500' }}>REST</span>,{" "}
                  <span style={{ color: '#3B82F6', fontWeight: '500' }}>
                    Web Performance
                  </span>
                  , and{" "}
                  <span style={{ color: '#3B82F6', fontWeight: '500' }}>
                    Mobile Applications
                  </span>
                  , and I love making complex computer science concepts
                  accessible to anyone interested in technology through my
                  YouTube videos.
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
              <div style={{ marginTop: '3rem', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #E5E7EB' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                  Latest Thoughts
                </h4>
                <p style={{ color: '#4B5563', marginBottom: '1rem' }}>
                  I regularly share insights about technology, software
                  development, and industry trends on my blog.
                </p>
                <a
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center', backgroundColor: '#4F46E5', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', textDecoration: 'none' }}
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
    <Layout
      title={`${siteConfig.title}`}
      description="In my head">
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
