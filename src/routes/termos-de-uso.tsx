import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-de-uso")({
  component: TermosDeUso,
  head: () => ({
    meta: [
      { title: "Termos de Uso | Fitness na Prática" },
      {
        name: "description",
        content:
          "Leia os Termos de Uso do Fitness na Prática e entenda as condições aplicáveis ao acesso e uso do conteúdo do site.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://fitnessnapratica.com.br/termos-de-uso",
      },
    ],
  }),
});

function TermosDeUso() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-page max-w-3xl py-16 md:py-24">
        <p className="eyebrow">Termos</p>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
          Termos de Uso
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: agosto de 2026
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              1. Aceitação dos termos
            </h2>

            <p className="mt-3">
              Ao acessar e utilizar o Fitness na Prática, você concorda com estes
              Termos de Uso. Caso não concorde com alguma condição, recomendamos
              que não utilize o site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              2. Natureza do conteúdo
            </h2>

            <p className="mt-3">
              O Fitness na Prática é um projeto independente que publica análises,
              comparações e conteúdos informativos relacionados a treino, rotina,
              bem-estar e soluções fitness.
            </p>

            <p className="mt-3">
              O conteúdo disponibilizado possui caráter informativo e não deve ser
              interpretado como orientação médica, nutricional, jurídica ou como
              acompanhamento profissional individualizado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              3. Informações sobre produtos e serviços
            </h2>

            <p className="mt-3">
              Buscamos apresentar informações de forma clara e atualizada, mas
              preços, condições, recursos, planos, disponibilidade e demais
              características de produtos ou serviços podem ser alterados pelos
              respectivos fornecedores sem aviso prévio.
            </p>

            <p className="mt-3">
              Antes de realizar qualquer compra ou assinatura, recomendamos
              conferir as informações atualizadas diretamente no site oficial do
              fornecedor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              4. Links de afiliado
            </h2>

            <p className="mt-3">
              Algumas páginas podem conter links de afiliado. Quando uma compra
              ou assinatura é realizada através desses links, o Fitness na Prática
              poderá receber uma comissão do fornecedor responsável, sem custo
              adicional para o visitante.
            </p>

            <p className="mt-3">
              A existência de uma relação de afiliado não significa que o Fitness
              na Prática represente ou tenha vínculo oficial com as marcas
              mencionadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              5. Links para sites de terceiros
            </h2>

            <p className="mt-3">
              O site pode conter links para páginas externas. O Fitness na Prática
              não controla o conteúdo, funcionamento, políticas, preços ou práticas
              desses sites de terceiros.
            </p>

            <p className="mt-3">
              O acesso a sites externos ocorre por conta e risco do visitante e
              está sujeito aos termos e políticas do respectivo fornecedor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              6. Resultados e expectativas
            </h2>

            <p className="mt-3">
              Não garantimos resultados específicos relacionados a produtos,
              serviços, treinos, plataformas ou estratégias mencionadas no site.
            </p>

            <p className="mt-3">
              Resultados podem variar conforme fatores individuais, utilização do
              produto ou serviço, rotina, contexto e outros elementos fora do
              controle do Fitness na Prática.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              7. Propriedade intelectual
            </h2>

            <p className="mt-3">
              Os textos, estrutura editorial, identidade visual e demais conteúdos
              produzidos pelo Fitness na Prática são destinados ao uso informativo
              do site, salvo indicação em contrário.
            </p>

            <p className="mt-3">
              Marcas, nomes comerciais, logotipos e outros elementos pertencentes
              a terceiros permanecem de propriedade de seus respectivos titulares.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              8. Uso adequado do site
            </h2>

            <p className="mt-3">
              O visitante concorda em não utilizar o site para fins ilícitos,
              tentar interferir em seu funcionamento, explorar vulnerabilidades ou
              utilizar o conteúdo de forma que viole direitos de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              9. Limitação de responsabilidade
            </h2>

            <p className="mt-3">
              O Fitness na Prática não se responsabiliza por decisões de compra,
              contratação ou uso tomadas exclusivamente com base no conteúdo
              publicado no site.
            </p>

            <p className="mt-3">
              Também não nos responsabilizamos por indisponibilidades, alterações,
              problemas de pagamento, suporte, cancelamento, reembolso ou outros
              assuntos relacionados a produtos e serviços fornecidos por terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              10. Alterações nestes termos
            </h2>

            <p className="mt-3">
              Estes Termos de Uso podem ser atualizados sempre que houver mudanças
              relevantes no funcionamento, conteúdo ou serviços utilizados pelo
              site.
            </p>

            <p className="mt-3">
              A data da última atualização será indicada no início desta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              11. Contato
            </h2>

            <p className="mt-3">
              Para dúvidas relacionadas a estes Termos de Uso, entre em contato
              pelo e-mail:
            </p>

            <a
              href="mailto:fitnessnapratica.contato@gmail.com"
              className="mt-2 inline-flex break-all font-medium text-primary underline underline-offset-4"
            >
              fitnessnapratica.contato@gmail.com
            </a>
          </section>
        </div>

        <Link
          to="/"
          className="mt-12 inline-flex font-medium text-primary underline underline-offset-4"
        >
          Voltar para o Fitness na Prática →
        </Link>
      </div>
    </main>
  );
}
