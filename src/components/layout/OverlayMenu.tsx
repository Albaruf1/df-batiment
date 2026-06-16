"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { overlayNav } from "@/content/navigation";
import { site } from "@/content/site";

export function OverlayMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-df-ink text-df-paper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto flex h-full max-w-content flex-col px-6 py-7 md:px-9">
            <div className="flex items-center justify-between">
              <span className="font-arch text-lg font-extrabold">
                DF<span className="text-df-blue">.</span>Bâtiment
              </span>
              <button onClick={onClose} aria-label="Fermer le menu" className="font-mono text-xs uppercase tracking-[0.14em] text-df-muted hover:text-df-paper">
                Fermer ✕
              </button>
            </div>

            <nav className="grid flex-1 content-center gap-12 py-10 md:grid-cols-3">
              {overlayNav.map((group, gi) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + gi * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-df-blue-soft">{group.title}</div>
                  <ul className="space-y-3">
                    {group.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} onClick={onClose} className="group block">
                          <span className="font-arch text-2xl font-semibold transition-colors group-hover:text-df-blue-soft md:text-3xl">
                            {l.label}
                          </span>
                          {l.description && <span className="block text-sm text-df-muted">{l.description}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-[0.12em] text-df-muted">
              <span>Bruxelles · depuis 2009</span>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-df-paper">LinkedIn</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
