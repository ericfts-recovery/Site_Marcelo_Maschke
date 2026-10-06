"use client";

import { useState } from "react";
import { fullAddress, siteConfig } from "@/content/site";
import { track } from "@/lib/analytics";
import { isPlaceholder } from "@/lib/utils";
import { HairLines } from "@/components/ui/hair-lines";
import { MapPinIcon } from "@/components/ui/icons";
import { buttonClasses } from "@/components/ui/button-styles";

/**
 * Mapa com "fachada": o iframe do Google só carrega após o clique.
 * Ganho de performance e nenhum cookie de terceiro antes da ação do visitante.
 */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  const hasAddress = !isPlaceholder(siteConfig.address.street);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${siteConfig.name}, ${fullAddress}`)}&output=embed`;

  return (
    <div className="bg-graphite relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
      {loaded ? (
        <iframe
          src={mapSrc}
          title={`Mapa: localização do ${siteConfig.name}`}
          className="absolute inset-0 h-full w-full grayscale-[0.6]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
          <HairLines className="text-gold/25 absolute inset-0 h-full w-full" />
          <MapPinIcon size={32} className="text-gold relative" />
          <p className="text-ash relative max-w-xs">
            {hasAddress ? fullAddress : "Endereço completo em breve."}
          </p>
          {hasAddress && (
            <button
              type="button"
              onClick={() => {
                setLoaded(true);
                track("map_open", { location: "home_location" });
              }}
              className={buttonClasses("outline-light", "relative")}
            >
              Ver no mapa
            </button>
          )}
        </div>
      )}
    </div>
  );
}
