import { AlertCircle, Check, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AffiliateCta } from "./AffiliateCta";
import { faqs } from "./data";

export function Analysis() {
  const positives = [
    "Variedade de modalidades além da musculação",
    "Mais de 2.600 conteúdos publicados, segundo a Natflix",
    "Treinos para fazer em casa e na academia",
    "Fichas de treino editáveis para registrar cargas",
    "Agendas de treino para organizar a semana",
    "Conteúdos relacionados à alimentação",
    "Suporte direto da equipe, segundo a Natflix",
  ];

  const considerations = [
    "É uma plataforma online, e não acompanhamento individual presencial.",
    "Quem busca orientação médica, nutricional ou de treinamento altamente personalizada pode precisar de um profissional habilitado além de uma plataforma online.",
    "Os planos têm renovação automática conforme o período escolhido, segundo o site oficial.",
    "Preços e condições podem ser alterados pelo fornecedor.",
  ];

  return (
    <section id="analise" aria-labelledby="analise-titulo" className="bg-background">
      <div className="container-page py-16 md:py-24">
        <div className="rounded-[2rem] border border-border bg-cream p-6 md:p-12">
          <p className="eyebrow">Opinião independente</p>
          <h2 id="analise-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Nossa análise: a Natflix vale a pena?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A resposta depende do que você procura em uma plataforma fitness. Esta é a nossa
            avaliação como página independente de afiliado, baseada nas informações publicadas
            no site oficial — não é uma declaração da Natflix.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="card-soft p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-sage text-sage-foreground">
                <Users className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Para quem faz sentido</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tende a ser relevante para mulheres que querem variedade de treinos, opções
                para casa e para a academia, diferentes modalidades e ferramentas para
                organizar uma rotina recorrente em uma única plataforma — especialmente quem
                hoje perde tempo juntando treinos de fontes diferentes.
              </p>
            </div>

            <div className="card-soft p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <Check className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Principais pontos positivos</h3>
              <ul className="mt-3 space-y-2.5">
                {positives.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {p}
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
                {considerations.map((c) => (
                  <li key={c} className="text-sm leading-relaxed text-muted-foreground">
                    · {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-primary/20 bg-card p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Nossa recomendação
            </p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground">
              Se você procura uma plataforma online com variedade de treinos, diferentes
              modalidades e ferramentas para organizar sua rotina, a Natflix é uma opção que
              vale a pena conhecer. Antes de assinar, recomendamos conferir os planos,
              condições e recursos disponíveis diretamente no site oficial.
            </p>
            <div className="mt-6">
              <AffiliateCta id="cta-natflix-analise" size="default">
                Ver planos no site oficial
              </AffiliateCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Transparency() {
  const items = [
    "O site oficial informa que as assinaturas são renovadas automaticamente de acordo com o plano escolhido.",
    "O site oficial informa que a primeira assinatura conta com prazo de reembolso de 7 dias, sujeito aos termos apresentados.",
    "Para procedimentos completos de cancelamento e reembolso, consulte o site oficial da Natflix Fitness e a Hotmart.",
  ];

  return (
    <section aria-labelledby="transparencia-titulo" className="bg-cream">
      <div className="container-page py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Transparência</p>
          <h2 id="transparencia-titulo" className="mt-5 text-2xl sm:text-3xl">
            Antes de assinar, confira as condições.
          </h2>
          <ul className="mt-6 space-y-3">
            {items.map((i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            As informações acima são um resumo do que consta no site oficial e não constituem
            orientação jurídica.
          </p>
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
            Quer conhecer a Natflix por dentro?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
            Veja todos os detalhes da plataforma, conteúdos, modalidades, planos e condições
            diretamente no site oficial.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <AffiliateCta
              id="cta-natflix-final"
              variant="ctaSoft"
              className="w-full sm:w-auto"
            >
              Conhecer a Natflix Fitness
            </AffiliateCta>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Você será direcionada para o site oficial da Natflix Fitness.
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
            Perguntas que costumam surgir antes de assinar.
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
