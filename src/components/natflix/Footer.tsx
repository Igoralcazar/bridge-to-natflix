export function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-24 md:pb-0">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-md">
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
              Fitness na Prática
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Portal independente de análises sobre treino, rotina e bem-estar. Não temos
              vínculo com a Natflix Fitness nem representamos o site oficial.
            </p>
          </div>

          <nav aria-label="Links institucionais" className="text-sm">
            <ul className="space-y-3">
              <li>
                <a
                  href="#analise"
                  className="text-muted-foreground no-underline hover:text-foreground"
                >
                  Nossa análise
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground no-underline hover:text-foreground"
                >
                  Dúvidas frequentes
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
            </ul>
          </nav>
        </div>

        <div
          id="divulgacao"
          className="mt-10 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground"
        >
          <p>
            Alguns links desta página são links de afiliado: se você assinar após clicar,
            podemos receber uma comissão, sem custo adicional para você. Isso não influencia
            nossa avaliação. Marcas citadas pertencem aos seus respectivos proprietários e as
            informações sobre planos e condições podem ser alteradas pelo fornecedor.
          </p>
          <p id="contato" className="mt-4">
            Contato: [SEU EMAIL DE CONTATO]
          </p>
        </div>
      </div>
    </footer>
  );
}
