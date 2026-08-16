import { Check, Minus } from "lucide-react";
import nutricaoImg from "@/assets/nutricao-natflix.jpg";
import modalidadesImg from "@/assets/modalidades-natflix.jpg";
import { benefits, comparison, modalidades, problems } from "./data";

export function Problem() {
  return (
    <section id="problema" aria-labelledby="problema-titulo" className="bg-cream">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">O problema</p>
          <h2 id="problema-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            O difícil não é começar. É manter a rotina.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Na maioria dos casos, o treino não para por falta de vontade — para porque falta
            organização.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {problems.map((p) => (
            <div key={p.title} className="card-soft flex gap-4 p-6">
              <span
                aria-hidden="true"
                className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground"
              >
                <Minus className="size-3.5" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatIs() {
  return (
    <section id="plataforma" aria-labelledby="oquee-titulo" className="bg-background">
      <div className="container-page grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">O que é</p>
          <h2 id="oquee-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            O que é a Natflix Fitness, em poucas linhas
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            É uma plataforma de treinos online voltada para mulheres. Você acessa treinos para
            fazer em casa ou na academia, em diferentes modalidades e níveis, com fichas e
            agendas para organizar a semana — tudo em um só lugar, por assinatura.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {modalidades.map((m) => (
              <li
                key={m}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground"
              >
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Modalidades e recursos conforme informações publicadas no site oficial.
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
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Benefícios práticos</p>
          <h2 id="beneficios-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            O que isso muda no dia a dia
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <article key={b.title} className="card-soft flex flex-col p-6">
              <h3 className="text-base font-semibold">{b.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>
              <p className="mt-5 flex gap-2 border-t border-border pt-4 text-sm font-semibold text-primary">
                <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {b.gain}
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
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Comparação</p>
          <h2 id="comparativo-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Montar tudo por conta própria x usar uma plataforma
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="rounded-[1.75rem] border border-border bg-muted p-6">
            <h3 className="text-lg font-semibold">Por conta própria</h3>
            <ul className="mt-5 space-y-4">
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
            <ul className="mt-5 space-y-4">
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

export function Nutrition() {
  return (
    <section aria-labelledby="alimentacao-titulo" className="bg-cream">
      <div className="container-page grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
          <img
            src={nutricaoImg}
            alt="Prato equilibrado com frango grelhado, arroz integral, batata-doce assada e legumes"
            width={1200}
            height={912}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Além do treino</p>
          <h2 id="alimentacao-titulo" className="mt-5 text-2xl sm:text-3xl">
            Conteúdos de alimentação incluídos
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A plataforma informa disponibilizar cardápios e conteúdos semanais de alimentação
            com nutricionista. É um complemento útil, mas não substitui um acompanhamento
            individual.
          </p>
        </div>
      </div>
    </section>
  );
}
