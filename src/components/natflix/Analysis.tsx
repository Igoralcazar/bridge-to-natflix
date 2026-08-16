import { AlertCircle, Check, Minus, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AffiliateCta } from "./AffiliateCta";
import { faqs } from "./data";

const liked = [
  "Variedade de treinos e modalidades além da musculação",
  "Dá para treinar em casa ou na academia",
  "Fichas e agendas ajudam a organizar a semana",
  "Conteúdos complementares, como alimentação",
];

const considerations = [
  "Não substitui acompanhamento presencial individual",
  "Pode não ser ideal para quem busca algo totalmente personalizado",
  "Assinatura e condições devem ser conferidas no site oficial",
];

const forWho = [
  "Mulheres que querem praticidade no dia a dia",
  "Quem quer organizar melhor a rotina de treino",
  "Quem gosta de flexibilidade para treinar em casa ou na academia",
  "Quem busca variedade de modalidades em uma única plataforma",
];

const notForWho = [
  "Quem precisa de um treino 100% individualizado",
  "Quem prefere acompanhamento presencial com profissional",
  "Quem já tem uma rotina montada e funcionando bem",
];

export function Analysis() {
  return (
    <section id="analise" aria-labelledby="analise-titulo" className="bg-background">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Nossa análise</p>
          <h2 id="analise-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Nossa análise: a Natflix vale a pena?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Avaliamos a plataforma pensando em quem quer treinar com mais constância e menos
            complicação. Abaixo, o que gostamos, o que merece atenção e para quem ela faz
            sentido.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="card-soft p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
              <Check className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">O que gostamos</h3>
            <ul className="mt-3 space-y-2.5">
              {liked.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <AlertCircle className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">O que considerar antes de assinar</h3>
            <ul className="mt-3 space-y-2.5">
              {considerations.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <Minus className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-sage text-sage-foreground">
              <Users className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">Para quem faz sentido</h3>
            <ul className="mt-3 space-y-2.5">
              {forWho.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-muted text-foreground">
              <Minus className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">Para quem talvez não faça</h3>
            <ul className="mt-3 space-y-2.5">
              {notForWho.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <Minus className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nosso veredito
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground">
            Se você procura uma plataforma online com variedade de treinos e uma forma mais
            prática de organizar sua rotina, a Natflix é uma opção que vale a pena conhecer.
            Antes de assinar, confira planos e condições atualizados no site oficial.
          </p>
          <div className="mt-6">
            <AffiliateCta id="cta-natflix-analise" size="default">
              Conhecer a Natflix no site oficial
            </AffiliateCta>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-final-titulo" className="bg-background">
      <div className="container-page py-16 md:py-24">
        <div className="rounded-[2rem] bg-primary px-6 py-12 text-center md:px-12 md:py-16">
          <h2
            id="cta-final-titulo"
            className="mx-auto max-w-2xl text-2xl text-primary-foreground sm:text-3xl md:text-4xl"
          >
            Ficou convencida? Veja a Natflix por dentro
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
            Confira planos, modalidades e condições atualizados diretamente no site oficial.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <AffiliateCta
              id="cta-natflix-final"
              variant="ctaSoft"
              className="w-full sm:w-auto"
            >
              Conhecer a Natflix no site oficial
            </AffiliateCta>
            <p className="mt-4 text-xs text-primary-foreground/75">
              Página independente · usamos link de afiliado, sem custo extra para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-titulo" className="bg-cream">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 id="faq-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Perguntas que costumam surgir antes de assinar
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-8 max-w-3xl">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
