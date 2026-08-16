import { ArrowUpRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AFFILIATE_URL } from "./data";

interface AffiliateCtaProps {
  id: string;
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  withIcon?: boolean;
}

export function AffiliateCta({
  id,
  children,
  variant = "cta",
  size = "xl",
  className,
  withIcon = true,
}: AffiliateCtaProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        id={id}
        className={cn("cta-natflix", "no-underline")}
        data-cta={id}
        href={AFFILIATE_URL}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
      >
        {children}
        {withIcon ? <ArrowUpRight aria-hidden="true" /> : null}
      </a>
    </Button>
  );
}
