import { AffiliateCta } from "./AffiliateCta";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <AffiliateCta id="cta-natflix-sticky" className="w-full" size="default" withIcon={false}>
        Conhecer a Natflix
      </AffiliateCta>
      <p className="mt-1.5 text-center text-[0.65rem] text-muted-foreground">
        Link de afiliado · você vai para o site oficial
      </p>
    </div>
  );
}
