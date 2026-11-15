import { useState } from 'react';
import { MessageCircle, Phone, Bike, Clock3, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, buildWhatsappUrl } from '../data/passarelaData';

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function ServicesSection() {
  const [dayImgFailed, setDayImgFailed] = useState(false);
  const [nightImgFailed, setNightImgFailed] = useState(false);

  return (
    <div id="servicos">
      {/* Service Section 1: Corridas Convencionais */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0B132B] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
              Nossos Serviços · 01
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Corridas Convencionais em João Monlevade
            </h2>
          </motion.div>

          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111A33] p-7 sm:p-9 lg:col-span-6"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-2xl font-extrabold text-[#FFB800] tabular-nums">
                    01
                  </span>
                  <Bike className="h-6 w-6 text-[#FFB800]" aria-hidden="true" />
                </div>

                <h3 className="font-display mt-5 text-xl font-bold text-white sm:text-2xl">
                  Agilidade para sua rotina diária
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  Ideal para trabalhadores, estudantes e moradores que precisam
                  cruzar a cidade com rapidez no trânsito urbano. Você informa o
                  ponto de partida e o destino diretamente à central, consulta o
                  valor antes do embarque e segue viagem com tranquilidade.
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <ArrowUpRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB800]"
                      aria-hidden="true"
                    />
                    <span>
                      Deslocamento rápido para trabalho, faculdade, comércio e
                      compromissos cotidianos
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowUpRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB800]"
                      aria-hidden="true"
                    />
                    <span>
                      Atendimento humanizado direto com a equipe da central
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowUpRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB800]"
                      aria-hidden="true"
                    />
                    <span>
                      Consulta prévia de disponibilidade e valor antes da
                      confirmação
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  href={buildWhatsappUrl(
                    'Olá! Gostaria de solicitar uma corrida convencional com a Passarela Mototáxi.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-[#061E10] transition-all duration-150 hover:brightness-105 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Pedir Corrida no WhatsApp</span>
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/15 bg-[#1C2541] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#FFB800]/60 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB800]"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-[#FFB800]"
                    aria-hidden="true"
                  />
                  <span className="tabular-nums">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </motion.a>
              </div>
            </motion.div>

            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: EASE_PREMIUM }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111A33] min-h-[300px] lg:col-span-6"
            >
              {!dayImgFailed ? (
                <img
                  src="/src/assets/images/service_day_commute_1794759604781.jpg"
                  alt="Mototaxista em atendimento diurno em avenida urbana de cidade mineira"
                  referrerPolicy="no-referrer"
                  onError={() => setDayImgFailed(true)}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-gradient-to-br from-[#1C2541] to-[#0B132B] p-8">
                  <Bike className="h-12 w-12 text-[#FFB800]" aria-hidden="true" />
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B132B]/85 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-base font-bold text-white">
                  Deslocamento urbano ágil
                </p>
                <p className="mt-1 text-xs text-slate-200">
                  Conexões rápidas entre bairros, centro e regiões comerciais
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smooth Transition Divider Line */}
      <div className="bg-[#0B132B]">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          className="mx-auto h-px max-w-6xl origin-left bg-gradient-to-r from-[#FFB800]/60 via-[#00A3FF]/60 to-transparent"
        />
      </div>

      {/* Service Section 2: Plantão 24 Horas e Madrugada */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#111A33] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Visual Column (Left on Desktop for Rhythm) */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: EASE_PREMIUM }}
              className="group relative order-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0B132B] min-h-[300px] lg:order-1 lg:col-span-6"
            >
              {!nightImgFailed ? (
                <img
                  src="/src/assets/images/service_night_shift_1794759038487.jpg"
                  alt="Mototaxista em atendimento noturno iluminado por postes urbanos"
                  referrerPolicy="no-referrer"
                  onError={() => setNightImgFailed(true)}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-gradient-to-br from-[#1C2541] to-[#0B132B] p-8">
                  <Clock3 className="h-12 w-12 text-[#00A3FF]" aria-hidden="true" />
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-base font-bold text-white">
                  Operação contínua na madrugada
                </p>
                <p className="mt-1 text-xs text-slate-200">
                  Disponibilidade 24h todos os dias, finais de semana e feriados
                </p>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM }}
              className="order-1 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B132B] p-7 sm:p-9 lg:order-2 lg:col-span-6"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-2xl font-extrabold text-[#00A3FF] tabular-nums">
                    02
                  </span>
                  <Clock3 className="h-6 w-6 text-[#00A3FF]" aria-hidden="true" />
                </div>

                <p className="mt-5 text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
                  Nossos Serviços · 02
                </p>

                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl">
                  Plantão 24 Horas e Madrugada
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  Atendimento ininterrupto durante toda a noite, madrugada,
                  finais de semana e feriados. Suporte confiável para quem entra
                  ou sai de turnos de trabalho e precisa de transporte seguro em
                  horários alternativos.
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <ArrowUpRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#00A3FF]"
                      aria-hidden="true"
                    />
                    <span>
                      Disponível na madrugada para trocas de turno e emergências
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowUpRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#00A3FF]"
                      aria-hidden="true"
                    />
                    <span>
                      Canal direto via WhatsApp e telefone fixo da central
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowUpRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#00A3FF]"
                      aria-hidden="true"
                    />
                    <span>
                      Atuação em domingos e feriados sem interrupção do serviço
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  href={buildWhatsappUrl(
                    'Olá! Preciso de atendimento 24h com a Passarela Mototáxi.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-[#061E10] transition-all duration-150 hover:brightness-105 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Solicitar no Plantão 24h</span>
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#00A3FF]/40 bg-[#1C2541] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#00A3FF] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A3FF]"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-[#00A3FF]"
                    aria-hidden="true"
                  />
                  <span className="tabular-nums">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
