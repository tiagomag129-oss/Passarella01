import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsappUrl } from '../data/passarelaData';

export default function MobileStickyBar() {
  return (
    <div
      aria-label="Ações rápidas de contato"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-[#0B132B]/95 px-3 py-1.5 backdrop-blur-md md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-[#1C2541] px-3 py-2 text-xs font-bold text-white transition-colors active:scale-[0.98] whitespace-nowrap"
        >
          <Phone className="h-4 w-4 text-[#FFB800] shrink-0" aria-hidden="true" />
          <span className="tabular-nums truncate">
            Ligar: {BUSINESS_INFO.phoneDisplay}
          </span>
        </a>

        <a
          href={buildWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2 text-xs font-bold text-[#061E10] transition-all active:scale-[0.98] whitespace-nowrap"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Chamar WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
