import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, BookOpen, Loader2 } from "lucide-react";

const INSPIRE_AUTHOR_ID = "1785072";
const PUBS_SIZE = 10;

interface PubRecord {
  metadata?: {
    titles?: { title: string }[];
    earliest_date?: string;
    publication_info?: {
      year?: number;
      journal_title?: string;
      journal_volume?: string;
      page_start?: string;
    }[];
    arxiv_eprints?: { value: string }[];
    dois?: { value: string }[];
    citation_count?: number;
    control_number?: number;
  };
}

const titleFrom = (r: PubRecord) => r.metadata?.titles?.[0]?.title || "Untitled";
const yearFrom = (r: PubRecord) =>
  r.metadata?.earliest_date?.slice(0, 4) || r.metadata?.publication_info?.[0]?.year?.toString() || "";
const venueFrom = (r: PubRecord) => {
  const p = r.metadata?.publication_info?.[0];
  if (!p) return "";
  return [p.journal_title, p.journal_volume, p.page_start].filter(Boolean).join(" ");
};
const arxivLink = (r: PubRecord) => {
  const a = r.metadata?.arxiv_eprints?.[0]?.value;
  return a ? `https://arxiv.org/abs/${a}` : "";
};
const doiLink = (r: PubRecord) => {
  const d = r.metadata?.dois?.[0]?.value;
  return d ? `https://doi.org/${d}` : "";
};
const inspireLink = (r: PubRecord) =>
  r.metadata?.control_number ? `https://inspirehep.net/literature/${r.metadata.control_number}` : "#";

export const Publications = () => {
  const [pubs, setPubs] = useState<PubRecord[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `https://inspirehep.net/api/literature?q=authors.recid:${INSPIRE_AUTHOR_ID}&sort=mostrecent&size=${PUBS_SIZE}`;
    fetch(url, { headers: { Accept: "application/json" } })
      .then((r) => {
        if (!r.ok) throw new Error("failed");
        return r.json();
      })
      .then((d) => setPubs(d?.hits?.hits || []))
      .catch(() => setError(true));
  }, []);

  return (
    <section id="publications" className="relative py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-sm font-mono uppercase tracking-widest text-primary mb-3">// Publications</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Latest from <span className="text-gradient">INSPIRE-HEP</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Live feed of my most recent papers, fetched directly from the INSPIRE-HEP API.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {!pubs && !error && (
            <div className="flex items-center justify-center py-20 text-muted-foreground">
              <Loader2 className="w-6 h-6 animate-spin mr-3" />
              Loading publications…
            </div>
          )}

          {error && (
            <div className="glow-card rounded-2xl p-6 text-center text-muted-foreground">
              Couldn't load publications.{" "}
              <a
                href={`https://inspirehep.net/authors/${INSPIRE_AUTHOR_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Open profile on INSPIRE-HEP →
              </a>
            </div>
          )}

          {pubs?.map((rec, i) => {
            const title = titleFrom(rec);
            const year = yearFrom(rec);
            const venue = venueFrom(rec);
            const cite = rec.metadata?.citation_count;
            return (
              <motion.a
                key={i}
                href={inspireLink(rec)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glow-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {year && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-cosmos text-primary-foreground font-bold">
                        {year}
                      </span>
                    )}
                    {Number.isInteger(cite) && (
                      <span className="text-xs font-mono text-muted-foreground">{cite} citations</span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-tight group-hover:text-gradient transition-all">
                    {title}
                  </h3>
                  {venue && <p className="text-sm text-muted-foreground mt-1.5 italic">{venue}</p>}
                </div>
                <div className="flex items-center gap-3 text-sm shrink-0">
                  {arxivLink(rec) && (
                    <a
                      href={arxivLink(rec)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-secondary hover:underline"
                    >
                      <FileText className="w-3.5 h-3.5" /> arXiv
                    </a>
                  )}
                  {doiLink(rec) && (
                    <a
                      href={doiLink(rec)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      <BookOpen className="w-3.5 h-3.5" /> DOI
                    </a>
                  )}
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.a>
            );
          })}

          {pubs && pubs.length > 0 && (
            <div className="text-center pt-6">
              <a
                href={`https://inspirehep.net/authors/${INSPIRE_AUTHOR_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/60 hover:bg-muted transition-colors font-medium"
              >
                View all on INSPIRE-HEP <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
