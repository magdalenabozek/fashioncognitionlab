/* FCL Website UI kit — Case study OLAS: od badania do tożsamości marki.
   Scroll-driven story in 4 chapters: Badanie → Wyniki → Tożsamość → Wdrożenie.
   Counters animate on scroll; IG screenshots show the real-world implementation. */

function useCsInView(rootMargin = '0px 0px -18% 0px') {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const fire = () => { if (!done) { done = true; setShown(true); cleanup(); } };
    const check = () => { const r = el.getBoundingClientRect(); if (r.top < (window.innerHeight || 800) * 0.85 && r.bottom > 0) fire(); };
    const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) fire(); }); }, { threshold: 0, rootMargin });
    io.observe(el);
    window.addEventListener('scroll', check, { passive: true });
    check();
    function cleanup() { io.disconnect(); window.removeEventListener('scroll', check); }
    return cleanup;
  }, []);
  return [ref, shown];
}

function CsCounter({ to, suffix = '%', shown, duration = 1600 }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!shown) return;
    let raf; const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown]);
  return <span>{val}{suffix}</span>;
}

function CsChapter({ label, children }) {
  const [ref, shown] = useCsInView();
  return (
    <div ref={ref} style={{ opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(28px)', transition: 'opacity 1.1s var(--ease), transform 1.1s var(--ease)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 'clamp(22px,3vw,34px)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fcl-oxblood)', whiteSpace: 'nowrap' }}>{label}</span>
        <span style={{ flex: 1, height: 1, background: 'var(--fcl-hairline)' }}></span>
      </div>
      {children}
    </div>
  );
}

function CsPhone({ src, alt, rotate = 0, width = 'clamp(180px,22vw,250px)', caption }) {
  return (
    <figure style={{ margin: 0, width, flexShrink: 0, transform: `rotate(${rotate}deg)` }}>
      <div style={{ border: '1px solid var(--fcl-ink)', background: '#111', padding: 5, boxShadow: '0 22px 44px -26px rgba(26,21,20,0.45)' }}>
        <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: 'auto' }} />
      </div>
      {caption ? <figcaption style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.05em', color: 'var(--fcl-taupe)', marginTop: 10, lineHeight: 1.5 }}>{caption}</figcaption> : null}
    </figure>
  );
}

