import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { BUSINESS_INFO, buildWhatsappUrl } from '../data/passarelaData';

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Área de Atendimento', href: '#area-atendimento' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B132B]/90 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 md:h-16">
        {/* Zone 1: Single-line Brand Title */}
        <a
          href="#inicio"
          className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB800]"
        >
          Passarela <span className="text-[#FFB800]">Mototáxi</span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-150 hover:text-[#FFB800] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB800]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold tracking-wide text-[#061E10] transition-transform duration-150 hover:scale-[1.02] hover:brightness-105 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Chamar no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-slate-200 transition-colors hover:border-[#FFB800]/60 hover:text-white lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB800]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Subtle Scroll Progress Indicator */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="h-[2px] w-full origin-left bg-gradient-to-r from-[#FFB800] via-[#FF5500] to-[#00A3FF]"
      />

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#111A33] px-4 py-4 lg:hidden">
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-[#FFB800]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-slate-400">
              <span>Central: {BUSINESS_INFO.phoneDisplay}</span>
              <span>Atendimento 24h</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
