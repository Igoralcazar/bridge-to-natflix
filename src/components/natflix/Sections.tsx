import {
  Apple,
  CalendarCheck,
  Check,
  ClipboardList,
  Dumbbell,
  Flower2,
  Footprints,
  Gauge,
  HeartPulse,
  Home,
  Layers,
  MessageCircleHeart,
  Minus,
  Signal,
  Timer,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import nutricaoImg from "@/assets/nutricao-natflix.jpg";
import modalidadesImg from "@/assets/modalidades-natflix.jpg";
import { AffiliateCta } from "./AffiliateCta";
import { benefits, comparison, problems, stats } from "./data";

const benefitIcons: LucideIcon[] = [
  Home,
  Signal,
  ClipboardList,
  CalendarCheck,
  Apple,
  MessageCircleHeart,
];

const modalidadeIcons: { name: string; icon: LucideIcon }[] = [
  { name: "Musculação", icon: Dumbbell },
  { name: "Pilates", icon: Flower2 },
  { name: "Spinning", icon: Gauge },
  { name: "Corrida", icon: Footprints },
  { name: "Yoga", icon: HeartPulse },
  { name: "Alongamento", icon: Layers },
  { name: "Treinos em casa", icon: Home },
  { name: "Treinos Rapidex", icon: Timer },
  { name: "CrossNatflix", icon: Zap },
];

export function Stats() {
  return (
    <section aria-labelledby="numeros-titulo" className="border-y border-border bg-background">
      <div className="container-page py-12 md:py-16">
        <h2 id="numeros-titulo" className="sr-only">
          Números publicados pela Natflix Fitness
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card-soft p-6">
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-primary">
                {s.value}
              </p>
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {s.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Informações publicadas pela Natflix Fitness em seu site oficial. Não realizamos
          verificação independente desses números.
        </p>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section aria-labelledby="problema-titulo" className="bg-cream">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">O ponto de partida</p>
          <h2 id="problema-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            O difícil nem sempre é começar. É conseguir manter uma rotina.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Entre trabalho, casa e compromissos, treinar exige mais do que vontade: exige
            decidir o que fazer, encontrar os treinos, encaixar horários e manter o ritmo
            quando a semana aperta. Quando cada parte disso está em um lugar diferente, a
            rotina fica frágil.
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

        <p className="mt-10 max-w-xl font-[family-name:var(--font-display)] text-xl text-foreground md:text-2xl">
          É justamente aqui que uma plataforma organizada pode fazer diferença.
        </p>
      </div>
    </section>
  );
}

export function Solution() {
  return (
    <section id="plataforma" aria-labelledby="solucao-titulo" className="bg-background">
      <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">A plataforma</p>
          <h2 id="solucao-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Muito além de treinos.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A Natflix reúne diferentes formas de se movimentar, organizar os treinos e cuidar
            da rotina em uma única plataforma. De acordo com o site oficial, a plataforma
            oferece treinos em casa e na academia, opções do iniciante ao avançado e
            modalidades como Pilates, spinning, corrida, yoga, alongamento, Rapidex e
            CrossNatflix.
          </p>
          <div className="mt-8">
            <AffiliateCta id="cta-natflix-plataforma" size="default">
              Explorar a Natflix
            </AffiliateCta>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
          <img
            src={modalidadesImg}
            alt="Mulher praticando Pilates em uma sala clara com luz natural"
            width={1000}
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
    <section aria-labelledby="beneficios-titulo" className="bg-cream">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Benefícios na prática</p>
          <h2 id="beneficios-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Tudo para deixar sua rotina mais organizada.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = benefitIcons[i] ?? Check;
            return (
              <article key={b.title} className="card-soft flex flex-col p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-sage text-sage-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
                <p className="mt-5 border-t border-border pt-4 text-sm font-semibold text-primary">
                  {b.gain}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Comparison() {
  return (
    <section aria-labelledby="comparativo-titulo" className="bg-background">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Comparativo</p>
          <h2 id="comparativo-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Quando tudo depende de você, organizar a rotina pode ficar mais difícil.
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
          A comparação acima descreve conveniência e organização; não significa que treinar
          por conta própria seja inadequado ou que a Natflix seja a melhor opção para todas as
          pessoas.
        </p>
      </div>
    </section>
  );
}

export function Modalities() {
  return (
    <section id="modalidades" aria-labelledby="modalidades-titulo" className="bg-cream">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Variedade</p>
          <h2 id="modalidades-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Encontre o tipo de treino que combina com você.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Modalidades apresentadas no site oficial da Natflix Fitness.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {modalidadeIcons.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="card-soft flex items-center gap-3 p-5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Steps() {
  const steps = [
    { n: "01", title: "Escolha", text: "Explore as opções disponíveis na plataforma." },
    { n: "02", title: "Organize", text: "Use fichas e agendas para organizar seus treinos." },
    {
      n: "03",
      title: "Evolua",
      text: "Mantenha uma rotina consistente e acompanhe sua jornada.",
    },
  ];

  return (
    <section aria-labelledby="rotina-titulo" className="bg-background">
      <div className="container-page py-16 md:py-24">
        <h2
          id="rotina-titulo"
          className="max-w-2xl text-2xl sm:text-3xl md:text-4xl"
        >
          Sua rotina. Seu ritmo. Seu treino.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border-t-2 border-primary/25 pt-6">
              <p className="font-[family-name:var(--font-display)] text-4xl text-primary/40">
                {s.n}
              </p>
              <h3 className="mt-3 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Nutrition() {
  return (
    <section aria-labelledby="alimentacao-titulo" className="bg-cream">
      <div className="container-page grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
          <img
            src={nutricaoImg}
            alt="Bowl com vegetais, frutas frescas e um copo de água sobre bancada clara"
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Alimentação e bem-estar</p>
          <h2 id="alimentacao-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Conteúdo para cuidar da rotina por completo.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Além dos treinos, a Natflix informa que disponibiliza conteúdos de alimentação,
            incluindo vídeos semanais com nutricionista e cardápios organizados por objetivo e
            calorias.
          </p>
          <p className="mt-6 rounded-2xl bg-card p-4 text-xs leading-relaxed text-muted-foreground">
            Conteúdo informativo. Necessidades nutricionais individuais devem ser avaliadas por
            um profissional habilitado.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <section aria-labelledby="depoimentos-titulo" className="bg-background">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Experiências</p>
          <h2 id="depoimentos-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Histórias de quem escolheu se priorizar.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A Natflix Fitness publica depoimentos de alunas em seu site oficial. Como esta é
            uma página independente de afiliado, optamos por não reproduzir nem resumir
            relatos de terceiros aqui: assim você lê os depoimentos na fonte original, sem
            intermediários.
          </p>
        </div>

        <div className="mt-8 card-soft max-w-2xl p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Nossa recomendação é simples: leia os depoimentos publicados pela própria Natflix,
            observe se as rotinas descritas se parecem com a sua e avalie a plataforma com suas
            próprias expectativas. Depoimentos são experiências individuais e não representam
            garantia de resultado.
          </p>
          <div className="mt-6">
            <AffiliateCta id="cta-natflix-depoimentos" variant="ctaOutline" size="default">
              Ver depoimentos no site oficial
            </AffiliateCta>
          </div>
        </div>
      </div>
    </section>
  );
}
