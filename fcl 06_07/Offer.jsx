/* FCL Website UI kit — Offer / protocols */
function OfferCard({ badge, badgeTone, title, body, extra, meta }) {
  return (
    <Card style={{ borderColor: 'var(--fcl-hairline)' }}>
      <Badge tone={badgeTone}>{badge}</Badge>
      <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 18, margin: '16px 0 10px', color: 'var(--fcl-ink)' }}>{title}</h4>
      <p style={{ fontSize: 14, color: 'var(--fcl-ink-soft)', margin: '0 0 14px' }}>{body}</p>
      {extra}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fcl-taupe)', borderTop: '1px solid var(--fcl-hairline)', paddingTop: 12 }}>{meta}</div>
    </Card>
  );
}

function OfferBlock({ n, lead, leadAccent, body, img, ribbon, ribbonSide = 'left', imgRight, cards, last, overrideImgStyle }) {
  const head = (
    <div style={{ position: 'relative', border: '1px solid var(--fcl-ink)', aspectRatio: '5/4', overflow: 'hidden', order: imgRight ? 2 : 0 }}>
      <img src={img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center', transform: 'scale(1.15)', ...overrideImgStyle }} />
      <div style={{ position: 'absolute', top: 0, [ribbonSide]: 0, background: 'var(--fcl-blue)', color: 'var(--fcl-ink)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 11px', [ribbonSide === 'left' ? 'borderRight' : 'borderLeft']: '1px solid var(--fcl-ink)', borderBottom: '1px solid var(--fcl-ink)' }}>{ribbon}</div>
    </div>
  );
  const intro = (
    <div style={{ order: imgRight ? 1 : 0 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fcl-oxblood)', marginBottom: 12 }}>Oferta {n}</div>
      <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 'clamp(22px,2.6vw,32px)', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '0 0 14px', color: 'var(--fcl-ink)' }}>
        {lead} <span className="fcl-accent">{leadAccent}</span>
      </h3>
      <p style={{ fontSize: 15, color: 'var(--fcl-ink-soft)', margin: 0 }}>{body}</p>
    </div>
  );
  return (
    <div style={{ borderTop: '1px solid var(--fcl-ink)', borderBottom: last ? '1px solid var(--fcl-ink)' : 'none', paddingTop: 30, paddingBottom: last ? 36 : 0, marginBottom: last ? 0 : 46 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(258px,1fr))', gap: 'clamp(20px,3vw,44px)', alignItems: 'center', marginBottom: 30 }}>
        {imgRight ? <>{intro}{head}</> : <>{head}{intro}</>}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14 }}>{cards}</div>
    </div>
  );
}

/* ── EDIT ME ──────────────────────────────────────────────────────────────
   Upcoming group-workshop sessions. To set availability, change `status`:
     'open' = bookable (shows Zarezerwuj)   'full' = no seats   'soon' = TBA
   Reorder / add / remove rows freely. ────────────────────────────────────── */
const WORKSHOP_SLOTS = [
  { title: 'Identyfikuj inside out — grupowy', date: '14.10.2026', time: '10:00–14:00', format: 'Online', price: '890 zł', status: 'open' },
  { title: 'Jak zbudować klienta powracającego', date: '21.11.2026', time: '11:00–15:00', format: 'Warszawa', price: '1 200 zł', status: 'open' },
  { title: 'Identyfikuj inside out — grupowy', date: '05.09.2026', time: '10:00–14:00', format: 'Online', price: '890 zł', status: 'full' },
  { title: 'Warsztat retencji — wersja in-house', date: 'termin do ustalenia', time: '—', format: 'In-house', price: 'wycena', status: 'soon' },
];

function bookSlot(slot) {
  const msg = document.getElementById('c-msg');
  if (msg) {
    msg.value = `Rezerwacja terminu: ${slot.title} — ${slot.date}, ${slot.time} (${slot.format}).`;
    msg.dispatchEvent(new Event('input', { bubbles: true }));
  }
  const target = document.getElementById('kontakt');
  if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
  setTimeout(() => { const f = document.getElementById('c-name'); if (f) f.focus(); }, 600);
}

