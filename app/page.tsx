import { About } from "../components/portfolio/About";
import { ChatSection } from "../components/portfolio/ChatSection";
import { Contact } from "../components/portfolio/Contact";
import { Experience } from "../components/portfolio/Experience";
import { Education } from "../components/portfolio/Education";
import { Footer } from "../components/portfolio/Footer";
import { Hero } from "../components/portfolio/Hero";
import { Navbar } from "../components/portfolio/Navbar";
import { Projects } from "../components/portfolio/Projects";
import { Skills } from "../components/portfolio/Skills";
import { PortfolioChatbot } from "../components/chat/PortfolioChatbot";
import { PortfolioScrollAnimations } from "../components/portfolio/PortfolioScrollAnimations";

export default function PortfolioPage() {
  return (
    <div className="grid-bg relative min-h-screen">
      <PortfolioScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ChatSection />
        <Contact />
      </main>
      <Footer />
      <PortfolioChatbot variant="floating" />
    </div>
  );
}
