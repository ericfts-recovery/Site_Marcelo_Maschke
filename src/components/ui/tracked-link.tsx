"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { track, type AnalyticsEvent, type AnalyticsParams } from "@/lib/analytics";

type TrackedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
  href: string;
  event: AnalyticsEvent;
  eventParams?: AnalyticsParams;
  external?: boolean;
  children: ReactNode;
};

/** Link externo (WhatsApp, telefone, Instagram) com evento de analytics. */
export function TrackedLink({
  href,
  event,
  eventParams,
  external = false,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={() => track(event, eventParams)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {children}
    </a>
  );
}
