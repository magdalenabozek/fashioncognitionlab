/* FCL Website UI kit — Value model (concentration pyramid)
   Scroll-triggered reveal: tiers rise bottom→top (top = most important, lands last),
   score bars grow, numeric scores count up, and a left "measure rail" climbs to the peak.
   Lighter/flatter than the old hard-offset shadows. */

function useCountUp(target, shown, delay) {
  const isNum = /^\d+$/.test(String(target));
  const [val, setVal] = React.useState(isNum ? 0 : target);
  React.useEffect(() => {
    if (!shown || !isNum) return;
    const end = parseInt(target, 10);
    const dur = 3000;
    let raf, start;
    const t = setTimeout(() => {
      const tick = (now) => {
        if (!start) start = now;
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(end * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay * 1000);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [shown]);
  return isNum ? val : target;
}

function ValueTier({ n, title, sub, score, fill, surface, step, shown, top }) {
  const surfaces = {
    ink:  { background: 'var(--fcl-oxblood)', color: 'var(--fcl-paper)', mr: 0 },
    blue: { background: 'var(--fcl-blue-deep)', color: 'var(--fcl-ink)', mr: '9%' },
    card: { background: 'var(--fcl-paper-card)', color: 'var(--fcl-ink)', mr: '18%' },
    base: { background: 'transparent', color: 'var(--fcl-ink)', mr: '27%' },
  };
  const s = surfaces[surface];
  const delay = step * 0.48;             // bottom (step 0) first → top (step 3) last
  const barDelay = delay + 1.2;
  const display = useCountUp(score, shown, barDelay);

  const reveal = {
    opacity: shown ? 1 : 0,
    transform: shown ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 2s var(--ease) ${delay}s, transform 2s var(--ease) ${delay}s, box-shadow 2s var(--ease) ${delay}s`,
  };

  return (
    <div
      className={top && shown ? 'fcl-vm-top' : undefined}
      style={{
        position: 'relative', overflow: 'hidden',
        border: '1px solid var(--fcl-ink)',
        background: s.background, color: s.color,
        padding: '22px 26px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 18,
        marginRight: s.mr,
        boxShadow: top && shown ? '0 16px 34px -22px rgba(94,24,3,0.6)' : 'none',
        ...reveal,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', opacity: 0.7 }}>{n}</span>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(16px,1.7vw,21px)' }}>{title}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.06em', opacity: 0.8, marginTop: 5 }}>{sub}</div>
        </div>
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 200, fontSize: 'clamp(22px,3vw,40px)', lineHeight: 1, letterSpacing: '-0.03em', flex: 'none', color: surface === 'ink' ? 'var(--fcl-paper)' : 'var(--fcl-oxblood)' }}>{display}</div>
      <div style={{ position: 'absolute', left: 0, bottom: 0, height: 4, width: '100%', background: surface === 'ink' ? 'rgba(244,239,230,0.2)' : 'rgba(26,21,20,0.08)' }}>
        <div style={{ height: '100%', width: shown ? fill : '0%', background: surface === 'ink' ? 'var(--fcl-paper)' : surface === 'base' ? 'var(--fcl-taupe)' : 'var(--fcl-oxblood)', transition: `width 2.6s var(--ease) ${barDelay}s` }}></div>
      </div>
    </div>
  );
}

function ValueModel() {
  const ref = React.useRef(null);
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [shown, setShown] = React.useState(reduce);

  React.useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;
    let done = false;
    const fire = () => { if (!done) { done = true; setShown(true); cleanup(); } };
    const check = () => { const r = el.getBoundingClientRect(); if (r.top < (window.innerHeight || 800) * 0.85 && r.bottom > 0) fire(); };
    const io = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) fire(); }); }, { threshold: 0, rootMargin: '0px 0px -15% 0px' });
    io.observe(el);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    function cleanup() { io.disconnect(); window.removeEventListener('scroll', check); window.removeEventListener('resize', check); }
    check();
    return cleanup;
  }, []);

  return (
    <section id="model" style={{ background: 'var(--fcl-blue)', borderBottom: '1px solid var(--fcl-ink)', padding: 'clamp(72px,10vw,128px) 0' }}>
      <style>{`@keyframes fclVmPulse{0%,100%{box-shadow:0 14px 32px -22px rgba(26,21,20,0.5)}50%{box-shadow:0 20px 44px -20px rgba(94,24,3,0.6)}}.fcl-vm-top{animation:fclVmPulse 3.6s var(--ease) 0.9s infinite}`}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)' }}>
        <EyebrowLabel color="var(--fcl-oxblood)" style={{ marginBottom: 'clamp(32px,4vw,52px)' }}>03 — Na czym konkurują marki</EyebrowLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.82fr) minmax(0,1.18fr)', gap: 'clamp(36px,6vw,88px)', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(38px,5.4vw,68px)', lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--fcl-ink)' }}>Jakość i estetyka</div>
            <div className="fcl-accent" style={{ fontSize: 'clamp(38px,5.4vw,68px)', lineHeight: 1.04, letterSpacing: '-0.02em' }}>
              <SquiggleUnderline>to dziś za mało.</SquiggleUnderline>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: '#27343a', margin: '26px 0 0', maxWidth: '44ch' }}>
              Moda się zmienia, a marki wciąż konkurują głównie jakością, estetyką i brandingiem. Najmocniejsza — i <span className="fcl-accent">najtrudniejsza do skopiowania</span> — warstwa jest wyżej: psychologiczne doświadczenie ubioru.
            </p>
          </div>

          <div ref={ref} style={{ display: 'flex', gap: 18, alignItems: 'stretch' }}>
            {/* measure rail — climbs bottom→top to the peak tier */}
            <div style={{ position: 'relative', width: 2, flex: 'none', background: 'rgba(26,21,20,0.12)' }}>
              <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', background: 'var(--fcl-oxblood)', height: shown ? '100%' : '0%', transition: 'height 3.9s var(--ease) 0.4s' }}></div>
              <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: 9, height: 9, borderRadius: '50%', background: 'var(--fcl-oxblood)', bottom: shown ? 'calc(100% - 5px)' : '-2px', transition: 'bottom 3.9s var(--ease) 0.4s' }}></div>
            </div>

            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <ValueTier step={3} top shown={shown} n="04" surface="ink"  title="Doświadczenie psychologiczne" sub="pewność siebie · sprawczość · emocje" score="MAX" fill="100%" />
              <ValueTier step={2}     shown={shown} n="03" surface="blue" title="Tożsamość i ekspresja" sub="kim klientka staje się w produkcie" score="75" fill="75%" />
              <ValueTier step={1}     shown={shown} n="02" surface="card" title="Estetyka i branding" sub="to, co widać i czym marka się komunikuje" score="50" fill="50%" />
              <ValueTier step={0}     shown={shown} n="01" surface="base" title="Jakość i zrównoważoność" sub="fundament — dziś oczekiwany standard" score="BASE" fill="26%" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 'clamp(30px,3.5vw,48px)', paddingTop: 16, borderTop: '1px solid rgba(26,21,20,0.2)', fontFamily: 'var(--font-mono)', fontSize: 11.5, lineHeight: 1.55, letterSpacing: '0.03em', color: 'var(--fcl-blue-ink)', maxWidth: '64ch' }}>
          ↑ im wyżej w piramidzie, tym trudniej skopiować — i tym silniejsza więź z klientką.
        </div>
      </div>
    </section>
  );
}
window.ValueModel = ValueModel;
