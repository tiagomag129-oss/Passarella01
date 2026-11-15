import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS } from '../data/passarelaData';

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="border-b border-white/10 bg-[#0B132B] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#FFB800] uppercase">
              Como Funciona
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Da solicitação ao embarque em 4 passos simples
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-300">
            Sem precisar baixar aplicativos pesados: fale direto com a nossa
            central e combine sua corrida em instantes.
          </p>
        </motion.div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.li
              key={step.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: EASE_PREMIUM,
              }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111A33] p-6 transition-colors duration-200 hover:border-[#FFB800]/40"
            >
              <div>
                <span className="font-display text-3xl font-extrabold text-[#FFB800] tabular-nums">
                  {step.stepNumber}
                </span>
                <h3 className="font-display mt-4 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
