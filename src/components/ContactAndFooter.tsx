import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Navigation, X } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, buildWhatsappUrl } from '../data/passarelaData';

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function ContactAndFooter() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      {/* Section 8: Contato e Localização */}
      <section
        id="contato"
        className="border-b border-white/10 bg-[#111A33] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
              Contato e Localização
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Fale direto com a central Passarela Mototáxi
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Atendimento 24 horas por telefone, WhatsApp ou presencialmente em
              nossa base no Cruzeiro Celeste.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05, ease: EASE_PREMIUM }}
              whileHover={{ y: -3 }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B132B] p-6"
            >
              <div>
                <MapPin className="h-6 w-6 text-[#00A3FF]" aria-hidden="true" />
                <h3 className="font-display mt-4 text-lg font-bold text-white">
                  Endereço da Central
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {BUSINESS_INFO.address.street}
                  <br />
                  {BUSINESS_INFO.address.neighborhood},{' '}
                  {BUSINESS_INFO.address.city} – {BUSINESS_INFO.address.state}
                  <br />
                  CEP {BUSINESS_INFO.address.cep}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#1C2541] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#00A3FF] whitespace-nowrap"
                >
                  <Navigation
                    className="h-4 w-4 shrink-0 text-[#00A3FF]"
                    aria-hidden="true"
                  />
                  <span>Como Chegar</span>
                </a>
              </div>
            </motion.div>

            {/* Fixed Telephone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.12, ease: EASE_PREMIUM }}
              whileHover={{ y: -3 }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B132B] p-6"
            >
              <div>
                <Phone className="h-6 w-6 text-[#FFB800]" aria-hidden="true" />
                <h3 className="font-display mt-4 text-lg font-bold text-white">
                  Telefone Fixo da Central
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Ligação direta para solicitar mototáxi, consultar valores e
                  acompanhar chamados a qualquer hora.
                </p>
                <p className="font-display mt-4 text-2xl font-bold text-white tabular-nums">
                  {BUSINESS_INFO.phoneDisplay}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-4 py-2.5 text-sm font-bold text-[#0B132B] transition-colors hover:bg-[#ffc633] whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Ligar Agora</span>
                </a>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.19, ease: EASE_PREMIUM }}
              whileHover={{ y: -3 }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B132B] p-6"
            >
              <div>
                <MessageCircle
                  className="h-6 w-6 text-[#25D366]"
                  aria-hidden="true"
                />
                <h3 className="font-display mt-4 text-lg font-bold text-white">
                  WhatsApp 24 Horas
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Canal rápido para enviar seu endereço de partida e destino por
                  mensagem ou localização.
                </p>
                <p className="font-display mt-4 text-2xl font-bold text-white tabular-nums">
                  {BUSINESS_INFO.whatsappDisplay}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-[#061E10] transition-all hover:brightness-105 whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: Rodapé */}
      <footer className="bg-[#0B132B] py-10 pb-24 md:pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center">
            <div>
              <p className="font-display text-lg font-bold text-white">
                Passarela <span className="text-[#FFB800]">Mototáxi</span>
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {BUSINESS_INFO.googleName} · {BUSINESS_INFO.address.full}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
              <a
                href="#servicos"
                className="transition-colors hover:text-[#FFB800]"
              >
                Serviços
              </a>
              <a
                href="#como-funciona"
                className="transition-colors hover:text-[#FFB800]"
              >
                Como Funciona
              </a>
              <a
                href="#area-atendimento"
                className="transition-colors hover:text-[#FFB800]"
              >
                Área de Atendimento
              </a>
              <a
                href="#duvidas"
                className="transition-colors hover:text-[#FFB800]"
              >
                Dúvidas
              </a>
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="underline underline-offset-4 transition-colors hover:text-[#FFB800]"
              >
                Política de Privacidade
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-slate-400 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Passarela Mototáxi João Monlevade.
              Todos os direitos reservados.
            </p>
            <p className="tabular-nums">
              Central: {BUSINESS_INFO.phoneDisplay} · WhatsApp:{' '}
              {BUSINESS_INFO.whatsappDisplay}
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: EASE_PREMIUM }}
            className="w-full max-w-lg rounded-2xl border border-white/15 bg-[#111A33] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <h2
                id="privacy-title"
                className="font-display text-lg font-bold text-white"
              >
                Política de Privacidade
              </h2>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label="Fechar política de privacidade"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              <p>
                Este site institucional tem como finalidade apresentar os canais
                de contato oficiais da <strong>Passarela Mototáxi</strong> em
                João Monlevade – MG.
              </p>
              <p>
                Os dados de partida e destino informados na ferramenta de
                solicitação rápida não são armazenados em servidor próprio: são
                utilizados exclusivamente no seu navegador para preencher a
                mensagem inicial enviada diretamente ao WhatsApp oficial da
                central ({BUSINESS_INFO.whatsappDisplay}).
              </p>
              <p>
                Para dúvidas sobre atendimento ou tratamento de informações
                durante suas solicitações, entre em contato pelo telefone{' '}
                {BUSINESS_INFO.phoneDisplay}.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="min-h-[40px] rounded-xl bg-[#FFB800] px-5 py-2 text-sm font-bold text-[#0B132B] hover:bg-[#ffc633]"
              >
                Entendi
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