function WorkshopSlots() {
  const meta = {
    open: { label: 'Wolne miejsca', color: 'var(--fcl-oxblood)' },
    full: { label: 'Brak miejsc', color: 'var(--fcl-taupe)' },
    soon: { label: 'Wkrótce', color: 'var(--fcl-blue-ink)' },
  };
  return (
    <div style={{ borderTop: '1px solid var(--fcl-ink)', paddingTop: 30, marginBottom: 46 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fcl-oxblood)' }}>Najbliższe terminy · warsztaty grupowe</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.06em', color: 'var(--fcl-taupe)' }}>miejsca aktualizowane na bieżąco</div>
      </div>
      <div style={{ border: '1px solid var(--fcl-ink)' }}>
        {WORKSHOP_SLOTS.map((s, i) => {
          const m = meta[s.status] || meta.soon;
          const dim = s.status !== 'open';
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2vw,28px)', flexWrap: 'wrap', padding: '16px 18px', borderBottom: i < WORKSHOP_SLOTS.length - 1 ? '1px solid var(--fcl-hairline)' : 'none', opacity: dim ? 0.62 : 1 }}>
              <div style={{ flex: 'none', minWidth: 96, fontFamily: 'var(--font-mono)' }}>
                <div style={{ fontSize: 13, color: 'var(--fcl-ink)', letterSpacing: '0.02em' }}>{s.date}</div>
                <div style={{ fontSize: 10.5, color: 'var(--fcl-taupe)', marginTop: 3 }}>{s.time}</div>
              </div>
              <div style={{ flex: '2 1 220px', minWidth: 180 }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--fcl-ink)', lineHeight: 1.25 }}>{s.title}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fcl-taupe)', marginTop: 5 }}>{s.format}</div>
              </div>
              <div style={{ flex: 'none', minWidth: 70, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fcl-ink)' }}>{s.price}</div>
              <div style={{ flex: 'none', marginLeft: 'auto' }}>
                {s.status === 'open'
                  ? <Button variant="primary" shape="box" size="sm" onClick={() => bookSlot(s)}>Zarezerwuj</Button>
                  : <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: m.color }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: m.color }}></span>{m.label}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Offer() {
  return (
    <section id="oferta" style={{ borderBottom: '1px solid var(--fcl-ink)', padding: 'clamp(72px,10vw,128px) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)' }}>
        <EyebrowLabel style={{ marginBottom: 22 }}>04 — Oferta</EyebrowLabel>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 200, fontSize: 'clamp(30px,4.4vw,56px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: '0 0 14px', color: 'var(--fcl-ink)' }}>
          Co możemy zrobić <span className="fcl-accent">dla Twojej marki?</span>
        </h2>
        <p style={{ fontSize: 17, color: 'var(--fcl-ink-soft)', maxWidth: '60ch', margin: '0 0 56px' }}>Wychodzimy od Twojej potrzeby. Wybierz scenariusz, a jeśli żaden nie pasuje idealnie, po prostu do nas napisz.</p>

        <OfferBlock n="01" lead="Chcesz" leadAccent="zorganizować szkolenie w firmie?"
          body="Format zamknięty, dopasowany do zespołu i case'ów z Twojego portfolio."
          img="./assets/warsztat_lamelu_ewa_daleko.jpg" ribbon="Z warsztatu"
          cards={<>
            <OfferCard badge="Otwarte zapisy" badgeTone="outline-oxblood" title="Identyfikuj inside out → in-house" body="Trzymodułowy warsztat zamknięty dla zespołu — o fundamencie identyfikacji marki i przełożeniu jej na produkt." meta="3 moduły · materiały dla zespołu" />
            <OfferCard badge="Stały format" badgeTone="outline-ink" title="1:1 z psycholożką mody w firmie" body="Indywidualne sesje nad konkretną kolekcją, kampanią lub pivotem. Idealne jako pierwszy krok." meta="elastyczny zakres · online lub w biurze" />
          </>} />

        <OfferBlock n="02" imgRight ribbonSide="right" lead="Jesteś" leadAccent="młodą marką, która chce rosnąć?"
          body="Praktyczne formaty grupowe — zyskujesz fundamenty psychologiczne razem z innymi founderkami, bez agencyjnych kosztów."
          img="./assets/warsztat_lamelu_ewa2.jpg" ribbon="Praca grupowa"
          cards={<>
            <OfferCard badge="Otwarte zapisy" badgeTone="outline-oxblood" title="Identyfikuj inside out → grupowy" body="Ten sam trzymodułowy warsztat w wersji grupowej. Wyjdziesz z gotową strategią identyfikacji opartą na badaniach." meta="grupa otwarta · networking founderek" />
            <OfferCard badge="Nadchodzące" badgeTone="solid-oxblood" title="Jak zbudować klienta powracającego" body="Profilowanie, UX zakupowy, komunikacja i element projektowy — spięte w jeden system retencji." meta="w przygotowaniu · napisz po termin" />
            <OfferCard badge="Opcja indywidualna" badgeTone="outline-ink" title="Praca u Ciebie — na Twoim case'ie" body="Konsultacje, mini-badanie i strategia w skali małej marki. Zakres i tempo ustalamy razem." meta="dopasowane do budżetu" />
          </>}
          overrideImgStyle={{ objectPosition: 'right 55%', transform: 'scale(1.25) translateX(50px)' }} />

        <WorkshopSlots />

        <OfferBlock n="03" last lead="Szukasz pomysłu na" leadAccent="innowacyjny event?"
          body="Robimy eventy badawczo-PRowe: spotkania, w których uczestniczki zostawiają Ci insighty, a Ty budujesz społeczność. Każdy format budujemy pod markę — tak jak przy Rilke, Lamelu i Olas."
          img="./assets/lamelu_czerwien_zdala.jpg" ribbon="Z eventu"
          cards={<>
            <OfferCard badge="Format dopracowany" badgeTone="outline-oxblood" title="Event PRowo-badawczy — badanie w formacie spotkania" body="Łączy badanie konsumenckie, networking i PR w jednym wydarzeniu. Pełen cykl: scenariusz, rekrutacja, facylitacja, raport." meta="zrealizowany m.in. dla Rilke, Lamelu i Olas" />
            <OfferCard badge="Szyte na miarę" badgeTone="outline-ink" title="Format dopasowany do Twojej marki" body="Od tematu badawczego, przez scenariusz, po miejsce — bielizna, marynarki czy sukienki. Event projektujemy pod produkt i społeczność." meta="online lub stacjonarnie · Warszawa i dalej" />
            <OfferCard badge="Działania PR-owe" badgeTone="solid-oxblood" title="Zaproś nas na swój event" body="Wystąpienia, panele i prowadzenie warsztatów na wydarzeniu Twojej marki — treści atrakcyjne dla mediów i społeczności." meta="format ustalany pod event" />
          </>} />
      </div>
    </section>
  );
}
window.Offer = Offer;
