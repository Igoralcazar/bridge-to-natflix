import { Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-natflix.jpg";
import { Button } from "@/components/ui/button";
import { AFFILIATE_URL } from "./data";

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
            Análise independente
          </p>

          <h1 className="mt-5 text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
            Natflix Fitness vale a pena? Nossa análise antes de você assinar
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Analisamos a proposta, os principais recursos, os pontos positivos e as limitações
            para ajudar você a decidir se a Natflix combina com sua rotina.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3">
            <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
              <a href="#analise" className="no-underline">
                Ver nossa análise
              </a>
            </Button>

            <a
              id="cta-natflix-hero"
              data-cta="cta-natflix-hero"
              href={AFFILIATE_URL}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="cta-natflix text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
            >
              Já decidiu? Ver Natflix no site oficial →
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Leitura rápida · análise independente · alguns links são de afiliado.
          </p>
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
              Resumo da análise
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Boa opção para quem busca variedade, flexibilidade e mais organização na rotina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
