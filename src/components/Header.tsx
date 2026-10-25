import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, site } from "../data/site";

/** Navegación compartida del portafolio; los destinos son anclas de la página. */
export const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#inicio"
          className="brand"
          aria-label="Alex Cabana, ir al inicio"
          onClick={() => setOpen(false)}
        >
          <img
            src="/media/marca.png"
            alt=""
            aria-hidden="true"
            width="44"
            height="44"
          />
          <span className="brand-copy">
            <strong>Alex Cabana</strong>
            <small>Desarrollo Web</small>
          </span>
        </a>

        <nav
          id="principal-nav"
          aria-label="Navegación principal"
          className={`site-nav ${open ? "is-open" : ""}`}
        >
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-mobile-contact"
            href="#contacto"
            onClick={() => setOpen(false)}
          >
            Hablemos
          </a>
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary desktop-contact" href="#contacto">
            Hablemos <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-controls="principal-nav"
            aria-expanded={open}
            onClick={() => setOpen((wasOpen) => !wasOpen)}
          >
            {open ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {open && (
        <button
          className="menu-backdrop"
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        />
      )}
      <span className="sr-only">
        {site.role} en {site.location}
      </span>
    </header>
  );
};
