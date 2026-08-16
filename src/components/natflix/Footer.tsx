export function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-24 md:pb-0">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-md">
            <p className="flex items-baseline gap-1.5">
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold">
                Natflix
              </span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                Fitness
              </span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Esta é uma página independente de afiliado e não representa o site oficial da
              Natflix Fitness.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Podemos receber uma comissão caso você assine através de nossos links.
            </p>
          </div>

          <nav aria-label="Links institucionais" className="text-sm">
            <ul className="space-y-3">
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground no-underline hover:text-foreground"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground no-underline hover:text-foreground"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-muted-foreground no-underline hover:text-foreground"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#divulgacao"
                  className="text-muted-foreground no-underline hover:text-foreground"
                >
                  Divulgação de afiliado
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          id="divulgacao"
          className="mt-10 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground"
        >
          <p>
            <strong className="font-semibold text-foreground">Divulgação de afiliado:</strong>{" "}
            os links desta página direcionam para o site oficial da Natflix Fitness por meio de
            um link de afiliado. Se você assinar após clicar, podemos receber uma comissão, sem
            custo adicional para você. Marcas e nomes citados pertencem aos seus respectivos
            proprietários. As informações sobre a plataforma, planos e condições foram obtidas
            no site oficial e podem ser alteradas pelo fornecedor.
          </p>
          <p id="contato" className="mt-4">
            Contato: [SEU EMAIL DE CONTATO]
          </p>
        </div>
      </div>
    </footer>
  );
}
