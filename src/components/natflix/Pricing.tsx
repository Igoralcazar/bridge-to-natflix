import { AffiliateCta } from "./AffiliateCta";
import { plans } from "./data";

export function Pricing() {
  return (
    <section id="precos" aria-labelledby="precos-titulo" className="bg-background">
      <div className="container-page py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Preços</p>
          <h2 id="precos-titulo" className="mt-5 text-2xl sm:text-3xl md:text-4xl">
            Quanto custa a Natflix?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Valores consultados no site oficial. Podem ser alterados sem aviso — confirme sempre
            na página oficial antes de assinar.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`card-soft flex flex-col p-6 ${
                plan.badge ? "border-primary/30" : ""
              }`}
            >
              {plan.badge ? (
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {plan.badge}
                </p>
              ) : null}
              <h3 className="text-base font-semibold">{plan.name}</h3>
              <p className="mt-3 text-2xl font-semibold text-foreground">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground">{plan.unit}</span>
              </p>
              {plan.secondary ? (
                <p className="mt-1 text-sm text-muted-foreground">{plan.secondary}</p>
              ) : null}
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {plan.renewal}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-3">
          <AffiliateCta id="cta-natflix-precos" size="default">
            Ver planos no site oficial
          </AffiliateCta>
          <p className="text-xs text-muted-foreground">
            Você será direcionada ao site oficial da Natflix Fitness.
          </p>
        </div>
      </div>
    </section>
  );
}
