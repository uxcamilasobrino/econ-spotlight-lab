import { Download, Eye, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/src-hero.jpg";
import imgMillennials from "@/assets/study-millennials-peru.jpg";
import imgMarcas from "@/assets/study-marcas-blancas.jpg";
import imgPet from "@/assets/study-pet-money.jpg";
import imgBarometro from "@/assets/study-barometro-talento.jpg";
import imgDespensa from "@/assets/study-despensa-inflacion.jpg";
import imgSilver from "@/assets/study-silver-economy.jpg";

type Study = {
  title: string;
  authors: string;
  image: string;
  pdf?: string;
  category: string;
};

const studies: Study[] = [
  {
    title: "Las motivaciones laborales de Millennials y Generación Z. Foco en Perú",
    authors:
      "Paloma Martínez-Hague (PUC); Miriam Diez Piñol, Esther González Arnedo y Carina Mellit Quartucci (EAE Business School)",
    image: imgMillennials,
    pdf: "/studies/EAE_SRC_Talento_joven_Peru.pdf",
    category: "Talento · LATAM",
  },
  {
    title:
      "Marcas Blancas: símbolo del consumo inteligente. El valor de gastar menos sin renunciar a la calidad",
    authors: "Alejandro Alegret y Sílvia Xancó",
    image: imgMarcas,
    category: "Consumo",
  },
  {
    title: "Pet-money. La economía de las mascotas y su impacto en el hogar español",
    authors: "Paulo Sartorato",
    image: imgPet,
    category: "Economía doméstica",
  },
  {
    title: "X Barómetro DCH. Gestión del Talento en España, Portugal y Latinoamérica 2025/26",
    authors: "Sergio Carol",
    image: imgBarometro,
    category: "Talento · RR.HH.",
  },
  {
    title: "La despensa a presión. Radiografía de la inflación alimentaria en España (2015-2025)",
    authors: "Samer Ajour El Zein",
    image: imgDespensa,
    category: "Macroeconomía",
  },
  {
    title: "Silver Economy y deporte: Una oportunidad social, económica y de salud",
    authors: "Ángel Moreno Inocencio",
    image: imgSilver,
    category: "Demografía",
  },
];

const StrategicResearchCenter = () => {
  const [viewing, setViewing] = useState<Study | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Strategic Research Center"
          width={1920}
          height={600}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <span className="inline-block rounded-full bg-brand px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-foreground">
            EAE Business School
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-background md:text-6xl">
            Strategic Research Center
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-background/90 md:text-lg">
            El Strategic Research Center (SRC) publica mensualmente estudios relacionados
            con un sector de la economía o con cualquier otro aspecto macroeconómico,
            demográfico o sociológico de España o LATAM. Los estudios son reproducidos por
            un gran número de medios de comunicación nacional e internacional y tomados
            como referencia por empresas y organizaciones.
          </p>
        </div>
      </section>

      {/* Studies */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Últimos estudios
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Publicaciones recientes</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Investigación rigurosa, accesible y abierta.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {s.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug text-foreground">
                  {s.title}
                </h3>
                <div className="mt-4 rounded-lg border-l-4 border-brand bg-brand-soft px-4 py-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand">
                    Autoría
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{s.authors}</p>
                </div>
                <div className="mt-6 flex flex-1 items-end gap-2">
                  {s.pdf ? (
                    <>
                      <Button
                        variant="default"
                        className="flex-1 bg-brand text-brand-foreground hover:bg-brand/90"
                        onClick={() => setViewing(s)}
                      >
                        <Eye className="mr-2 h-4 w-4" /> Ver online
                      </Button>
                      <Button asChild variant="outline" size="icon" aria-label="Descargar PDF">
                        <a href={s.pdf} download>
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" disabled className="flex-1">
                      Próximamente
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {viewing && viewing.pdf && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-foreground/90 backdrop-blur"
          onClick={() => setViewing(null)}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 text-background md:px-8">
            <p className="line-clamp-1 text-sm font-medium">{viewing.title}</p>
            <div className="flex items-center gap-2">
              <Button
                asChild
                size="sm"
                variant="secondary"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={viewing.pdf} download>
                  <Download className="mr-2 h-4 w-4" /> Descargar
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-background hover:bg-background/10 hover:text-background"
                onClick={() => setViewing(null)}
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex-1 px-2 pb-4 md:px-8" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={viewing.pdf}
              title={viewing.title}
              className="h-full w-full rounded-lg bg-background"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default StrategicResearchCenter;
