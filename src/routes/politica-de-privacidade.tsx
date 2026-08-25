import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PoliticaPrivacidade,
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Fitness na Prática" },
      {
        name: "description",
        content:
          "Saiba como o Fitness na Prática trata informações, cookies, dados de navegação e serviços de terceiros.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://fitnessnapratica.com.br/politica-de-privacidade",
      },
    ],
  }),
});

function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-page max-w-3xl py-16 md:py-24">
        <p className="eyebrow">Privacidade</p>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
          Política de Privacidade
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: agosto de 2026
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              1. Sobre esta política
            </h2>

            <p className="mt-3">
              Esta Política de Privacidade explica, de forma geral, como o
              Fitness na Prática pode coletar e utilizar informações relacionadas
              ao uso deste site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              2. Informações fornecidas voluntariamente
            </h2>

            <p className="mt-3">
              O Fitness na Prática não exige cadastro para acessar seus conteúdos.
              Caso você entre em contato por e-mail, poderemos receber as
              informações que você decidir fornecer, como seu endereço de e-mail,
              nome e conteúdo da mensagem.
            </p>

            <p className="mt-3">
              Essas informações serão utilizadas apenas para responder ao contato
              ou tratar do assunto relacionado à mensagem enviada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              3. Dados de navegação e análise
            </h2>

            <p className="mt-3">
              O site poderá utilizar ferramentas de análise e mensuração, como
              Google Analytics, Google Tag Manager e Google Ads, para compreender
              como os visitantes utilizam as páginas e avaliar o desempenho de
              campanhas e conteúdos.
            </p>

            <p className="mt-3">
              Essas ferramentas podem coletar informações técnicas, como páginas
              visitadas, tipo de dispositivo, navegador, origem do acesso,
              interações com o site e outros dados de navegação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              4. Cookies e tecnologias semelhantes
            </h2>

            <p className="mt-3">
              O Fitness na Prática poderá utilizar cookies e tecnologias
              semelhantes para funcionamento, análise de audiência, medição de
              desempenho e publicidade.
            </p>

            <p className="mt-3">
              Dependendo das ferramentas utilizadas, esses recursos podem ser
              fornecidos por terceiros, como o Google.
            </p>

            <p className="mt-3">
              Você pode controlar ou excluir cookies através das configurações do
              seu navegador. Algumas funcionalidades de medição podem ser afetadas
              caso determinados cookies sejam bloqueados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              5. Links externos e links de afiliado
            </h2>

            <p className="mt-3">
              Algumas páginas contêm links para sites de terceiros, incluindo
              links de afiliado. Ao acessar outro site, o tratamento de dados passa
              a estar sujeito às políticas e práticas desse terceiro.
            </p>

            <p className="mt-3">
              O Fitness na Prática não controla as práticas de privacidade de
              sites externos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              6. Compartilhamento de informações
            </h2>

            <p className="mt-3">
              Não vendemos dados pessoais de visitantes.
            </p>

            <p className="mt-3">
              Informações técnicas de navegação podem ser processadas por
              provedores utilizados para hospedagem, análise, medição e
              publicidade, de acordo com suas próprias políticas e os serviços
              contratados pelo Fitness na Prática.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              7. Armazenamento e segurança
            </h2>

            <p className="mt-3">
              Buscamos utilizar serviços e práticas adequadas para proteger as
              informações tratadas pelo site. No entanto, nenhum sistema conectado
              à internet pode garantir segurança absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              8. Seus direitos
            </h2>

            <p className="mt-3">
              Dependendo da legislação aplicável, você poderá ter direitos
              relacionados aos seus dados pessoais, incluindo acesso, correção,
              exclusão ou esclarecimentos sobre o tratamento realizado.
            </p>

            <p className="mt-3">
              Para questões relacionadas à privacidade, entre em contato pelo
              e-mail:
            </p>

            <a
              href="mailto:fitnessnapratica.contato@gmail.com"
              className="mt-2 inline-flex break-all font-medium text-primary underline underline-offset-4"
            >
              fitnessnapratica.contato@gmail.com
            </a>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              9. Alterações nesta política
            </h2>

            <p className="mt-3">
              Esta Política de Privacidade poderá ser atualizada sempre que
              houver mudanças relevantes no funcionamento do site, nas ferramentas
              utilizadas ou nas práticas de tratamento de dados.
            </p>

            <p className="mt-3">
              A data de atualização será indicada no início desta página.
            </p>
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
