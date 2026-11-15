import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BUSINESS_INFO,
  FAQ_ITEMS,
  buildWhatsappUrl,
} from '../data/passarelaData';

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function ConversionAndFaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Section 6: Chamada de Conversão Rápida */}
      <section className="border-b border-white/10 bg-[#111A33] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
            className="flex flex-col justify-between gap-6 rounded-2xl border border-[#FFB800]/30 bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#0B132B] p-6 sm:p-10 lg:flex-row lg:items-center"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
                Central 24 Horas
              </p>
              <h2 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-white text-balance sm:text-3xl">
                Não perca tempo. Solicite sua corrida.
              </h2>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                Atendimento direto pelo WhatsApp ou ligação telefônica para
                qualquer ponto de João Monlevade.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0 sm:flex-row sm:items-center">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-[#061E10] transition-all duration-150 hover:brightness-105 whitespace-nowrap"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>CHAMAR NO WHATSAPP</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-6 py-3 text-sm font-bold text-[#0B132B] transition-all duration-150 hover:bg-[#ffc633] whitespace-nowrap"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{BUSINESS_INFO.phoneDisplay}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: FAQ / Dúvidas Frequentes */}
      <section
        id="duvidas"
        className="border-b border-white/10 bg-[#0B132B] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
            className="text-center"
          >
            <p className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
              Dúvidas Frequentes
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Perguntas sobre o atendimento
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE_PREMIUM }}
            className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#111A33]"
          >
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => toggleFaq(item.id)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] sm:px-6 sm:py-5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#FFB800]"
                  >
                    <span className="font-display text-base font-semibold text-white sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#FFB800] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${item.id}`}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, ease: EASE_PREMIUM }}
                        className="px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:px-6 sm:pb-6 sm:text-base"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
