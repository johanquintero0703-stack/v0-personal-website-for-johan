import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { CuriousFactsSection } from "@/components/curious-facts-section"
import { ProjectsSection } from "@/components/projects-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <HobbiesSection />
      <CuriousFactsSection />
      <ProjectsSection />
    </main>
  )
}