function CaseStudy() {
  const [statsRef, statsShown] = useCsInView();
  const stats = [
    { to: 63, suffix: '%', l: 'uczestniczek odczuło wzrost pewności siebie w sukienkach OLAS' },
    { to: 44, suffix: '%', l: 'podniosło ocenę komfortu kobiecości — zdarzały się skoki z 1 do 7' },
    { to: 70, suffix: '%', pre: '37% →', l: 'wysokie oceny akceptacji własnego ciała (6–7 na 7) po przymiarce' },
  ];
  const uses = [
    { a: 'Strategia marki', d: 'Archetyp, pozycjonowanie świadomego premium, segmentacja klientek na 3 profile psychologiczne.' },
    { a: 'Komunikacja', d: 'Storytelling „Kobiety OLAS” — postać, z którą klientki chcą się utożsamiać: co czyta, czym żyje, jak mówi.' },
    { a: 'Social media', d: 'Insighty z badania jako gotowy content — wspólne posty OLAS × FCL, język siły i kobiecości w każdym poście.' },
    { a: 'Design ubrań', d: 'Forma steruje emocjami: strukturalne kroje → stanowczość i siła, miękkie → zmysłowość. Czerwień = siła.' },
    { a: 'Sesje i wizual', d: 'Estetyka premium z vibe’em lat 70 — aspiracyjny obraz „kobiety premium”, nie casualowej dziewczyny.' },
    { a: 'PR i marketing', d: 'Działania dopełniające wizerunek: miejsca, marki i osoby, którymi marka się otacza.' },
  ];
  return (
    <section id="case-study" style={{ borderBottom: '1px solid var(--fcl-ink)', padding: 'clamp(72px,10vw,128px) 0', background: 'var(--fcl-paper-card)' }}>
      <style>{`@media (max-width:720px){.cs-identity-grid{grid-template-columns:1fr !important}}`}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)' }}>

        <EyebrowLabel style={{ marginBottom: 22 }}>02 — Case study: OLAS</EyebrowLabel>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 200, fontSize: 'clamp(30px,4.6vw,60px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: '0 0 14px', color: 'var(--fcl-ink)' }}>
          Ile marka może wyciągnąć <span className="fcl-accent">z jednego eventu?</span>
        </h2>
        <p style={{ fontSize: 17, color: 'var(--fcl-ink-soft)', maxWidth: '62ch', margin: '0 0 clamp(48px,6vw,84px)' }}>
          Wróćmy do jednego z projektów z portfolio powyżej. Jeden event badawczy z marką OLAS — od przymiarek w butiku po nowy język, którym marka mówi dziś na Instagramie.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(56px,7vw,96px)' }}>

          {/* 01 — BADANIE */}
          <CsChapter label="Etap 01 · Badanie">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(28px,4vw,56px)', alignItems: 'center' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(19px,2.2vw,26px)', lineHeight: 1.32, margin: '0 0 14px', color: 'var(--fcl-ink)' }}>
                  Klientki przymierzały sukienki — a my mierzyłyśmy, co dzieje się w środku.
                </p>
                <p style={{ fontSize: 15, color: 'var(--fcl-ink-soft)', margin: 0 }}>
                  Dwuetapowa ankieta psychologiczna przed i po przymiarce (n=16), obserwacja mowy ciała i wywiady — podczas kameralnego eventu w butiku. Bez laboratorium, w realnym kontakcie z ubraniem.
                </p>
              </div>
              <div style={{ border: '1px solid var(--fcl-ink)', overflow: 'hidden', minHeight: 260, position: 'relative' }}>
                <img src="assets/olas_dwor.jpg" alt="Event badawczy OLAS" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, background: 'var(--fcl-blue)', color: 'var(--fcl-ink)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 11px', borderRight: '1px solid var(--fcl-ink)', borderBottom: '1px solid var(--fcl-ink)' }}>teren · lato 2025</div>
              </div>
            </div>
            <div style={{ marginTop: 'clamp(18px,2.6vw,28px)', borderLeft: '2px solid var(--fcl-oxblood)', paddingLeft: 'clamp(16px,2.4vw,28px)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fcl-oxblood)', display: 'block', marginBottom: 8 }}>JAK FASHION COGNITION LAB ZROBI TO ZA CIEBIE</span>
              <p style={{ fontSize: 14.5, color: 'var(--fcl-ink-soft)', margin: 0, lineHeight: 1.6, maxWidth: '72ch' }}>
                Zanim zadamy pierwsze pytanie, przechodzimy przez setki badań z psychologii mody — enclothed cognition, wpływ formy, koloru i materiału na psychikę — i dopasowujemy je do tej konkretnej marki i tych konkretnych ubrań. Dopiero wtedy powstają pytania, które wyciągają sedno: co te ubrania naprawdę robią dla Twoich klientek.
              </p>
            </div>
          </CsChapter>

          {/* 02 — WYNIKI */}
          <CsChapter label="Etap 02 · Wyniki">
            <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', border: '1px solid var(--fcl-ink)', background: 'var(--fcl-paper)' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ padding: 'clamp(22px,3vw,34px)', borderRight: i < stats.length - 1 ? '1px solid var(--fcl-hairline)' : 'none', borderBottom: '1px solid transparent' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 200, fontSize: 'clamp(42px,5vw,64px)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--fcl-oxblood)' }}>
                    {s.pre ? <span style={{ fontSize: '0.45em', color: 'var(--fcl-taupe)', letterSpacing: 0, marginRight: 8, verticalAlign: 'middle' }}>{s.pre}</span> : null}
                    <CsCounter to={s.to} suffix={s.suffix} shown={statsShown} />
                  </div>
                  <p style={{ fontSize: 13.5, color: 'var(--fcl-ink-soft)', margin: '12px 0 0', lineHeight: 1.5 }}>{s.l}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.05em', color: 'var(--fcl-taupe)', margin: '14px 0 0' }}>
              Do tego: bardziej wyprostowana postawa, płynniejszy ruch, forma ubrania sterująca emocjami — miękka → zmysłowość, strukturalna → stanowczość.
            </p>
          </CsChapter>

          {/* 03 — RAPORT: wiele pieczeni na jednym ogniu */}
          <CsChapter label="Etap 03 · Raport">
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.85fr) minmax(0,1.15fr)', gap: 'clamp(24px,4vw,56px)', alignItems: 'start' }} className="cs-identity-grid">
              <div style={{ position: 'sticky', top: 90 }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(22px,2.8vw,34px)', lineHeight: 1.25, margin: '0 0 16px', color: 'var(--fcl-ink)' }}>
                  Jeden event.<br />Jeden raport.<br /><span className="fcl-accent">Paliwo dla całej marki.</span>
                </p>
                <p style={{ fontSize: 15, color: 'var(--fcl-ink-soft)', margin: 0, maxWidth: '40ch' }}>
                  Z danych zebranych podczas jednego spotkania z klientkami powstał raport, który OLAS wdraża w każdym obszarze marki — spójnie, bo wszystko wynika z tych samych danych.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', border: '1px solid var(--fcl-ink)', background: 'var(--fcl-paper)' }}>
                {uses.map((u, i) => (
                  <div key={i} style={{ padding: 'clamp(18px,2.4vw,26px)', borderRight: '1px solid var(--fcl-hairline)', borderBottom: '1px solid var(--fcl-hairline)', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fcl-taupe)', letterSpacing: '0.08em' }}>0{i + 1}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fcl-oxblood)' }}>{u.a}</span>
                    </div>
                    <p style={{ fontSize: 13.5, color: 'var(--fcl-ink-soft)', margin: 0, lineHeight: 1.55 }}>{u.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 'clamp(20px,3vw,32px)', border: '1px solid var(--fcl-ink)', background: 'var(--fcl-blue)', padding: 'clamp(24px,3.4vw,40px)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 'clamp(18px,3vw,40px)', alignItems: 'center' }} className="cs-identity-grid">
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(20px,2.4vw,28px)', lineHeight: 1.3, margin: 0, color: 'var(--fcl-ink)' }}>
                A jedna rzecz nie mieści się w żadnym raporcie: <span style={{ color: 'var(--fcl-oxblood)' }}>więź</span>.
              </p>
              <p style={{ fontSize: 14.5, color: 'var(--fcl-ink)', margin: 0, lineHeight: 1.6 }}>
                Klientki wychodzą z eventu z czymś, czego nie da im żadna kampania: wiedzą, co ubrania realnie dla nich robią, czują się wysłuchane i zaopiekowane — a marka, która im to dała, przestaje być jedną z wielu. Tej relacji nie da się kupić ani skopiować.
              </p>
            </div>
          </CsChapter>

          {/* 04 — WDROŻENIE */}
          <CsChapter label="Etap 04 · Wdrożenie">
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(19px,2.2vw,26px)', lineHeight: 1.32, margin: '0 0 clamp(28px,4vw,44px)', color: 'var(--fcl-ink)', maxWidth: '52ch' }}>
              Marka nie dostała segregatora do szuflady. OLAS mówi dziś językiem swoich klientek — publicznie.
            </p>
            <div style={{ display: 'flex', gap: 'clamp(16px,2.5vw,30px)', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
              <CsPhone src="assets/olas_ig_grid.jpg" alt="Profil OLAS na Instagramie" rotate={-1.2} caption="Spójny feed: premium, siła, lata 70." />
              <CsPhone src="assets/olas_ig_post_premiera.jpg" alt="Post premierowy OLAS" rotate={0.8} caption="Komunikacja kolekcji wg nowej tożsamości." />
              <CsPhone src="assets/olas_ig_fcl_post1.jpg" alt="Wspólny post OLAS x FCL o sile" rotate={-0.6} caption="Insighty z badania jako content — OLAS × FCL." />
            </div>
          </CsChapter>

        </div>

        {/* Zamknięcie */}
        <div style={{ marginTop: 'clamp(56px,7vw,90px)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.3, margin: '0 0 26px', color: 'var(--fcl-ink)' }}>
            Tak wygląda marka, która <span className="fcl-accent">zna swoją klientkę</span>.
          </p>
          <Button href="#kontakt">Porozmawiajmy o Twojej marce</Button>
        </div>

      </div>
    </section>
  );
}

window.CaseStudy = CaseStudy;
