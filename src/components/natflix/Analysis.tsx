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
  "Variedade de modalidades em uma única plataforma",
  "Opções para treinar em casa ou na academia",
  "Recursos que ajudam a organizar a rotina",
  "Conteúdos complementares além dos treinos",
];

const considerations = [
  "A experiência é principalmente online",
  "Não substitui acompanhamento individualizado quando ele é necessário",
  "Os planos seguem as condições de renovação do site oficial",
  "Preços, recursos e condições podem mudar",
];

const forWho = [
  "Mais praticidade para organizar os treinos",
  "Flexibilidade entre casa e academia",
  "Diferentes modalidades disponíveis",
  "Uma rotina fitness mais organizada",
];

const notForWho = [
  "Acompanhamento totalmente personalizado",
  "Supervisão presencial durante os treinos",
  "Orientação individualizada de um profissional",
];

export function Analysis() {
  return (
    <section id="analise" aria-labelledby="analise-titulo" className="bg-cream">
      <div className="container-page py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Nossa análise</p>
          <h2 id="analise-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Nossa análise: a Natflix vale a pena?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
  Na nossa avaliação, o principal atrativo da Natflix está em reunir variedade,
  flexibilidade e organização. A questão é entender se esse formato combina com a
  maneira como você prefere treinar.
</p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
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
            <h3 className="mt-5 text-lg font-semibold">O que considerar</h3>
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
            <p className="mt-3 text-sm text-muted-foreground">Mulheres que buscam:</p>
            <ul className="mt-2 space-y-2.5">
              {forWho.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-red-50 text-red-500">
              <X className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">Para quem talvez não faça</h3>
            <p className="mt-3 text-sm text-muted-foreground">Quem procura:</p>
            <ul className="mt-2 space-y-2.5">
              {notForWho.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <X className="mt-0.5 size-4 shrink-0 text-red-500" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Resumo da nossa avaliação
          </p>
          <ul className="mt-4 space-y-2.5 text-base text-foreground">
            <li>
              <span aria-hidden="true">👍</span> Boa opção para quem busca variedade e
              organização em uma única plataforma.
            </li>
            <li>
              <span aria-hidden="true">⚠️</span> Menos indicada para quem procura acompanhamento
              totalmente individualizado.
            </li>
          </ul>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Se você procura uma plataforma online com variedade de treinos e uma forma mais
            prática de organizar sua rotina, consideramos a Natflix uma opção que vale a pena
            conhecer. Antes de assinar, recomendamos conferir os recursos, planos e condições
            diretamente no site oficial.
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
      <div className="container-page py-14 md:py-20">
        <div className="rounded-[2rem] bg-primary px-6 py-12 text-center md:px-12 md:py-14">
          <h2
            id="cta-final-titulo"
            className="mx-auto max-w-2xl text-2xl text-primary-foreground sm:text-3xl md:text-4xl"
          >
            Quer conferir por conta própria?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
            Veja os recursos, planos e condições atualizadas diretamente no site oficial da
            Natflix Fitness.
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
              Você será direcionada ao site oficial.
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
      <div className="container-page py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 id="faq-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Dúvidas antes de decidir
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
