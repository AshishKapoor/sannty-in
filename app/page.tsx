import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="font-semibold text-foreground">Ashish Kapoor</h1>
                <p className="text-sm text-muted-foreground">Software Consultant</p>
              </div>
            </div>
            <Button asChild variant="outline" size="sm">
              <a
                href="https://blog.sannty.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Blog
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Profile */}
          <div className="lg:col-span-4">
            <div className="sticky top-16">
              <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
                <Image
                  src="/software-engineer-headshot.png"
                  alt="Ashish Kapoor"
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-2 text-balance">Ashish Kapoor</h2>
                <p className="text-xl text-muted-foreground mb-6">Software Consultant</p>
                <p className="text-muted-foreground mb-8">Ex. Rill Data, Quid Inc</p>

                {/* Social Links */}
                <div className="flex gap-4 justify-center lg:justify-start">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="mailto:your-email@example.com" aria-label="Email">
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold mb-6 text-foreground">About</h3>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I am a tech enthusiast with a focus on developing and maintaining software. I am committed to
                  delivering reliable solutions with a customer-first approach. In my free time, I am an open-source
                  contributor and a YouTuber, where I share my knowledge and passion for technology.
                </p>

                <p>
                  I specialize in <span className="text-primary font-medium">TypeScript</span>,{" "}
                  <span className="text-primary font-medium">REST</span>,{" "}
                  <span className="text-primary font-medium">Web Performance</span>, and{" "}
                  <span className="text-primary font-medium">Mobile Applications</span>, and I love making complex
                  computer science concepts accessible to anyone interested in technology through my YouTube videos.
                </p>

                <p>
                  I have been a full-time software engineer since 2014, and I have had the opportunity to work with some
                  incredible startups ranging from pre-seed to Series A. This has been an amazing learning experience
                  for me, both in terms of technology and business. Since 2022, I have been focusing more on back-end
                  development, site reliability, and system architecture to step out of my coding comfort zone.
                </p>

                <p>
                  During my free time, I challenge myself to be more creative and improve my technical skills by writing
                  in-depth product requirement documents to enhance existing technologies/products.
                </p>
              </div>

              {/* Blog Link Section */}
              <div className="mt-12 p-6 bg-card rounded-lg border border-border">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Latest Thoughts</h4>
                <p className="text-muted-foreground mb-4">
                  I regularly share insights about technology, software development, and industry trends on my blog.
                </p>
                <Button asChild className="w-full sm:w-auto">
                  <a
                    href="https://blog.sannty.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Visit My Blog
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Ashish Kapoor</span>
              <span>•</span>
              <span>© 2025</span>
              <span>•</span>
              <span>Sannty</span>
            </div>
            <Button variant="link" size="sm" asChild>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                My Resume
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
