import { galleryItems } from "@/content/home";
import { siteConfig } from "@/content/site";
import { buttonClasses } from "@/components/ui/button-styles";
import { InstagramIcon } from "@/components/ui/icons";
import { ImageFrame } from "@/components/ui/image-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedLink } from "@/components/ui/tracked-link";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <section
      id="galeria"
      aria-labelledby="galeria-title"
      className="bg-paper py-20 sm:py-28 lg:py-36"
    >
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="galeria-title"
            index="05"
            eyebrow="Galeria"
            title="Trabalhos que falam por si."
          />
          <TrackedLink
            href={siteConfig.social.instagram}
            event="instagram_click"
            eventParams={{ location: "gallery" }}
            external
            className={buttonClasses("outline-dark", "self-start lg:self-auto")}
          >
            <InstagramIcon size={18} />
            Ver mais no Instagram
          </TrackedLink>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-20 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <li key={item.label} data-reveal className={cn(index % 3 === 1 && "lg:translate-y-12")}>
              <ImageFrame
                image={item.image}
                placeholderLabel={item.label}
                tone={index % 2 === 0 ? "light" : "dark"}
                aspect="aspect-[4/5]"
                sizes="(min-width: 1024px) 30vw, 50vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
