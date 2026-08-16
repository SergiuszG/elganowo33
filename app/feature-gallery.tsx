"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type MouseEvent, type TouchEvent } from "react";

type GalleryKey = "interiors" | "garden-terrace" | "surroundings";

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Gallery = {
  name: string;
  images: GalleryImage[];
};

const galleries: Record<GalleryKey, Gallery> = {
  interiors: {
    name: "Wnętrza",
    images: [
      { src: "/images/galleries/interiors/interiors-01.webp", alt: "Hol domu z drewnianymi schodami i ceglanym podestem", width: 1625, height: 2400 },
      { src: "/images/galleries/interiors/interiors-02.webp", alt: "Salon z drewnianymi belkami i rustykalnymi meblami", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-03.webp", alt: "Drewniana podłoga i ceramiczne płytki w części dziennej", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-04.webp", alt: "Pianino i drewniana komoda w salonie", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-05.webp", alt: "Rustykalna kuchnia z drewnianą zabudową", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-06.webp", alt: "Stół przy oknie w kuchni domu", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-07.webp", alt: "Kuchnia z drewnianym stołem i widokiem na korytarz", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-08.webp", alt: "Jasna kuchnia z drewnianymi szafkami", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-09.webp", alt: "Kuchenka gazowa w drewnianej zabudowie kuchennej", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-10.webp", alt: "Narożna zabudowa kuchni z kuchenką gazową", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-11.webp", alt: "Salon z kominkiem i jasnymi fotelami", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-12.webp", alt: "Jadalnia ze stołem i wyjściem do ogrodu", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-13.webp", alt: "Okno sypialni nad malowaną drewnianą ławą", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-14.webp", alt: "Drewniane wnętrze sypialni z szafą", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-15.webp", alt: "Sypialnia z podwójnym łóżkiem i drewnianym sufitem", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-16.webp", alt: "Podwójne łóżko w sypialni na poddaszu", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-17.webp", alt: "Malowana skrzynia w pokoju na poddaszu", width: 1800, height: 2400 },
      { src: "/images/galleries/interiors/interiors-18.webp", alt: "Panoramiczny kominek i fotele w salonie", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-19.webp", alt: "Sypialnia z metalowym łóżkiem i wzorzystym dywanem", width: 2400, height: 1800 },
      { src: "/images/galleries/interiors/interiors-20.webp", alt: "Łazienka z prysznicem i drewnianą szafką", width: 720, height: 960 },
    ],
  },
  "garden-terrace": {
    name: "Ogród i taras",
    images: [
      { src: "/images/galleries/garden-terrace/garden-terrace-01.webp", alt: "Zadaszony taras porośnięty różami", width: 2400, height: 1800 },
      { src: "/images/galleries/garden-terrace/garden-terrace-02.webp", alt: "Kwitnące róże przy ścianie domu", width: 1800, height: 2400 },
      { src: "/images/galleries/garden-terrace/garden-terrace-03.webp", alt: "Różowe kwiaty pnącej róży przy tarasie", width: 1800, height: 2400 },
      { src: "/images/galleries/garden-terrace/garden-terrace-04.webp", alt: "Zadaszony taras z wiszącym fotelem", width: 2400, height: 1800 },
      { src: "/images/galleries/garden-terrace/garden-terrace-05.webp", alt: "Drewniana ławka przy ogrodzeniu w ogrodzie", width: 2400, height: 1800 },
      { src: "/images/galleries/garden-terrace/garden-terrace-06.webp", alt: "Kot siedzący na drewnianym tarasie", width: 2400, height: 1835 },
      { src: "/images/galleries/garden-terrace/garden-terrace-07.webp", alt: "Kot odpoczywający przy donicach na tarasie", width: 1800, height: 2400 },
      { src: "/images/galleries/garden-terrace/garden-terrace-08.webp", alt: "Zielony ogród z drewnianą studnią", width: 2400, height: 1800 },
      { src: "/images/galleries/garden-terrace/garden-terrace-09.webp", alt: "Łąka i zadaszona część ogrodu", width: 2400, height: 1800 },
      { src: "/images/galleries/garden-terrace/garden-terrace-10.webp", alt: "Różowy kwiat róży w ogrodzie", width: 2400, height: 1800 },
      { src: "/images/galleries/garden-terrace/garden-terrace-11.webp", alt: "Donice z kwiatami przy tarasie", width: 1800, height: 2400 },
      { src: "/images/galleries/garden-terrace/garden-terrace-12.webp", alt: "Dzwonek przy tarasie z widokiem na trawnik", width: 1800, height: 2400 },
      { src: "/images/galleries/garden-terrace/garden-terrace-13.webp", alt: "Ogród z dużym drzewem i drewnianą studnią", width: 2400, height: 1800 },
      { src: "/images/galleries/garden-terrace/garden-terrace-14.webp", alt: "Widok z tarasu na trawnik i ogród", width: 2400, height: 1800 },
      { src: "/images/galleries/garden-terrace/garden-terrace-15.webp", alt: "Słoneczny taras wzdłuż białej ściany domu", width: 2400, height: 1800 },
    ],
  },
  surroundings: {
    name: "Okolica",
    images: [
      { src: "/images/galleries/surroundings/surroundings-01.webp", alt: "Ptaki wodne na spokojnym jeziorze", width: 1824, height: 1368 },
      { src: "/images/galleries/surroundings/surroundings-02.webp", alt: "Żurawie na łące przy lesie", width: 1827, height: 934 },
      { src: "/images/galleries/surroundings/surroundings-03.webp", alt: "Stado jeleni na skraju brzozowego lasu", width: 1824, height: 1368 },
      { src: "/images/galleries/surroundings/surroundings-04.webp", alt: "Jezioro otoczone brzozami i lasem", width: 1824, height: 1368 },
      { src: "/images/galleries/surroundings/surroundings-05.webp", alt: "Jeleń na polanie niedaleko domu", width: 1791, height: 1320 },
      { src: "/images/galleries/surroundings/surroundings-06.webp", alt: "Niebieskie kwiaty na leśnej polanie", width: 1824, height: 1368 },
      { src: "/images/galleries/surroundings/surroundings-07.webp", alt: "Burzowe chmury nad zielonym polem", width: 2400, height: 1800 },
      { src: "/images/galleries/surroundings/surroundings-08.webp", alt: "Czarny kot na spokojnej szutrowej drodze", width: 1800, height: 2400 },
      { src: "/images/galleries/surroundings/surroundings-09.webp", alt: "Motyle siedzące na kwiecie ostu", width: 1800, height: 2400 },
      { src: "/images/galleries/surroundings/surroundings-10.webp", alt: "Trzciny nad brzegiem mazurskiego jeziora", width: 2400, height: 1800 },
      { src: "/images/galleries/surroundings/surroundings-11.webp", alt: "Trzciny odbijające się w spokojnej wodzie", width: 1800, height: 2400 },
      { src: "/images/galleries/surroundings/surroundings-12.webp", alt: "Krowy na pastwisku o zachodzie słońca", width: 1448, height: 1086 },
      { src: "/images/galleries/surroundings/surroundings-13.webp", alt: "Oszroniona łąka nad niewielkim rozlewiskiem", width: 1824, height: 1368 },
      { src: "/images/galleries/surroundings/surroundings-14.webp", alt: "Dmuchawiec w ciepłym świetle wieczoru", width: 1824, height: 1368 },
      { src: "/images/galleries/surroundings/surroundings-15.webp", alt: "Jeleń stojący na mazurskiej łące", width: 1824, height: 1368 },
      { src: "/images/galleries/surroundings/surroundings-16.webp", alt: "Ptaki lecące po wieczornym niebie", width: 1824, height: 1368 },
      { src: "/images/galleries/surroundings/surroundings-17.webp", alt: "Zając ukryty w wysokiej trawie", width: 2023, height: 1518 },
      { src: "/images/galleries/surroundings/surroundings-18.webp", alt: "Dom pośród drzew pod pochmurnym niebem", width: 1824, height: 1368 },
      { src: "/images/galleries/surroundings/surroundings-19.webp", alt: "Spokojne jezioro z trzcinami i powalonym drzewem", width: 1783, height: 1338 },
      { src: "/images/galleries/surroundings/surroundings-20.webp", alt: "Polna droga pośród łąk o zachodzie słońca", width: 1086, height: 1448 },
    ],
  },
};

export function FeatureGallery() {
  const [activeGallery, setActiveGallery] = useState<GalleryKey | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const gallery = activeGallery ? galleries[activeGallery] : null;

  const move = useCallback((offset: number) => {
    if (!activeGallery) return;
    const length = galleries[activeGallery].images.length;
    setActiveIndex((current) => (current + offset + length) % length);
  }, [activeGallery]);

  const closeGallery = useCallback(() => {
    setActiveGallery(null);
    window.requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  const openGallery = (key: GalleryKey, event: MouseEvent<HTMLButtonElement>) => {
    openerRef.current = event.currentTarget;
    setActiveIndex(0);
    setActiveGallery(key);
  };

  useEffect(() => {
    if (!activeGallery) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeGallery();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled])"));
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first && last) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last && first) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGallery, closeGallery, move]);

  const handleBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeGallery();
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];
    touchStartRef.current = null;
    if (!start) return;
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    move(deltaX < 0 ? 1 : -1);
  };

  const currentImage = gallery?.images[activeIndex];

  return (
    <>
      <div className="feature-grid">
        <article className="feature-card">
          <div className="image-wrap"><Image className="feature-image-wnetrza" src="/images/elganowo33-wnetrza.jpg" alt="Wnętrza domu Elganowo 33" fill sizes="(max-width: 760px) calc(100vw - 44px), (max-width: 1000px) calc(50vw - 48px), 33vw" quality={82} /></div>
          <span className="card-number">01</span><h3>Wnętrza</h3><p>Naturalne materiały, kominek i widok, który zwalnia rytm dnia.</p>
          <button className="feature-card-trigger" type="button" aria-haspopup="dialog" aria-label="Otwórz galerię: Wnętrza" onClick={(event) => openGallery("interiors", event)} />
        </article>
        <article className="feature-card lift">
          <div className="image-wrap"><Image className="feature-image-taras" src="/images/elganowo33-taras.jpg" alt="Ogród i taras domu Elganowo 33" fill sizes="(max-width: 760px) calc(100vw - 44px), (max-width: 1000px) calc(50vw - 48px), 33vw" quality={82} /></div>
          <span className="card-number">02</span><h3>Ogród i taras</h3><p>Poranki z kawą, długie kolacje i wieczory pod gwiazdami.</p>
          <button className="feature-card-trigger" type="button" aria-haspopup="dialog" aria-label="Otwórz galerię: Ogród i taras" onClick={(event) => openGallery("garden-terrace", event)} />
        </article>
        <article className="feature-card">
          <div className="image-wrap"><Image className="feature-image-okolica" src="/images/elganowo33-okolica.jpg" alt="Okolica domu Elganowo 33 na Mazurach" fill sizes="(max-width: 760px) calc(100vw - 44px), (max-width: 1000px) calc(100vw - 82px), 33vw" quality={82} /></div>
          <span className="card-number">03</span><h3>Okolica</h3><p>Jeziora, leśne ścieżki i małe miejsca, które odkrywa się bez mapy.</p>
          <button className="feature-card-trigger" type="button" aria-haspopup="dialog" aria-label="Otwórz galerię: Okolica" onClick={(event) => openGallery("surroundings", event)} />
        </article>
      </div>

      {gallery && currentImage && (
        <div className="gallery-backdrop" role="presentation" onMouseDown={handleBackdrop}>
          <div
            className="gallery-dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            aria-describedby="gallery-counter"
          >
            <header className="gallery-header">
              <div>
                <p className="gallery-eyebrow">Galeria</p>
                <h2 id="gallery-title">{gallery.name}</h2>
              </div>
              <p className="gallery-counter" id="gallery-counter" aria-live="polite">{activeIndex + 1} / {gallery.images.length}</p>
              <button ref={closeButtonRef} className="gallery-close" type="button" aria-label="Zamknij galerię" onClick={closeGallery}>×</button>
            </header>

            <div className="gallery-stage" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <Image
                key={currentImage.src}
                className="gallery-image"
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="(max-width: 760px) 100vw, 90vw"
                quality={82}
                loading="eager"
              />
            </div>

            <div className="gallery-controls" aria-label="Nawigacja galerii">
              <button type="button" onClick={() => move(-1)} aria-label="Poprzednie zdjęcie"><span aria-hidden="true">←</span><span>Poprzednie</span></button>
              <button type="button" onClick={() => move(1)} aria-label="Następne zdjęcie"><span>Następne</span><span aria-hidden="true">→</span></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
