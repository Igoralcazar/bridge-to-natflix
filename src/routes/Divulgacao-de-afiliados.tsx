import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/divulgacao-de-afiliados")({
  component: DivulgacaoAfiliados,
  head: () => ({
    meta: [
      { title: "Divulgação de Afiliados | Fitness na Prática" },
      {
        name: "description",
        content:
          "Entenda como funcionam os links de afiliado utilizados no Fitness na Prática e como eles podem gerar comissão para o projeto.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://fitnessnapratica.com.br/divulgacao-de-afiliados",
      },
    ],
  }),
});

function DivulgacaoAfiliados() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-page max-w-3xl py-16 md:py-24">
        <p className="eyebrow">Transparência</p>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
          Divulgação de Afiliados
        </h1>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            O Fitness na Prática é um projeto independente de análises,
            comparações e conteúdos relacionados a treino, rotina e bem-estar.
          </p>

          <p>
            Algumas páginas do site contêm links de afiliado. Isso significa que,
            se você acessar uma oferta através de um desses links e realizar uma
            compra ou assinatura, o Fitness na Prática poderá receber uma
            comissão do fornecedor responsável.
          </p>

          <p>
            Essa comissão não aumenta o preço pago por você.
          </p>

          <p>
            A existência de uma relação de afiliado não significa que o Fitness na
            Prática representa, pertence ou possui vínculo oficial com as marcas,
            empresas ou plataformas analisadas.
          </p>

          <p>
            Nosso objetivo é apresentar informações de forma prática e
            transparente, incluindo pontos positivos, limitações e aspectos que
            consideramos relevantes antes de uma decisão de compra.
          </p>

          <p>
            Preços, condições, recursos e ofertas podem ser alterados pelos
            fornecedores. Por isso, recomendamos sempre conferir as informações
            atualizadas diretamente no site oficial antes de realizar uma compra.
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
