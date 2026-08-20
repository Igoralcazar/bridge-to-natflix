import { Check, Minus } from "lucide-react";
import modalidadesImg from "@/assets/modalidades-natflix.jpg";
import { benefits, comparison } from "./data";

export function Problem() {
  return (
    <section id="problema" aria-labelledby="problema-titulo" className="bg-cream">
      <div className="container-page py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="eyebrow">O problema</p>
          <h2 id="problema-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            O difícil nem sempre é começar. É manter uma rotina.
          </h2>
         <p className="mt-5 text-base leading-relaxed text-muted-foreground">
  Entre trabalho, compromissos e o dia a dia, decidir o que treinar e organizar a
  semana pode virar mais uma tarefa. Sem uma rotina clara, manter a consistência pode
  ficar mais difícil.
</p>

<p className="mt-4 text-base font-medium text-foreground">
  É aí que uma plataforma de treinos pode ajudar.
</p>
        </div>
      </div>
    </section>
  );
}

export function WhatIs() {
  return (
    <section id="plataforma" aria-labelledby="oquee-titulo" className="bg-background">
      <div className="container-page grid gap-8 py-14 md:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow">Contexto rápido</p>
          <h2 id="oquee-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Natflix em 20 segundos
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
  A Natflix é uma plataforma fitness voltada para mulheres que reúne treinos para casa
  e academia, diferentes modalidades e recursos para organizar a rotina. A proposta é
  concentrar variedade e praticidade em um só lugar.
</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
             Entre as opções estão musculação, Pilates, yoga, corrida e outras, além de oferecer conteúdos relacionados à alimentação.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
  Recursos conforme informações publicadas no site oficial.
</p>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
          <img
            src={modalidadesImg}
            alt="Mulher treinando na academia segurando a alça de um aparelho de cabo"
            width={1008}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section id="beneficios" aria-labelledby="beneficios-titulo" className="bg-cream">
      <div className="container-page py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Na prática</p>
          <h2 id="beneficios-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            O que isso muda no dia a dia
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {benefits.map((b) => (
            <article key={b.title} className="card-soft flex flex-col p-6">
              <Check className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Comparison() {
  return (
    <section id="comparacao" aria-labelledby="comparativo-titulo" className="bg-background">
      <div className="container-page py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Comparação</p>
          <h2 id="comparativo-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
           O que muda ao usar uma plataforma de treino?
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="rounded-[1.75rem] border border-border bg-muted p-6">
           <h3 className="text-lg font-semibold">Organizando por conta própria</h3>
            <ul className="mt-4 space-y-3">
              {comparison.map((row) => (
                <li key={row.alone} className="flex gap-3 text-sm text-muted-foreground">
                  <Minus className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {row.alone}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-primary/20 bg-card p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-semibold text-primary">
              Com uma plataforma como a Natflix
            </h3>
            <ul className="mt-4 space-y-3">
              {comparison.map((row) => (
                <li key={row.platform} className="flex gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {row.platform}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          A comparação trata de praticidade e organização. Treinar por conta própria continua
          sendo uma opção válida.
        </p>
      </div>
    </section>
  );
}
