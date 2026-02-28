import { useEffect, useMemo, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { WhatsButton } from "./shared/WhatsButton";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const items = useMemo(() => NAV_ITEMS, []);
  const [active, setActive] = useState(items[0].href);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown as EventListener);
    return () =>
      window.removeEventListener("keydown", onKeyDown as EventListener);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="h-14 w-full bg-background backdrop-blur-sm border-b border-white/10">
        <div className="relative h-full">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(1200px_200px_at_50%_0%,rgba(255,255,255,0.10),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-15 [background:linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)]" />

          <div className=" flex h-full items-center justify-between px-4">
            <a
              href="#inicio"
              onClick={() => handleNavClick("#inicio")}
              className="flex items-end gap-1 select-none"
            >
              <span className="text-white font-semibold tracking-wide">
                HYS
              </span>
              <span className="text-white/70 text-xs tracking-widest pb-0.5">
                EXPOR
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-8">
              {items.map((item) => {
                const isActive = active === item.href;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={[
                        "relative text-sm font-medium transition-colors",
                        "text-white/70 hover:text-white",
                        isActive ? "text-white" : "",
                      ].join(" ")}
                    >
                      {item.label}
                      <span
                        className={[
                          "absolute left-1/2 -translate-x-1/2 -bottom-3 h-0.5 w-8 rounded-full",
                          "bg-primary transition-opacity",
                          isActive ? "opacity-100" : "opacity-0",
                        ].join(" ")}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/5 transition"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <CgClose size={22} /> : <BiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={[
          "md:hidden fixed inset-0 z-50 transition",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <aside
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-xs",
            "bg-background border-l border-white/10",
            "transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-4 h-14 border-b border-white/10">
            <span className="text-white font-semibold tracking-wide">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/5 transition"
              aria-label="Fechar menu"
            >
              <BiX size={22} />
            </button>
          </div>

          <ul className="px-4 py-4 flex flex-col gap-2">
            {items.map((item) => {
              const isActive = active === item.href;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={[
                      "flex justify-between rounded-md px-3 py-3 flex-col gap-1",
                      "text-sm font-medium transition",
                      isActive
                        ? "text-white bg-white/5"
                        : "text-white/80 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    {item.label}
                    <span
                      className={[
                        "h-0.5 w-8 rounded-full",
                        "bg-primary",
                        isActive ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                    />
                  </a>
                </li>
              );
            })}
            <div className="flex justify-center">
              <WhatsButton />
            </div>
          </ul>
        </aside>
      </div>
    </header>
  );
}
