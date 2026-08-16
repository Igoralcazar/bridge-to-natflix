import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#plataforma", label: "O que é" },
  { href: "#analise", label: "Nossa análise" },
  { href: "#comparacao", label: "Comparação" },
  { href: "#planos", label: "Preço" },
  { href: "#faq", label: "Dúvidas" },
];


export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-baseline gap-1.5 no-underline">
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-foreground">
            Fitness na Prática
          </span>
          <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary sm:inline">
            Análises
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
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

        <div className="hidden md:flex">
          <Button asChild variant="cta" size="default">
            <a href="#analise" className="no-underline">
              Ver análise
            </a>
          </Button>
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
          </nav>
        </div>
      ) : null}
    </header>
  );
}
