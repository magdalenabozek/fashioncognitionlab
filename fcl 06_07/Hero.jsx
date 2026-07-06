/* FCL Website UI kit — Hero + Marquee + Manifesto */
function Hero() {
  return (
    <header id="top" style={{ borderBottom: '1px solid var(--fcl-ink)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)' }}>
        <SpecBar style={{ borderTop: 'none' }} items={[
          { k: 'Nr', v: 'FCL—2026' },
          { k: 'Dziedzina', v: 'Psychologia mody' },
          { k: 'Metoda', v: 'Eventy badawczo-PR’owe' },
          { k: 'Miejsce', v: 'Warszawa, PL' },
        ]} />
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,7vw,84px) clamp(22px,5vw,56px) clamp(56px,8vw,96px)', display: 'grid', gridTemplateColumns: 'minmax(0,1.55fr) minmax(280px,0.9fr)', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }}>
        <div>
          <EyebrowLabel style={{ marginBottom: 30, letterSpacing: '0.18em' }}>Studio badawczo—kreatywne</EyebrowLabel>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontWeight: 200, fontSize: 'clamp(40px,7.6vw,92px)', lineHeight: 0.98, letterSpacing: '-0.035em', margin: 0, color: 'var(--fcl-ink)' }}>
            Fashion moves <span className="fcl-accent"><SquiggleUnderline>minds</SquiggleUnderline></span>.<br />
            <span style={{ fontWeight: 300 }}>Minds move markets.</span>
          </h1>
          <p style={{ maxWidth: '46ch', fontSize: 18, color: 'var(--fcl-ink-soft)', margin: '30px 0 0' }}>Badamy, jak ubrania zmieniają to, jak ludzie myślą, czują i działają — i przekuwamy to w mierzalne decyzje marek mody.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
            <Button href="#realizacje">Zobacz badania</Button>
            <Button href="#kontakt" variant="outline">Napisz do nas</Button>
          </div>
        </div>

        {/* Active finding specimen panel */}
        <div style={{ border: '1px solid var(--fcl-ink)', background: 'var(--fcl-paper-card)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(./assets/rilke_event1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, zIndex: 0 }}></div>
          <div style={{ background: 'var(--fcl-oxblood)', color: 'var(--fcl-paper)', padding: '11px 18px', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
            <span>Czego uczy nas moda</span><span>fig. 01</span>
          </div>
          <div style={{ padding: '26px 22px 22px', position: 'relative', zIndex: 1 }}>
            <StatBlock value={<span>+20,7<span style={{ fontSize: '0.4em', verticalAlign: 'super', fontWeight: 400 }}>%</span></span>} label="Wzrost pewności siebie" size="lg" />
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, color: 'var(--fcl-ink-soft)', marginTop: 8, lineHeight: 1.4 }}>Ubrania zmieniają sposób, w jaki myślimy, czujemy i działamy — nasze eventy badawcze to eksperyment na tej granicy</div>
            <div style={{ borderTop: '1px solid var(--fcl-hairline)', marginTop: 20, paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[['Studium', 'Rilke'], ['Format', 'Event PR’owo—badawczy'], ['Status', 'Zweryfikowane ▪']].map(([k, v], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, color: i === 2 ? 'var(--fcl-oxblood)' : 'var(--fcl-ink-soft)' }}>
                  <span style={{ color: 'var(--fcl-taupe)' }}>{k.toUpperCase()}</span><span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Marquee items={['Enclothed cognition', 'Badania konsumenckie', 'Eventy PR’owo—badawcze', 'Profilowanie klientek', 'Strategia marki']} style={{ borderTop: '1px solid var(--fcl-ink)' }} />
    </header>
  );
}

function ResearchVoid({ show }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: show ? 1 : 0, transition: 'opacity 1.8s var(--ease) 0.3s' }}>
      <style>{`
        @keyframes fclDrift { to { background-position: 300px 170px; } }
        @keyframes fclSweep { 0% { transform: translateX(-70%); } 50% { transform: translateX(290%); } 100% { transform: translateX(-70%); } }
      `}</style>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(26,21,20,0.55) 1px, transparent 1.7px)', backgroundSize: '30px 30px', WebkitMaskImage: 'radial-gradient(ellipse 60% 74% at 50% 47%, transparent 0%, transparent 33%, #000 72%)', maskImage: 'radial-gradient(ellipse 60% 74% at 50% 47%, transparent 0%, transparent 33%, #000 72%)', opacity: 0.15, animation: 'fclDrift 78s linear infinite' }}></div>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '38%', background: 'linear-gradient(90deg, transparent, rgba(94,24,3,0.07), transparent)', animation: 'fclSweep 14s ease-in-out infinite' }}></div>
    </div>
  );
}

function Manifesto() {
  const ref = React.useRef(null);
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [show, setShow] = React.useState(reduce);
  React.useEffect(() => {
    if (show) return;
    const el = ref.current;
    if (!el) return;
    let done = false;
    const fire = () => { if (!done) { done = true; setShow(true); cleanup(); } };
    const check = () => { const r = el.getBoundingClientRect(); if (r.top < (window.innerHeight || 800) * 0.85 && r.bottom > 0) fire(); };
    const io = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) fire(); }); }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });
    io.observe(el);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    function cleanup() { io.disconnect(); window.removeEventListener('scroll', check); window.removeEventListener('resize', check); }
    check();
    return cleanup;
  }, []);
  const rise = (d) => ({ opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(24px)', transition: `opacity 2.1s var(--ease) ${d}s, transform 2.1s var(--ease) ${d}s` });
  return (
    <section ref={ref} style={{ position: 'relative', background: 'var(--fcl-blue)', borderBottom: '1px solid var(--fcl-ink)', padding: 'clamp(52px,6vw,84px) 0', overflow: 'hidden' }}>
      <ResearchVoid show={show} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 26, ...rise(0) }}><EyebrowLabel>00 — Teza</EyebrowLabel></div>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(22px,2.9vw,36px)', lineHeight: 1.36, letterSpacing: '-0.01em', color: 'var(--fcl-ink)', margin: '0 auto', maxWidth: '24ch', ...rise(0.3) }}>
            Moda to najbardziej <span className="fcl-accent"><SquiggleUnderline draw={show}>wrażliwa</SquiggleUnderline></span> na zmiany psychologiczne branża — a zarazem{' '}
            <span style={{ position: 'relative', color: 'var(--fcl-oxblood)', whiteSpace: 'nowrap' }}>
              <span style={{ position: 'absolute', left: '-0.06em', right: '-0.06em', bottom: '0.04em', height: '0.46em', background: 'rgba(94,24,3,0.18)', transform: show ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'center', transition: 'transform 2.25s var(--ease) 2.4s' }}></span>
              <span style={{ position: 'relative' }}>najmniej zbadana.</span>
            </span>
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.7, color: 'var(--fcl-blue-ink)', maxWidth: '46ch', margin: '22px auto 0', ...rise(0.65) }}>
            Mniej niż <span style={{ color: 'var(--fcl-oxblood)' }}>20 minut</span> dziennie spędzasz nago. O ekranach wiemy więcej niż o tkaninach, które nosisz cały dzień.
          </p>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
window.Manifesto = Manifesto;
