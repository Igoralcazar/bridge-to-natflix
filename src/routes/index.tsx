import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Fitness na Prática | Análises e conteúdo fitness" },
      {
        name: "description",
        content:
          "Análises independentes, comparações e conteúdos para ajudar você a tomar decisões mais informadas sobre treino e rotina fitness.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://fitnessnapratica.com.br/",
      },
    ],
  }),
});

function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-page py-20 md:py-28">
        <p className="eyebrow">Fitness na Prática</p>

        <h1 className="mt-5 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
          Informação prática para ajudar nas suas decisões fitness.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Análises independentes, comparações e conteúdos sobre treino, rotina e
          plataformas fitness.
        </p>

        <div className="mt-10 max-w-xl rounded-[1.75rem] border border-border bg-card p-6">
          <p className="text-sm font-semibold text-primary">Análise em destaque</p>

          <h2 className="mt-3 text-xl font-semibold">
            Natflix Fitness vale a pena?
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Veja os pontos positivos, limitações, preços e para quem a plataforma
            pode fazer sentido.
          </p>

          <Link
            to="/natflix-fitness-vale-a-pena"
            className="mt-5 inline-flex font-medium text-primary underline underline-offset-4"
          >
            Ler nossa análise →
          </Link>
        </div>
      </div>
    </main>
  );
}
