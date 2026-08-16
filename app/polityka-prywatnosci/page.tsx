import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka prywatności — Elganowo 33",
  description: "Informacje o przetwarzaniu danych przesyłanych w formularzu Elganowo 33.",
};

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <Link className="brand" href="/" aria-label="Elganowo 33 — strona główna">
          <span className="brand-mark">E33</span>
          <span><strong>Elganowo 33</strong><small>dom na Mazurach</small></span>
        </Link>
        <Link className="privacy-back" href="/">Wróć na stronę</Link>
      </header>

      <article className="privacy-content">
        <p className="eyebrow dark">Twoje dane</p>
        <h1>Polityka prywatności</h1>
        <p className="privacy-lead">Poniższe informacje opisują, co dzieje się z danymi przesłanymi przez formularz zapytania o termin na stronie Elganowo 33.</p>

        <section>
          <h2>Administrator i kontakt</h2>
          <p>Administratorem danych osobowych jest Marta Legierska. W sprawach dotyczących danych osobowych możesz napisać na <a href="mailto:rodo@elganowo33.pl">rodo@elganowo33.pl</a>.</p>
        </section>

        <section>
          <h2>Cel i podstawa przetwarzania</h2>
          <p>Dane z formularza wykorzystujemy wyłącznie, aby odpowiedzieć na zapytanie o termin i — jeśli zdecydujesz się na pobyt — przygotować rezerwację. Podstawą prawną jest podjęcie działań na Twoje żądanie przed zawarciem umowy, zgodnie z art. 6 ust. 1 lit. b RODO.</p>
        </section>

        <section>
          <h2>Jakie dane zbieramy</h2>
          <p>Formularz wymaga podania adresu e-mail, daty przyjazdu, daty wyjazdu i liczby osób. Imię i nazwisko, numer telefonu oraz uwagi są dobrowolne. Podczas korzystania ze strony dostawcy techniczni mogą również przetwarzać dane połączenia, takie jak adres IP, informacje o przeglądarce, czas żądania i adres odwiedzanej strony.</p>
        </section>

        <section>
          <h2>Kto pomaga nam obsługiwać dane</h2>
          <p>Formularz działa przez Formspree, Inc. i po wysłaniu przekazuje dane bezpośrednio do tej usługi. Wiadomość trafia następnie na skrzynkę pocztową obsługiwaną przez OVHcloud. Strona jest hostowana przez Vercel, Inc., który może przetwarzać techniczne dane związane z odwiedzinami strony. Nie sprzedajemy danych i nie przekazujemy ich do celów marketingowych.</p>
        </section>

        <section>
          <h2>Jak długo przechowujemy dane</h2>
          <p>Dane przechowujemy przez czas potrzebny do udzielenia odpowiedzi i ustalenia rezerwacji. Jeżeli dojdzie do rezerwacji albo korespondencja będzie potrzebna do ustalenia, dochodzenia lub obrony roszczeń, okres może być dłuższy — do czasu, gdy dane nie będą już potrzebne w tym celu lub wymagane przez prawo. Dostawcy techniczni przechowują dane zgodnie z własnymi zasadami i obowiązkami prawnymi.</p>
        </section>

        <section>
          <h2>Twoje prawa</h2>
          <p>Na zasadach określonych w RODO możesz poprosić o dostęp do danych, ich poprawienie, usunięcie, ograniczenie przetwarzania lub przeniesienie. Żądanie możesz wysłać na adres podany powyżej. Masz również prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych.</p>
        </section>

        <section>
          <h2>Dobrowolność podania danych</h2>
          <p>Podanie danych jest dobrowolne. Adres e-mail, termin pobytu i liczba osób są jednak niezbędne, abyśmy mogli odpowiedzieć na zapytanie. Pozostałe pola są opcjonalne.</p>
        </section>

        <section>
          <h2>Automatyczne decyzje i profilowanie</h2>
          <p>Nie podejmujemy wobec Ciebie zautomatyzowanych decyzji i nie profilujemy danych z formularza.</p>
        </section>

        <section>
          <h2>Przekazywanie danych poza EOG</h2>
          <p>Formspree i Vercel są dostawcami amerykańskimi. Formspree obsługuje formularz w infrastrukturze w Stanach Zjednoczonych i deklaruje stosowanie standardowych klauzul umownych. Vercel może przetwarzać techniczne dane związane z działaniem strony poza Europejskim Obszarem Gospodarczym i deklaruje stosowanie odpowiednich mechanizmów ochrony, w tym standardowych klauzul umownych.</p>
        </section>

        <section>
          <h2>Cookies i analityka</h2>
          <p>Strona nie korzysta z narzędzi analitycznych ani marketingowych i jej kod nie ustawia plików cookies.</p>
        </section>
      </article>
    </main>
  );
}
