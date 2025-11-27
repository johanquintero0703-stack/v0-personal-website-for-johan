import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Foto de perfil */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl" />
          <Image
            src="/johan-hero.jpg"
            alt="Johan Quintero"
            width={128}
            height={128}
            className="relative rounded-full border-4 border-primary/20 shadow-lg object-cover"
          />
        </div>

        {/* Título principal */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Johan Quintero
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Esta es mi página personal donde comparto un poco de quién soy, mis hobbies, algunos datos curiosos sobre mí
            y proyectos a futuro.
          </p>
        </div>

        {/* Botón CTA */}
        <div className="pt-4">
          <Button asChild size="lg" className="group gap-2 shadow-lg hover:shadow-xl transition-all">
            <a href="#sobre-mi">
              Conóceme
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
