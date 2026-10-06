"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/content/site";
import { useScrolled } from "@/hooks/use-scrolled";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { TrackedLink } from "@/components/ui/tracked-link";
import { buttonClasses } from "@/components/ui/button-styles";
import { CloseIcon, MenuIcon, WhatsappIcon } from "@/components/ui/icons";

export function SiteHeader() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        solid
          ? "border-line-dark bg-ink/90 border-b backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-(--header-h) items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-paper/85 after:bg-gold hover:text-paper relative inline-flex min-h-11 items-center text-[0.8125rem] font-medium tracking-[0.18em] uppercase transition-colors after:absolute after:bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* No mobile, a barra fixa inferior já cumpre esse papel. */}
          <div className="hidden sm:block">
            <TrackedLink
              href={buildWhatsappUrl()}
              event="whatsapp_click"
              eventParams={{ location: "header" }}
              external
              className={buttonClasses("gold", "min-h-11 px-5")}
            >
              <WhatsappIcon size={16} />
              Agendar
            </TrackedLink>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="text-paper flex size-11 items-center justify-center lg:hidden"
          >
            {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!menuOpen}
        className="bg-ink h-[calc(100dvh-var(--header-h))] overflow-y-auto lg:hidden"
      >
        <nav
          aria-label="Menu"
          className="container-page flex h-full flex-col justify-between py-10"
        >
          <ul className="space-y-2">
            {mainNav.map((item, index) => (
              <li key={item.href}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-line-dark font-display text-paper hover:text-gold flex min-h-14 items-baseline gap-4 border-b py-3 text-4xl transition-colors"
                >
                  <span className="text-gold font-sans text-xs tracking-[0.2em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/agendar"
            onClick={closeMenu}
            className={buttonClasses("outline-light", "mt-10 w-full")}
          >
            Pré-agendar pelo site
          </Link>
        </nav>
      </div>
    </header>
  );
}
