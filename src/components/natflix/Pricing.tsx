import { AffiliateCta } from "./AffiliateCta";
import { plans } from "./data";

export function Pricing() {
  return (
    <section id="planos" aria-labelledby="planos-titulo" className="bg-cream">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Planos</p>
          <h2 id="planos-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Escolha o plano que combina com sua rotina.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Os valores abaixo são os preços atualmente exibidos no site oficial da Natflix.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.badge
                  ? "flex flex-col rounded-[1.75rem] border border-primary/25 bg-card p-6 shadow-[var(--shadow-card)]"
                  : "card-soft flex flex-col p-6"
              }
            >
              {plan.badge ? (
                <p className="mb-4 inline-flex rounded-full bg-sage px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-sage-foreground">
                  {plan.badge}
                </p>
              ) : null}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-4 font-[family-name:var(--font-display)] text-3xl text-foreground">
                {plan.price}
                <span className="text-base font-normal text-muted-foreground">{plan.unit}</span>
              </p>
              {plan.secondary ? (
                <p className="mt-1 text-sm text-muted-foreground">{plan.secondary}</p>
              ) : null}
              <p className="mt-4 flex-1 text-sm text-muted-foreground">{plan.renewal}</p>
              <AffiliateCta
                id={`cta-natflix-pricing-${plan.name.toLowerCase()}`}
                variant={plan.badge ? "cta" : "ctaOutline"}
                size="default"
                className="mt-6 w-full"
                withIcon={false}
              >
                Conhecer plano
              </AffiliateCta>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Os valores e condições podem ser alterados pelo fornecedor. Consulte as condições
          atualizadas no site oficial antes da compra. Os selos “mais vendido” e “melhor custo
          benefício” são indicações apresentadas pelo site oficial da Natflix, não uma
          avaliação nossa.
        </p>
      </div>
    </section>
  );
}
