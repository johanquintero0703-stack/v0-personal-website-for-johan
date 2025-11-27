import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    name: "VigiTec",
    description:
      "Es un prototipo de app educativa para la tecnovigilancia de dispositivos médicos en Colombia. La aplicación centraliza la normativa nacional, recursos formativos, casos clínicos simulados y apoya a estudiantes de Ingeniería Biomédica y áreas de la salud en la identificación y reporte de incidentes y eventos adversos en el portal oficial del INVIMA (sin sustituirlo).",
    logo: "/logo-vigitec.png",
  },
  {
    name: "OrthoGlove PLA",
    description:
      "Es una órtesis de mano impresa en 3D en PLA, con forma de guante que proporciona soporte y estabilidad a la mano y muñeca, utilizada en rehabilitación y asistencia funcional.",
    logo: "/logo-orthoglove-pla.png",
  },
  {
    name: "JQ Sentinel Trader",
    description:
      "El sistema funciona con MetaTrader 5 y analiza gráficos de velas en múltiples marcos temporales y diversos activos digitales y criptomonedas. Utiliza indicadores técnicos, noticias y el sentimiento del mercado para predecir con gran precisión si el precio subirá o bajará.",
    logo: "/logo-jq-sentinel-trader.png",
  },
  {
    name: "JQ Freedom Studio",
    description:
      "Esta marca representa a un freelancer independiente que trabaja a distancia a través de plataformas como Workana, valorando la libertad, la flexibilidad, la autonomía y la capacidad de crear su propio camino, más que el dinero.",
    logo: "/logo-jq-freedom-studio.png",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-balance">Proyectos a futuro</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="group hover:shadow-lg transition-all border-border/50">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-background flex items-center justify-center shrink-0 border border-border/50">
                    <Image
                      src={project.logo || "/placeholder.svg"}
                      alt={`Logo de ${project.name}`}
                      width={80}
                      height={80}
                      className="object-contain p-2"
                    />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
