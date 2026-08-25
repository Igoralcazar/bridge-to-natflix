import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const CONTACT_EMAIL = "fitnessnapratica.contato@gmail.com";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({
    meta: [
      { title: "Contato | Fitness na Prática" },
      {
        name: "description",
        content:
          "Entre em contato com o Fitness na Prática para dúvidas, correções ou assuntos relacionados ao conteúdo do site.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://fitnessnapratica.com.br/contato",
      },
    ],
  }),
});

function Contato() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-page max-w-3xl py-16 md:py-24">
        <p className="eyebrow">Fitness na Prática</p>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
          Entre em contato
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Tem alguma dúvida, encontrou uma informação que precisa ser corrigida ou
          quer falar sobre algum conteúdo publicado no Fitness na Prática?
        </p>

        <div className="mt-8 rounded-[1.75rem] border border-border bg-card p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
              <Mail className="size-5" aria-hidden="true" />
            </span>

            <div>
              <h2 className="text-lg font-semibold">E-mail</h2>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Você pode entrar em contato pelo endereço:
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-flex break-all font-medium text-primary underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          O Fitness na Prática é um projeto independente e não oferece suporte,
          atendimento ou cancelamento em nome das marcas e plataformas analisadas.
          Para questões relacionadas a uma compra ou assinatura, entre em contato
          diretamente com o fornecedor responsável.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex font-medium text-primary underline underline-offset-4"
        >
          Voltar para o Fitness na Prática →
        </Link>
      </div>
    </main>
  );
}
