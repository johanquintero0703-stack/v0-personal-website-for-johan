import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const hobbies = [
  {
    image: "/jugar-ajedrez.png",
    title: "Jugar ajedrez",
    description:
      "Me apasiona encontrar movimientos difíciles y combinaciones brillantes que me ayuden a ganar partidas contra rivales exigentes.",
  },
  {
    image: "/trading.png",
    title: "Trading",
    description:
      "Me gusta analizar el movimiento de los precios de diferentes activos digitales usando análisis técnico y fundamental, con el objetivo de obtener ganancias a partir de inversiones bien pensadas.",
  },
  {
    image: "/practicar-ingles-ia.png",
    title: "Practicar inglés con IA",
    description:
      "Disfruto tener conversaciones en inglés con inteligencia artificial para sonar cada vez más natural y fluido al hablar.",
  },
  {
    image: "/escuchar-musica.png",
    title: "Escuchar música",
    description:
      "Me relaja escuchar música electrónica, reggaetón o salsa mientras hago mis deberes o incluso cuando me estoy duchando.",
  },
  {
    image: "/montar-bicicleta.png",
    title: "Montar bicicleta por la ciudad",
    description: "Salir a montar bici me ayuda a despejar la mente, bajar el estrés y mantenerme en movimiento.",
  },
]

export function HobbiesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-balance">Cosas que disfruto hacer</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => (
            <Card key={hobby.title} className="group hover:shadow-lg transition-all border-border/50">
              <CardHeader>
                <div className="w-full h-56 relative rounded-lg overflow-hidden mb-4 bg-muted/50">
                  <Image
                    src={hobby.image || "/placeholder.svg"}
                    alt={hobby.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                  />
                </div>
                <CardTitle className="text-xl">{hobby.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{hobby.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
