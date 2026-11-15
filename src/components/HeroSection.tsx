import { useState, useRef, type MouseEvent } from 'react';
import {
  Phone,
  MessageCircle,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BUSINESS_INFO, buildWhatsappUrl } from '../data/passarelaData';

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [cityBgFailed, setCityBgFailed] = useState(false);
  const [emblemImgFailed, setEmblemImgFailed] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [formError, setFormError] = useState('');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  const cleanOrigin = origin.trim();
  const cleanDestination = destination.trim();
  const customRouteMessage =
    cleanOrigin && cleanDestination
      ? `Olá! Gostaria de solicitar uma corrida com a Passarela Mototáxi.\n• Partida: ${cleanOrigin}\n• Destino: ${cleanDestination}`
      : BUSINESS_INFO.defaultWhatsappMessage;

  const handleDispatchClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cleanOrigin || !cleanDestination) {
      e.preventDefault();
      setFormError('Informe o endereço de partida e o destino para solicitar.');
      return;
    }
    setFormError('');
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden border-b border-white/10 bg-[#0B132B] pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Full-bleed City Cover Image (João Monlevade) */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY, opacity: bgOpacity }}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE_PREMIUM }}
        className="pointer-events-none absolute inset-0"
      >
        {!cityBgFailed && (
          <img
            src="/assets/aistudio/Screenshot_20261115_132433_Google_3bf5c4de.jpg"
            alt="Vista urbana de João Monlevade ao fundo da capa da Passarela Mototáxi"
            referrerPolicy="no-referrer"
            onError={() => setCityBgFailed(true)}
            className="h-full w-full object-cover object-center brightness-90 contrast-105"
          />
        )}
      </motion.div>

      {/* Balanced Scrim: Keeps Left Headline Legible While Leaving City Skyline Clearly Visible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B132B]/90 via-[#0B132B]/55 to-[#0B132B]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-[#0B132B]/35"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Staggered Fade-in Presentation & High-Conversion CTAs */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05, ease: EASE_PREMIUM }}
              className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-wide text-slate-200 sm:text-sm"
            >
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#FFB800]">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                Atendimento 24h Disponível
              </span>
              <span aria-hidden="true" className="text-slate-500">
                ·
              </span>
              <span>João Monlevade – MG</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE_PREMIUM }}
              className="font-display font-extrabold tracking-tight text-white text-balance leading-[1.08]"
              style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.6rem)' }}
            >
              Precisou se deslocar?{' '}
              <span className="text-[#FFB800]">A Passarela te leva.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: EASE_PREMIUM }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
            >
              Mototáxi 24 horas em João Monlevade com base no Cruzeiro Celeste.
              Agilidade para sua rotina de trabalho, estudos ou compromissos, a
              qualquer hora do dia ou da madrugada.
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: EASE_PREMIUM }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold tracking-wide text-[#061E10] shadow-lg shadow-[#25D366]/20 transition-all duration-150 hover:brightness-105 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>CHAMAR NO WHATSAPP</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-[#111A33]/90 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-150 hover:border-[#FFB800]/70 hover:bg-[#1C2541] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB800]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#FFB800]" aria-hidden="true" />
                <span className="tabular-nums">
                  LIGAR AGORA: {BUSINESS_INFO.phoneDisplay}
                </span>
              </motion.a>
            </motion.div>

            {/* Trust Line with Google Rating */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36, ease: EASE_PREMIUM }}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/15 pt-5 text-sm text-slate-200"
            >
              <span className="inline-flex items-center gap-1.5 font-semibold text-white tabular-nums">
                <Star
                  className="h-4 w-4 fill-[#FFB800] text-[#FFB800]"
                  aria-hidden="true"
                />
                {BUSINESS_INFO.googleRating} no Google
              </span>
              <span aria-hidden="true" className="text-slate-500">
                ·
              </span>
              <span className="tabular-nums">
                {BUSINESS_INFO.googleReviewsCount} avaliações públicas
              </span>
              <span aria-hidden="true" className="text-slate-500">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#00A3FF]" aria-hidden="true" />
                Rua Nova York, 19 – Cruzeiro Celeste
              </span>
            </motion.div>
          </div>

          {/* Right Column: Compact Translucent Brand Emblem Showcase Keeping City Cover Visible */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE_PREMIUM }}
            className="flex flex-col justify-end lg:col-span-6 lg:items-end"
          >
            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-[#0B132B]/75 p-4 backdrop-blur-md shadow-2xl sm:p-5">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/25 bg-[#0B132B] shadow-lg sm:h-24 sm:w-24">
                {!emblemImgFailed ? (
                  <img
                    src="/src/assets/images/passarela_emblem_3d_1794759036049.jpg"
                    alt="Emblema oficial Passarela Mototáxi"
                    referrerPolicy="no-referrer"
                    onError={() => setEmblemImgFailed(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#1C2541] font-display text-sm font-bold text-[#FFB800]">
                    <ShieldCheck className="h-8 w-8 text-[#FFB800]" aria-hidden="true" />
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
                  Central Oficial 24h
                </p>
                <p className="font-display mt-0.5 text-lg font-bold text-white sm:text-xl">
                  Passarela Mototáxi
                </p>
                <p className="mt-1 text-xs text-slate-200 sm:text-sm">
                  Cruzeiro Celeste · João Monlevade – MG
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Quick Trip Dispatcher Bar below Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.44, ease: EASE_PREMIUM }}
          className="mt-8 rounded-2xl border border-white/15 bg-[#111A33]/92 p-5 backdrop-blur-md shadow-xl sm:p-6"
        >
          <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-base font-bold text-white sm:text-lg">
                Solicitação rápida pelo WhatsApp
              </h2>
              <p className="text-xs text-slate-300 sm:text-sm">
                Preencha partida e destino para enviar a mensagem pronta à nossa
                central e consultar disponibilidade e valor.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-12 sm:items-end">
            <div className="sm:col-span-4">
              <label
                htmlFor="hero-origin"
                className="mb-1.5 block text-xs font-medium text-slate-200"
              >
                Endereço ou ponto de partida
              </label>
              <input
                id="hero-origin"
                type="text"
                value={origin}
                onChange={(e) => {
                  setOrigin(e.target.value);
                  if (formError) setFormError('');
                }}
                placeholder="Ex: Rua Nova York, Cruzeiro Celeste"
                className="h-11 w-full rounded-xl border border-white/15 bg-[#0B132B] px-3.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-[#00A3FF] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="hero-destination"
                className="mb-1.5 block text-xs font-medium text-slate-200"
              >
                Endereço ou bairro de destino
              </label>
              <input
                id="hero-destination"
                type="text"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  if (formError) setFormError('');
                }}
                placeholder="Ex: Av. Getúlio Vargas, Carneirinhos"
                className="h-11 w-full rounded-xl border border-white/15 bg-[#0B132B] px-3.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-[#00A3FF] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-4">
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                href={buildWhatsappUrl(customRouteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDispatchClick}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-5 text-sm font-bold text-[#0B132B] transition-all duration-150 hover:bg-[#ffc633] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB800]"
              >
                <span>Consultar no WhatsApp</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </motion.a>
            </div>
          </div>

          {formError && (
            <p role="alert" className="mt-2.5 text-xs font-medium text-[#FFB800]">
              {formError}
            </p>
          )}
        </motion.div>

        {/* Smooth Section Transition Anchor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-slate-300 transition-colors hover:text-[#FFB800]"
          >
            <span>Conheça nossos serviços</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="h-4 w-4 text-[#FFB800]" aria-hidden="true" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
