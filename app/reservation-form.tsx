"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mvkpbwyn";

type FormStatus = "idle" | "sending" | "success" | "error";

function nextDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

export function ReservationForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const arrivalRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  useEffect(() => {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60_000;
    arrivalRef.current?.setAttribute(
      "min",
      new Date(now.getTime() - offset).toISOString().slice(0, 10),
    );
  }, []);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#formularz-rezerwacji") setIsOpen(true);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function closeDialog() {
    setIsOpen(false);
    setStatus("idle");
    if (window.location.hash === "#formularz-rezerwacji") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }

  function handleArrivalChange(value: string) {
    setArrival(value);
    if (departure && departure <= value) setDeparture("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Nie udało się wysłać formularza.");
      form.reset();
      setArrival("");
      setDeparture("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="formularz-rezerwacji" className="reservation-anchor">
      <button
        className="button button-light"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Zapytaj o termin <span aria-hidden="true">→</span>
      </button>

      <dialog
        className="reservation-dialog"
        ref={dialogRef}
        onCancel={closeDialog}
        onClose={() => setIsOpen(false)}
        aria-labelledby="reservation-title"
      >
        <button
          className="reservation-close"
          type="button"
          onClick={closeDialog}
          aria-label="Zamknij formularz rezerwacji"
        >
          ×
        </button>

        {status === "success" ? (
          <div className="reservation-success" role="status">
            <p className="eyebrow dark">Dziękujemy</p>
            <h2 id="reservation-title">Zapytanie wysłane</h2>
            <p>Odezwiemy się z informacją o dostępności na podany adres e-mail.</p>
            <button className="button button-primary" type="button" onClick={closeDialog}>
              Zamknij
            </button>
          </div>
        ) : (
          <>
            <div className="reservation-heading">
              <p className="eyebrow dark">Rezerwacja</p>
              <h2 id="reservation-title">Zapytaj o termin</h2>
              <p>Podaj planowany termin pobytu. Potwierdzimy dostępność i prześlemy szczegóły.</p>
            </div>

            <form className="reservation-form" onSubmit={handleSubmit}>
              <input type="hidden" name="obiekt" value="Elganowo 33" />
              <input type="hidden" name="_subject" value="Nowe zapytanie o rezerwację — Elganowo 33" />

              <div className="reservation-field reservation-field-wide">
                <label htmlFor="reservation-name">Imię i nazwisko</label>
                <input id="reservation-name" name="name" autoComplete="name" />
              </div>

              <div className="reservation-field">
                <label htmlFor="reservation-email">E-mail <span>*</span></label>
                <input id="reservation-email" name="email" type="email" autoComplete="email" required />
              </div>

              <div className="reservation-field">
                <label htmlFor="reservation-phone">Telefon</label>
                <input id="reservation-phone" name="phone" type="tel" autoComplete="tel" />
              </div>

              <div className="reservation-field">
                <label htmlFor="reservation-arrival">Data przyjazdu <span>*</span></label>
                <input
                  id="reservation-arrival"
                  ref={arrivalRef}
                  name="arrival"
                  type="date"
                  value={arrival}
                  onChange={(event) => handleArrivalChange(event.target.value)}
                  required
                />
              </div>

              <div className="reservation-field">
                <label htmlFor="reservation-departure">Data wyjazdu <span>*</span></label>
                <input
                  id="reservation-departure"
                  name="departure"
                  type="date"
                  min={arrival ? nextDate(arrival) : undefined}
                  value={departure}
                  onChange={(event) => setDeparture(event.target.value)}
                  required
                />
              </div>

              <div className="reservation-field reservation-field-wide">
                <label htmlFor="reservation-guests">Liczba osób <span>*</span></label>
                <input id="reservation-guests" name="guests" type="number" min="1" max="7" defaultValue="2" required />
              </div>

              <div className="reservation-field reservation-field-wide">
                <label htmlFor="reservation-notes">Uwagi</label>
                <textarea
                  id="reservation-notes"
                  name="message"
                  rows={4}
                  placeholder="Napisz, jeśli podróżujecie z dziećmi, macie pytania lub specjalne potrzeby."
                />
              </div>

              {status === "error" && (
                <p className="reservation-error" role="alert">
                  Nie udało się wysłać zapytania. Spróbuj ponownie lub napisz na rezerwacje@elganowo33.pl.
                </p>
              )}

              <button className="button button-primary reservation-submit" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Wysyłanie…" : "Wyślij zapytanie"}
              </button>
              <p className="reservation-required"><span>*</span> pola wymagane</p>
              <p className="reservation-privacy">
                Dane podane w formularzu wykorzystamy wyłącznie do obsługi Twojego zapytania o termin. Szczegóły znajdziesz w <a href="/polityka-prywatnosci">Polityce prywatności</a>.
              </p>
            </form>
          </>
        )}
      </dialog>
    </div>
  );
}
