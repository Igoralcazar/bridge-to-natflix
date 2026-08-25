const links = [
  { href: "/sobre", label: "Sobre", enabled: true },
  { href: "/divulgacao-de-afiliados", label: "Divulgação de Afiliados", enabled: true },
  { href: "/politica-de-privacidade", label: "Política de Privacidade", enabled: true },
  { href: "/termos-de-uso", label: "Termos de Uso", enabled: true },
  { href: "/contato", label: "Contato", enabled: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-md">
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
              Fitness na Prática
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Portal independente de análises sobre treino, rotina e bem-estar.
              Não temos vínculo com a Natflix Fitness nem representamos o site oficial.
            </p>
          </div>

          <nav aria-label="Links institucionais" className="text-sm">
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  {link.enabled ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground no-underline transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="cursor-default text-muted-foreground"
                    >
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          id="divulgacao"
          className="mt-10 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground"
        >
          <p>
            Esta é uma página independente. Alguns links são links de afiliado:
            se você assinar após clicar, podemos receber uma comissão, sem custo
            adicional para você. Isso não influencia nossa avaliação. Marcas
            citadas pertencem aos seus respectivos proprietários, e informações
            sobre planos, preços e condições podem ser alteradas pelo fornecedor.
          </p>
        </div>
      </div>
    </footer>
  );
}
