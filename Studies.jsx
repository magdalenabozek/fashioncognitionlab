/* FCL Website UI kit — Studies / research results.
   Each study is an expandable "dossier": hover (desktop) or tap (touch) expands a
   drawer revealing a photo gallery + a research spec block, with the hero zooming. */
function StudyDossier({ n, name, kind, quote, body, stats, hero, heroFit = 'cover', gallery = [], spec = [], imgRight, last }) {
  const [hover, setHover] = React.useState(false);
  const [pin, setPin] = React.useState(false);
  const open = hover || pin;

  const heroBox = (
    <div style={{ position: 'relative', border: '1px solid var(--fcl-ink)', minHeight: 320, overflow: 'hidden', order: imgRight ? 2 : 0 }}>
      <img src={hero} alt={name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 65%', transform: open ? 'scale(1.002)' : 'scale(1)', transition: 'transform 1s var(--ease)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, background: 'var(--fcl-blue)', color: 'var(--fcl-ink)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 11px', borderRight: '1px solid var(--fcl-ink)', borderBottom: '1px solid var(--fcl-ink)' }}>Studium · {name}</div>
    </div>
  );
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', order: imgRight ? 1 : 0 }}>
      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(18px,2.1vw,24px)', lineHeight: 1.32, color: 'var(--fcl-ink)', margin: '0 0 12px' }}>{quote}</p>
      <p style={{ fontSize: 14.5, color: 'var(--fcl-ink-soft)', margin: '0 0 24px' }}>{body}</p>
      <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 0, border: '1px solid var(--fcl-ink)' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ flex: 1, minWidth: 110, padding: '15px 16px', borderRight: i < stats.length - 1 ? '1px solid var(--fcl-hairline)' : 'none' }}>
            <StatBlock value={s.v} label={s.l} size="sm" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ borderTop: '1px solid var(--fcl-ink)', borderBottom: last ? '1px solid var(--fcl-ink)' : 'none', padding: '30px 0 34px', background: open ? 'var(--fcl-paper-card)' : 'transparent', transition: 'background 0.7s var(--ease)' }}
    >
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap', marginBottom: 26 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 200, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 0.85, letterSpacing: '-0.03em', color: 'var(--fcl-oxblood)', transform: open ? 'translateY(-2px)' : 'none', transition: 'transform 0.7s var(--ease)' }}>{n}</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 'clamp(19px,2.2vw,26px)', lineHeight: 1, color: 'var(--fcl-ink)' }}>{name}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fcl-taupe)' }}>{kind}</span>
          </div>
        </div>
        <button
          onClick={() => setPin((p) => !p)}
          aria-expanded={open}
          style={{ cursor: 'pointer', background: 'transparent', border: 'none', padding: '6px 0', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fcl-oxblood)', display: 'inline-flex', alignItems: 'center', gap: 9 }}
        >
          <span style={{ display: 'inline-block', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.7s var(--ease)' }}>▸</span>
          {open ? 'zwiń' : 'zobacz więcej'}
        </button>
      </div>
      {/* accent bar */}
      <div style={{ height: 2, background: 'var(--fcl-hairline)', marginBottom: 26, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: open ? '100%' : '0%', background: 'var(--fcl-oxblood)', transition: 'width 0.9s var(--ease)' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(24px,4vw,56px)', alignItems: 'stretch' }}>
        {imgRight ? <>{text}{heroBox}</> : <>{heroBox}{text}</>}
      </div>

      {/* expanding drawer: gallery + spec */}
      <div style={{ overflow: 'hidden', maxHeight: open ? 1600 : 0, transition: 'max-height 1.05s var(--ease)' }}>
        <div style={{ minHeight: 0 }}>
          <div style={{ paddingTop: 28, display: 'grid', gridTemplateColumns: 'minmax(0,1.45fr) minmax(0,1fr)', gap: 'clamp(20px,3vw,40px)', alignItems: 'stretch' }}>
            {/* photo gallery */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {gallery.map((g, i) => (
                <div key={i} style={{ position: 'relative', flex: '1 1 150px', minWidth: 130, aspectRatio: '4 / 5', border: '1px solid var(--fcl-ink)', overflow: 'hidden', opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(16px)', transition: `opacity 0.5s var(--ease) ${0.12 + i * 0.1}s, transform 0.5s var(--ease) ${0.12 + i * 0.1}s` }}>
                  <img src={g.src} alt={g.cap || name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  {g.cap && <div style={{ position: 'absolute', bottom: 0, left: 0, background: 'var(--fcl-paper)', color: 'var(--fcl-ink)', fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 8px', borderTop: '1px solid var(--fcl-ink)', borderRight: '1px solid var(--fcl-ink)' }}>{g.cap}</div>}
                </div>
              ))}
            </div>
            {/* spec block */}
            <div style={{ border: '1px solid var(--fcl-ink)', background: 'var(--fcl-paper)', alignSelf: 'start', opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.5s var(--ease) 0.18s, transform 0.5s var(--ease) 0.18s' }}>
              <div style={{ background: 'var(--fcl-ink)', color: 'var(--fcl-paper)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '9px 16px' }}>Karta badania</div>
              {spec.map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '11px 16px', borderBottom: i < spec.length - 1 ? '1px solid var(--fcl-hairline)' : 'none', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
                  <span style={{ color: 'var(--fcl-taupe)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.k}</span>
                  <span style={{ color: 'var(--fcl-ink)', textAlign: 'right' }}>{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Studies() {
  const logos = [
    'https://static.wixstatic.com/media/cf5ada_c66ae2a7c42e40ecbe2db87297b7f242~mv2.png',
    'https://static.wixstatic.com/media/cf5ada_f0dd00d3b1614a71927bea60683ee62d~mv2.png',
    'https://static.wixstatic.com/media/cf5ada_7a2c7a9b084c44fa9cbced0ad304afdb~mv2.png',
    './assets/logo_pmm.png',
  ];
  return (
    <section id="realizacje" style={{ borderBottom: '1px solid var(--fcl-ink)', padding: 'clamp(72px,10vw,128px) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
          <div>
            <EyebrowLabel style={{ marginBottom: 22 }}>01 — Portfolio / badania</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 200, fontSize: 'clamp(30px,4.6vw,60px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0, color: 'var(--fcl-ink)' }}>
              Co pokazały nasze <span className="fcl-accent"><SquiggleUnderline>badania</SquiggleUnderline></span>.
            </h2>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fcl-taupe)', letterSpacing: '0.08em', textAlign: 'right' }}>
            n = 03 studia · 2024—2026<br /><span style={{ color: 'var(--fcl-oxblood)' }}>↳ najedź, by zobaczyć więcej</span>
          </div>
        </div>

        {/* collaborators */}
        <div style={{ borderTop: '1px solid var(--fcl-ink)', padding: '30px 0', display: 'flex', alignItems: 'center', gap: 'clamp(20px,4vw,48px)', flexWrap: 'nowrap' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fcl-taupe)', flex: 'none', maxWidth: 130 }}>— Współpracowali z nami —</div>
          <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%)', maskImage: 'linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(56px,7vw,104px)', width: 'max-content', animation: 'fclscroll 26s linear infinite' }}>
              {[...logos, ...logos].map((src, i) => (
                <img key={i} src={src} alt="" style={{ width: 'auto', height: 110, objectFit: 'contain', filter: 'grayscale(1)', opacity: 0.78, flex: 'none' }} />
              ))}
            </div>
          </div>
        </div>

        <StudyDossier n="01" name="Rilke" kind="Event PR + badanie"
          quote="Czy wiesz, ze gdy zakładasz piękną bielizną, zmienia się wygląd Twojej twarzy?"
          body="90%+ uczestniczek uznało kobietę w bieliźnie Rilke za atrakcyjniejszą. Badanie w formacie spotkania — dane, społeczność i PR w jednym wydarzeniu."
          hero="./assets/rilke_event2.jpg"
          stats={[{ v: '+20,7%', l: 'pewność siebie' }, { v: '+23%', l: 'sprawczość' }, { v: '~20%', l: 'ekspresja' }]}
          gallery={[
            { src: './assets/rilke_event_wyniki.jpg', cap: 'BADANIE' },
            { src: './assets/rilke_butik.jpg', cap: 'PRZYMIARKI' },
            { src: './assets/rilke_kolaz_dziewczyny.jpg', cap: 'branding' },
          ]}
          spec={[
            { k: 'Metoda', v: 'Mixed-methods' },
            { k: 'Format', v: 'Event PRowo-badawczy' },
            { k: 'Próba', v: 'n = 40 uczestniczek' },
            { k: 'Deliverable', v: 'Raport + insighty PR' },
          ]} />

        <StudyDossier n="02" name="Lamelu" kind="Badanie eksperymentalne" imgRight
          quote="Jak forma, struktura i materiał marynarki zmieniają pewność siebie i postawę ciała?"
          body="Efekt najsilniejszy przy strukturalnych sylwetkach. Wyłoniliśmy trzy profile psychologiczne klientek marki."
          hero="./assets/lamelu_main.jpg"
          stats={[{ v: '+63%', l: 'pewność siebie' }, { v: '3', l: 'profile klientek' }, { v: 'up', l: 'sylwetki' }]}
          gallery={[
            { src: './assets/lamelu_wieszak.jpg', cap: 'PRZYMIARKI' },
            { src: './assets/lamelu_main_conference.jpg', cap: 'EVENT' },
            { src: './assets/lamelu_warsztat.jpg', cap: 'WARSZTATY' },
          ]}
          spec={[
            { k: 'Metoda', v: 'Eksperyment + wywiady' },
            { k: 'Format', v: 'Sesja badawcza' },
            { k: 'Wynik', v: '3 profile klientek' },
            { k: 'Deliverable', v: 'Segmentacja + rekomendacje' },
          ]} />

        <StudyDossier n="03" name="Olas" kind="Badanie + tożsamość marki" last
          quote="OLAS sprawia, że siła staje się naturalna."
          body="Kobiety w OLAS czują się silne bez utraty kobiecości — stoją wyżej, poruszają się płynniej, pewniej mówią ciałem. Z tych insightów zbudowałyśmy tożsamość marki."
          hero="./assets/Olas_sukienka_zbliska.jpg"
          stats={[{ v: '≈70%', l: 'komfort kobiecości' }, { v: 'up', l: 'akceptacja ciała' }, { v: 'done', l: 'wdrożone' }]}
          gallery={[
            { src: './assets/olas_dwor.jpg', cap: 'WYKŁADY' },
            { src: './assets/olas_tlo.jpg', cap: 'PRZYMIARKI' },
            { src: './assets/Olas_dziewczyny1.jpg', cap: 'warsztat' },
          ]}
          spec={[
            { k: 'Metoda', v: 'Badanie jakościowe' },
            { k: 'Format', v: 'Warsztat tożsamości' },
            { k: 'Wynik', v: 'Strategia marki' },
            { k: 'Deliverable', v: 'Tożsamość + segmentacja' },
          ]} />
      </div>
    </section>
  );
}
window.Studies = Studies;
