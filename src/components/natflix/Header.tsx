import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AffiliateCta } from "./AffiliateCta";

const navItems = [
  { href: "#plataforma", label: "A plataforma" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#planos", label: "Planos" },
  { href: "#analise", label: "Nossa análise" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-baseline gap-1.5 no-underline">
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-foreground">
            Natflix
          </span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
            Fitness
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground no-underline transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <AffiliateCta id="cta-natflix-header-conhecer" variant="ctaOutline" size="default" withIcon={false}>
            Conheça a Natflix
          </AffiliateCta>
          <AffiliateCta id="cta-natflix-header" variant="cta" size="default" withIcon={false}>
            Ver planos
          </AffiliateCta>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav aria-label="Navegação mobile" className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base text-foreground no-underline hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <AffiliateCta id="cta-natflix-menu" className="mt-3 w-full" size="default">
              Ver planos
            </AffiliateCta>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
