"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navigationItems = [
  { href: "/#dom", label: "Dom" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#mazury", label: "Odkrywaj Mazury" },
  { href: "/#historia", label: "Historia" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus({ preventScroll: true });
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function toggleMenu() {
    if (isOpen) {
      setIsOpen(false);
      requestAnimationFrame(() => buttonRef.current?.focus({ preventScroll: true }));
      return;
    }

    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
    requestAnimationFrame(() => buttonRef.current?.focus({ preventScroll: true }));
  }

  return (
    <div className="mobile-menu">
      <button
        ref={buttonRef}
        className="mobile-menu-toggle"
        type="button"
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={toggleMenu}
      >
        <span className="mobile-menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav
        id="mobile-navigation"
        className="mobile-menu-panel"
        aria-label="Nawigacja mobilna"
        hidden={!isOpen}
      >
        {navigationItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
