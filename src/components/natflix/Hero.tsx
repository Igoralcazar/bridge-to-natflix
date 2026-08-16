import { Info, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-natflix.jpg";
import { AffiliateCta } from "./AffiliateCta";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sage/60 blur-3xl"
      />
      <div className="container-page relative grid items-center gap-10 py-12 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="rise">
          <p className="eyebrow">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Página independente de afiliado
          </p>
          <h1 className="mt-5 text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
            Uma plataforma fitness completa para mulheres que querem cuidar do corpo e da
            rotina.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Treinos em casa ou na academia, diferentes modalidades, organização da rotina e
            conteúdos para acompanhar sua jornada — tudo em um só lugar.
          </p>

          <div className="mt-8">
            <AffiliateCta id="cta-natflix-hero" className="w-full sm:w-auto">
              Conheça a Natflix Fitness
            </AffiliateCta>
            <p className="mt-3 text-sm text-muted-foreground">
              Você será direcionada para o site oficial da Natflix.
            </p>
            <p className="mt-4 flex max-w-md items-start gap-2 rounded-2xl bg-card/70 p-3 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              Página independente de afiliado. Podemos receber uma comissão se você assinar
              através do nosso link.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
            <img
              src={heroImg}
              alt="Mulher treinando com halteres em um estúdio claro e moderno"
              width={1200}
              height={1408}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="card-soft absolute -bottom-5 left-4 max-w-[15rem] p-4 md:left-auto md:-left-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Em um só lugar
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Treinos, modalidades, fichas e agendas para organizar a semana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
