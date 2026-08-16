import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeatureGallery } from "./feature-gallery";
import { MobileMenu } from "./mobile-menu";
import { ReservationForm } from "./reservation-form";
import { StorySection } from "./story-section";

export const metadata: Metadata = {
  title: "Elganowo 33 — dom na Mazurach",
  description: "Kameralny dom wśród mazurskich jezior, lasów i ciszy.",
  alternates: {
    canonical: "https://elganowo33.pl/",
  },
};

const vacationRentalStructuredData = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  "@id": "https://elganowo33.pl/#vacation-rental",
  additionalType: "House",
  identifier: "ELG33-001",
  name: "Elganowo 33",
  alternateName: "Na Żurawim Wzgórzu",
  url: "https://elganowo33.pl/",
  telephone: "+48606454812",
  description: "Kameralny dom wśród mazurskich jezior, lasów i ciszy.",
  image: [
    "https://elganowo33.pl/images/elganowo33-dom.jpg",
    "https://elganowo33.pl/images/elganowo33-wnetrza.jpg",
    "https://elganowo33.pl/images/elganowo33-taras.jpg",
    "https://elganowo33.pl/images/elganowo33-okolica.jpg",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Elganowo 33",
    postalCode: "12-130",
    addressLocality: "Elganowo",
    addressRegion: "warmińsko-mazurskie",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.6492718,
    longitude: 20.8636563,
  },
  checkinTime: "15:00",
  checkoutTime: "11:00",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "reservations",
    telephone: "+48606454812",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      opens: "08:00",
      closes: "20:00",
    },
  },
  containsPlace: {
    "@type": "Accommodation",
    name: "Elganowo 33",
    additionalType: "EntirePlace",
    accommodationCategory: "Dom na wyłączność",
    numberOfBedrooms: 3,
    occupancy: {
      "@type": "QuantitativeValue",
      value: 7,
      maxValue: 7,
      unitText: "osób",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "ovenStove", value: true },
      { "@type": "LocationFeatureSpecification", name: "washerDryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "fireplace", value: true },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <script
        id="vacation-rental-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vacationRentalStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <header className="topbar">
        <a className="brand" href="#dom" aria-label="Elganowo 33 — strona główna">
          <span className="brand-mark">E33</span>
          <span><strong>Elganowo 33</strong><small>dom na Mazurach</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Główna nawigacja">
          <a href="#dom">Dom</a>
          <a href="#galeria">Galeria</a>
          <a href="#mazury">Odkrywaj Mazury</a>
          <a href="#historia">Historia</a>
          <a className="nav-cta" href="#formularz-rezerwacji">Zapytaj o termin</a>
        </nav>
        <div className="mobile-header-actions">
          <Link className="nav-cta" href="/#formularz-rezerwacji">Zapytaj o termin</Link>
          <MobileMenu />
        </div>
      </header>

      <section className="hero" id="dom">
        <Image
          className="hero-image"
          src="/images/elganowo33-dom.jpg"
          alt="Dom Elganowo 33 na Mazurach"
          fill
          sizes="100vw"
          quality={82}
          preload
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Elganowo · Mazury</p>
          <h1>Tu rano<br />słychać żurawie.</h1>
          <p className="lead">Dom na Mazurach, do którego chce się wracać.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#formularz-rezerwacji">Zapytaj o termin</a>
            <a className="text-link" href="#galeria">Poznaj dom <span>↓</span></a>
          </div>
        </div>
        <a className="scroll-cue" href="#galeria" aria-label="Przejdź niżej">Przewiń <span>↓</span></a>
      </section>

      <section className="intro section" id="galeria">
        <p className="botanical" aria-hidden="true">⌁</p>
        <p className="eyebrow dark">Dom tylko dla Was</p>
        <h2>Miejsce stworzone<br />do odpoczynku</h2>
        <p className="section-lead">Na końcu spokojnej drogi czeka dom otoczony lasem, łąkami i jeziorami. Bez pośpiechu, bez tłumów — z przestrzenią na prawdziwy oddech.</p>

        <FeatureGallery />

        <div className="facts" aria-label="Najważniejsze informacje o domu">
          <div><strong>7</strong><span>gości</span></div>
          <div><strong>3</strong><span>sypialnie</span></div>
          <div><strong>1</strong><span>dom na wyłączność</span></div>
          <div><strong>∞</strong><span>spokoju</span></div>
        </div>

        <div className="house-details">
          <section className="equipment" aria-labelledby="equipment-heading">
            <p className="eyebrow dark">Wyposażenie</p>
            <h3 id="equipment-heading">W domu znajdziecie</h3>
            <ul>
              <li>Lodówkę</li>
              <li>Pralkę</li>
              <li>Opiekacz</li>
              <li>Kuchnię gazową</li>
              <li>Czajnik elektryczny</li>
              <li>Ekspres do kawy</li>
              <li>Ręczniki</li>
              <li>Pościel</li>
              <li>Zastawę stołową</li>
              <li>Miejsce na ognisko</li>
              <li>Suszarkę do włosów</li>
              <li>Panoramiczny kominek z wkładem Jøtul</li>
            </ul>
          </section>

          <section className="practical-info" aria-labelledby="practical-info-heading">
            <p className="eyebrow dark">Informacje praktyczne</p>
            <h3 id="practical-info-heading">Przed przyjazdem</h3>
            <dl>
              <div><dt>Lokalizacja</dt><dd>Elganowo 33, 12-130 Elganowo, gmina Pasym</dd></div>
              <div><dt>Kontakt</dt><dd><a href="tel:+48606454812">+48 606 454 812</a>, w godzinach 8:00–20:00</dd></div>
              <div><dt>Zameldowanie</dt><dd>od 15:00</dd></div>
              <div><dt>Wymeldowanie</dt><dd>do 11:00</dd></div>
            </dl>
          </section>
        </div>
      </section>

      <section className="discover section" id="mazury">
        <div className="section-heading-row"><div><p className="eyebrow dark">Blisko natury</p><h2>Odkrywaj Mazury</h2></div><p>Wybierz własne tempo. Z domu ruszysz prosto na leśną drogę, nad wodę albo przed siebie.</p></div>
        <div className="activity-grid">
          <article className="activity activity-bike"><Image className="activity-image" src="/images/na-rower.webp" alt="Trasa rowerowa w okolicy Elganowa" fill sizes="(max-width: 500px) 78vw, (max-width: 1000px) 50vw, 25vw" quality={82} /><div><span>01</span><h3>Na rower</h3><p>Szutrowe drogi i spokojne trasy między jeziorami.</p></div></article>
          <article className="activity activity-water"><Image className="activity-image" src="/images/nad-wode.webp" alt="Plaża nad jeziorem na Mazurach" fill sizes="(max-width: 500px) 78vw, (max-width: 1000px) 50vw, 25vw" quality={82} /><div><span>02</span><h3>Nad wodę</h3><p>Poranne kąpiele, kajaki i pomosty tylko dla cierpliwych.</p></div></article>
          <article className="activity activity-walk"><Image className="activity-image" src="/images/na-spacer.webp" alt="Leśna trasa spacerowa w okolicy Elganowa" fill sizes="(max-width: 500px) 78vw, (max-width: 1000px) 50vw, 25vw" quality={82} /><div><span>03</span><h3>Na spacer</h3><p>Leśne ścieżki, ślady zwierząt i zapach sosen.</p></div></article>
          <article className="activity activity-local"><Image className="activity-image" src="/images/nasze-miejsca.webp" alt="Polecane miejsca w okolicy Elganowa" fill sizes="(max-width: 500px) 78vw, (max-width: 1000px) 50vw, 25vw" quality={82} /><div><span>04</span><h3>Nasze miejsca</h3><p>Małe przystanie, lokalne smaki i widoki bez tłumów.</p></div></article>
        </div>
      </section>

      <section className="manifesto" aria-label="Mazurski rytm dnia">
        <div><p>Wieczorem ognisko.</p><p>Rano kawa na tarasie.</p><p>W ciągu dnia jeziora, las i cisza.</p></div>
      </section>

      <StorySection />

      <section className="availability" id="kontakt">
        <div className="availability-inner">
          <p className="eyebrow">Rezerwacje</p><h2>Gotowi na Mazury?</h2>
          <p>Napisz, w jakim terminie chcecie przyjechać i dla ilu osób. Odpowiemy z dostępnością i wszystkimi szczegółami.</p>
          <ReservationForm />
          <small>rezerwacje@elganowo33.pl</small>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#dom"><span className="brand-mark">E33</span><span><strong>Elganowo 33</strong><small>dom na Mazurach</small></span></a>
        <div className="footer-links"><a href="#dom">Dom</a><a href="#galeria">Galeria</a><a href="#mazury">Odkrywaj Mazury</a><a href="#historia">Historia</a></div>
        <div className="footer-contact"><span>Kontakt</span><a href="mailto:rezerwacje@elganowo33.pl">rezerwacje@elganowo33.pl</a><span>Mazury, Polska</span><a href="/polityka-prywatnosci">Polityka prywatności</a></div>
        <div className="footer-bottom"><span>© 2026 Elganowo 33</span><a href="#dom">Do góry ↑</a></div>
      </footer>
    </main>
  );
}
