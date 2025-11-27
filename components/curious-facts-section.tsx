import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const facts = [
  {
    emoji: "♟️",
    category: "Ajedrez",
    fact: "Puedo pasar horas analizando una sola partida de ajedrez buscando una combinación brillante... aunque al final nadie más la vea.",
  },
  {
    emoji: "📈",
    category: "Trading",
    fact: "A veces me emociono más por una buena entrada en trading que por un gol en un partido de fútbol.",
  },
  {
    emoji: "🔬",
    category: "Ingeniería + vida diaria",
    fact: "Estudio Ingeniería Biomédica, pero también disfruto pensar en cómo aplicar la ciencia a cosas simples del día a día.",
  },
  {
    emoji: "🤖",
    category: "Inglés con IA",
    fact: "Practico conversaciones en inglés con inteligencia artificial por gusto, aunque no haya nadie más escuchando.",
  },
  {
    emoji: "🎵",
    category: "Música en todas partes",
    fact: "Casi siempre tengo música electrónica, reggaetón o salsa de fondo... incluso cuando estoy haciendo deberes o me estoy duchando.",
  },
  {
    emoji: "🚴",
    category: "Bici como terapia",
    fact: "Salir a montar bicicleta por la ciudad es mi forma favorita de despejar la mente y bajar el estrés.",
  },
  {
    emoji: "🌴",
    category: "Origen",
    fact: "Nací en 2003 en Palmira, Valle del Cauca, y aunque he cambiado y crecido, sigo llevando mucho de mi ciudad en mi forma de ser.",
  },
  {
    emoji: "💭",
    category: "Curiosidad",
    fact: "Me encanta hacerme preguntas raras sobre cosas que la mayoría da por hechas... aunque a veces no tengan una respuesta rápida.",
  },
]

export function CuriousFactsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-balance">Datos curiosos sobre mí</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {facts.map((item, index) => (
            <Card key={index} className="group hover:shadow-md transition-all border-border/50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="text-4xl shrink-0 group-hover:scale-110 transition-transform">{item.emoji}</div>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">{item.fact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
