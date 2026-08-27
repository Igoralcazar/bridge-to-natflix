import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "fitnessnapratica_consent_v1";

function updateGoogleConsent(choice: ConsentChoice) {
  const value = choice === "granted" ? "granted" : "denied";

  window.gtag?.("consent", "update", {
    analytics_storage: value,
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);

    if (!saved) {
      setVisible(true);
    }
  }, []);

  function choose(choice: ConsentChoice) {
    localStorage.setItem(CONSENT_KEY, choice);

    updateGoogleConsent(choice);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_updated",
      consent_choice: choice,
    });

    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferências de cookies"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-[1.5rem] border border-border bg-background p-5 shadow-xl md:p-6"
    >
      <div className="md:flex md:items-center md:justify-between md:gap-8">
        <div className="max-w-xl">
          <p className="font-semibold text-foreground">
            Sua privacidade importa
          </p>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Utilizamos cookies e tecnologias semelhantes para medir audiência,
            entender o uso do site e avaliar o desempenho de campanhas. Você pode
            aceitar ou recusar essas tecnologias.
          </p>

          <Link
            to="/politica-de-privacidade"
            className="mt-2 inline-flex text-sm font-medium text-primary underline underline-offset-4"
          >
            Política de Privacidade
          </Link>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row md:mt-0 md:shrink-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Recusar
          </button>

          <button
            type="button"
            onClick={() => choose("granted")}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
