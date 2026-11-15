import { useState } from 'react';
import {
  MapPin,
  Star,
  ExternalLink,
  Navigation,
  MessageCircle,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BUSINESS_INFO,
  NEIGHBORHOODS,
  buildWhatsappUrl,
  type NeighborhoodItem,
} from '../data/passarelaData';

type ZoneFilter = 'Todos' | NeighborhoodItem['zone'];

const ZONE_FILTERS: ZoneFilter[] = [
  'Todos',
  'Base Central',
  'Região Central',
  'Bairros Atendidos',
];

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function CoverageAndTrustSection() {
  const [selectedZone, setSelectedZone] = useState<ZoneFilter>('Todos');
  const [activeNeighborhood, setActiveNeighborhood] = useState<NeighborhoodItem>(
    NEIGHBORHOODS[0]
  );

  const filteredNeighborhoods =
    selectedZone === 'Todos'
      ? NEIGHBORHOODS
      : NEIGHBORHOODS.filter((item) => item.zone === selectedZone);

  return (
    <>
      {/* Section 4: Área de Atendimento */}
      <section
        id="area-atendimento"
        className="border-b border-white/10 bg-[#111A33] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left: Neighborhood Coverage Interactive Explorer */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE_PREMIUM }}
              className="lg:col-span-6"
            >
              <p className="text-xs font-semibold tracking-wider text-[#00A3FF] uppercase">
                Área de Atendimento
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white text-balance sm:text-4xl">
                Base no Cruzeiro Celeste com cobertura em João Monlevade
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Sediada na Rua Nova York, nº 19, a Passarela Mototáxi atende o
                Cruzeiro Celeste, região central e bairros de João Monlevade.
                Selecione um bairro abaixo para conferir detalhes ou chamar
                diretamente.
              </p>

              {/* Interactive Zone Filter Tabs */}
              <div
                role="tablist"
                aria-label="Filtrar bairros por região"
                className="mt-6 flex flex-wrap gap-1.5 rounded-xl border border-white/10 bg-[#0B132B] p-1.5"
              >
                {ZONE_FILTERS.map((zone) => {
                  const isActive = selectedZone === zone;
                  return (
                    <button
                      key={zone}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedZone(zone)}
                      className={`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB800] ${
                        isActive
                          ? 'bg-[#FFB800] text-[#0B132B]'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {zone}
                    </button>
                  );
                })}
              </div>

              {/* Neighborhood Buttons Grid */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-2">
                {filteredNeighborhoods.map((item) => {
                  const isSelected = activeNeighborhood.name === item.name;
                  return (
                    <motion.button
                      key={item.name}
                      type="button"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ duration: 0.12 }}
                      onClick={() => setActiveNeighborhood(item)}
                      className={`flex min-h-[46px] items-center justify-between rounded-xl border px-3.5 py-2.5 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A3FF] ${
                        isSelected
                          ? 'border-[#00A3FF] bg-[#1C2541] font-semibold text-white'
                          : 'border-white/10 bg-[#0B132B] text-slate-300 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      <span className="truncate pr-2">{item.name}</span>
                      <MapPin
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isSelected ? 'text-[#00A3FF]' : 'text-slate-500'
                        }`}
                        aria-hidden="true"
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* Active Neighborhood Detail Callout */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNeighborhood.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: EASE_PREMIUM }}
                  className="mt-5 rounded-xl border border-white/10 bg-[#0B132B] p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-display text-base font-bold text-white">
                      {activeNeighborhood.name}
                    </p>
                    <span className="text-xs font-medium text-[#00A3FF]">
                      {activeNeighborhood.zone}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-300">
                    {activeNeighborhood.note}
                  </p>
                  <div className="mt-4">
                    <a
                      href={buildWhatsappUrl(
                        `Olá! Gostaria de solicitar uma corrida saindo de ${activeNeighborhood.name} com a Passarela Mototáxi.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold text-[#061E10] transition-all hover:brightness-105 whitespace-nowrap"
                    >
                      <MessageCircle
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span>Chamar para {activeNeighborhood.name}</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right: Interactive Embedded Map + Direct Route Link */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE_PREMIUM }}
              className="lg:col-span-6"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B132B]">
                <div className="aspect-[4/3] w-full bg-[#1C2541]">
                  <iframe
                    title="Mapa de localização da Passarela Mototáxi no Cruzeiro Celeste, João Monlevade"
                    src={BUSINESS_INFO.googleMapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4 border-t border-white/10 p-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.address.street}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {BUSINESS_INFO.address.neighborhood},{' '}
                      {BUSINESS_INFO.address.city} –{' '}
                      {BUSINESS_INFO.address.state} · CEP{' '}
                      {BUSINESS_INFO.address.cep}
                    </p>
                  </div>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#1C2541] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#FFB800]/60 whitespace-nowrap shrink-0"
                  >
                    <Navigation
                      className="h-4 w-4 shrink-0 text-[#FFB800]"
                      aria-hidden="true"
                    />
                    <span>Traçar Rota no Maps</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Confiança e Credibilidade (Google Business Profile) */}
      <section
        id="credibilidade"
        className="border-b border-white/10 bg-[#0B132B] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: EASE_PREMIUM }}
              className="lg:col-span-5"
            >
              <p className="text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
                Confiança e Credibilidade
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white text-balance sm:text-4xl">
                Avaliação pública verificada no Google
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Transparência no atendimento e ponto físico confirmado em João
                Monlevade. Confira os dados públicos do nosso Perfil da Empresa
                no Google.
              </p>
              <div className="mt-6">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/15 bg-[#111A33] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#00A3FF] whitespace-nowrap"
                >
                  <span>Ver Perfil no Google Maps</span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-[#00A3FF]"
                    aria-hidden="true"
                  />
                </motion.a>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05, ease: EASE_PREMIUM }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-white/10 bg-[#111A33] p-6"
              >
                <div className="flex items-center gap-1.5 text-[#FFB800]">
                  <Star className="h-5 w-5 fill-[#FFB800]" aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                    Nota no Google
                  </span>
                </div>
                <p className="font-display mt-3 text-4xl font-extrabold text-white tabular-nums">
                  4,4
                  <span className="text-lg font-medium text-slate-400">
                    {' '}
                    / 5
                  </span>
                </p>
                <p className="mt-2 text-xs text-slate-400 tabular-nums">
                  Baseado em {BUSINESS_INFO.googleReviewsCount} avaliações
                  públicas
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.12, ease: EASE_PREMIUM }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-white/10 bg-[#111A33] p-6"
              >
                <div className="flex items-center gap-1.5 text-[#00A3FF]">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                    Funcionamento
                  </span>
                </div>
                <p className="font-display mt-3 text-2xl font-extrabold text-white">
                  Aberto 24h
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Todos os dias, incluindo madrugadas e feriados
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.19, ease: EASE_PREMIUM }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-white/10 bg-[#111A33] p-6"
              >
                <div className="flex items-center gap-1.5 text-[#25D366]">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                    Sede Física
                  </span>
                </div>
                <p className="font-display mt-3 text-lg font-bold leading-snug text-white">
                  Cruzeiro Celeste
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Rua Nova York, nº 19 · CEP 35931-112
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
