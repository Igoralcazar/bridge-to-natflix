import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({
    meta: [
      { title: "Sobre | Fitness na Prática" },
      {
        name: "description",
        content:
          "Conheça o Fitness na Prática, um projeto independente de análises, comparações e conteúdos sobre treino, rotina e soluções fitness.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://fitnessnapratica.com.br/sobre",
      },
    ],
  }),
});

function Sobre() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-page max-w-3xl py-16 md:py-24">
        <p className="eyebrow">Fitness na Prática</p>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
          Sobre o projeto
        </h1>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            O Fitness na Prática é um projeto independente criado para ajudar pessoas
            a entender melhor plataformas, serviços e soluções relacionadas a treino,
            rotina e bem-estar.
          </p>

          <p>
            Nosso objetivo é apresentar informações de forma prática, destacando
            pontos positivos, limitações, preços e para quem cada solução pode fazer
            sentido.
          </p>

          <p>
            Não representamos as marcas analisadas e buscamos manter uma abordagem
            informativa e transparente.
          </p>

          <p>
            Algumas páginas podem conter links de afiliado. Quando isso acontece,
            podemos receber uma comissão caso uma compra seja realizada através desses
            links, sem custo adicional para o visitante.
          </p>
        </div>

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
