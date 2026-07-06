/* FCL Website UI kit — Researchers / about + Contact + Footer */
function Researchers() {
  const people = [
    { i: 'E', n: 'Ewa', role: 'Founderka · Fashion Psychologist', bio: 'Psycholożka ubioru. Projektuje i prowadzi badania konsumenckie dla marek mody, łącząc enclothed cognition z metodologią mixed-methods.', tags: ['enclothed cognition', 'strategia marki'], rot: -1, mt: 0 },
    { i: 'M', n: 'Magdalena', role: 'Founderka · UX & Brand Strategy', bio: 'Strateżka marki i badaczka UX. Przekłada insighty z badań na doświadczenie klientki, komunikację i kierunek rozwoju marek.', tags: ['user research', 'badania konsumenckie'], rot: 0.8, mt: 'clamp(0px,4vw,44px)' },
    { i: 'S', n: 'Sylwia', role: 'Warsztaty & facylitacja', bio: 'Współprowadzi warsztaty i facylituje eventy badawcze. Dba o to, by wiedza psychologiczna przekładała się na decyzje.', tags: ['creative fashion director', 'fashion design'], rot: -0.6, mt: 'clamp(0px,2vw,18px)' },
  ];
  return (
    <section id="o-nas" style={{ background: 'var(--fcl-oxblood)', color: 'var(--fcl-paper)', borderBottom: '1px solid var(--fcl-ink)', padding: 'clamp(72px,10vw,128px) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)' }}>
        <EyebrowLabel color="var(--fcl-blush)" style={{ marginBottom: 30 }}>05 — Badaczki</EyebrowLabel>
        <div style={{ display: 'flex', gap: 'clamp(28px,5vw,64px)', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: 'clamp(40px,5vw,64px)' }}>
          <h2 style={{ flex: '2 1 320px', fontFamily: 'var(--font-sans)', fontWeight: 200, fontSize: 'clamp(30px,4.4vw,56px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0 }}>
            Łączymy <span className="fcl-accent" style={{ color: 'var(--fcl-blush)' }}>psychologię</span> i praktykę marek.
          </h2>
          <div style={{ flex: '1 1 260px', maxWidth: 480, paddingTop: 8 }}>
            <p style={{ fontSize: 'clamp(17px,1.7vw,20px)', color: 'rgba(244,239,230,0.78)', margin: '0 0 16px' }}>Lata doświadczenia w psychologii ubioru i user research uformowały nasze podejście. Sprawdzamy to, co od dawna czuło się intuicyjnie — i pokazujemy markom, jak to wykorzystać.</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(244,239,230,0.62)' }}>→ dowody: <a href="https://researchportal.bath.ac.uk/files/295047647/PSPB_Enclothed_Cognition_Manuscript_05.23.23.pdf" target="_blank" rel="noopener" style={{ color: 'var(--fcl-blush)', textUnderlineOffset: 3 }}>Horton i in., 2023</a></p>
          </div>
          <div style={{ flex: '1 1 220px', maxWidth: 300, position: 'relative', border: '1px solid var(--fcl-paper)', aspectRatio: '4 / 5', overflow: 'hidden' }}>
            <img src="./assets/about_founders.jpg" alt="Założycielki Fashion Cognition Lab" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(16px,2vw,22px)', alignItems: 'flex-start' }}>
          {people.map((p, k) => (
            <div key={k} style={{ flex: 1, minWidth: 262, background: 'var(--fcl-paper-card)', border: '1px solid var(--fcl-paper)', color: 'var(--fcl-ink)', padding: 28, transform: `rotate(${p.rot}deg)`, marginTop: p.mt }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                <div style={{ width: 50, height: 50, background: 'var(--fcl-blue)', border: '1px solid var(--fcl-ink)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 19, color: 'var(--fcl-ink)' }}>{p.i}</div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--fcl-taupe)' }}>BADACZKA 0{k + 1}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 21, color: 'var(--fcl-ink)' }}>{p.n}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fcl-taupe)', margin: '4px 0 14px' }}>{p.role}</div>
              <p style={{ fontSize: 14, color: 'var(--fcl-ink-soft)', margin: '0 0 14px' }}>{p.bio}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map((t, ti) => (
                  <span key={ti} style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fcl-ink)', background: 'var(--fcl-blue)', padding: '3px 9px' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="kontakt" style={{ borderBottom: '1px solid var(--fcl-ink)', padding: 'clamp(72px,10vw,128px) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,72px)', alignItems: 'start' }}>
        <div>
          <EyebrowLabel style={{ marginBottom: 22 }}>06 — kontakt</EyebrowLabel>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 200, fontSize: 'clamp(30px,4.2vw,54px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: '0 0 20px', color: 'var(--fcl-ink)', maxWidth: '16ch' }}>
            Powiedz nam, <span className="fcl-accent">nad czym pracujesz.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fcl-ink-soft)', maxWidth: '46ch', margin: '0 0 28px' }}>Founderka niezależnej marki czy strateżka w sieciowej firmie — jeśli chcesz głębiej zrozumieć klientkę, odezwij się.</p>
          <a href="mailto:info@fashioncognitionlab.com" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(15px,2vw,20px)', color: 'var(--fcl-oxblood)', textDecoration: 'none', borderBottom: '1px solid var(--fcl-oxblood)', paddingBottom: 4, wordBreak: 'break-word' }}>info@fashioncognitionlab.com</a>
          <div style={{ marginTop: 18 }}>
            <a href="https://www.instagram.com/fashioncognitionlab" target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--fcl-ink)', textDecoration: 'none', borderBottom: '1px solid var(--fcl-hairline)', paddingBottom: 3 }}>@fashioncognitionlab</a>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fcl-taupe)', marginLeft: 10, letterSpacing: '0.04em' }}>— na Instagramie odpisujemy najszybciej</span>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fcl-taupe)', marginTop: 24, letterSpacing: '0.04em' }}>odpowiadamy w ~48h<span style={{ display: 'inline-block', width: 7, height: 14, background: 'var(--fcl-oxblood)', marginLeft: 6, verticalAlign: -2, animation: 'fclblink 1.1s step-end infinite' }}></span></div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); e.target.reset(); }}
          style={{ display: 'flex', flexDirection: 'column', gap: 18, border: '1px solid var(--fcl-ink)', padding: 'clamp(24px,3vw,36px)', background: 'var(--fcl-paper-card)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fcl-taupe)', borderBottom: '1px solid var(--fcl-hairline)', paddingBottom: 12 }}>Formularz intake — FCL/2026</div>
          <Field label="Imię" id="c-name" required />
          <Field label="Email" id="c-email" type="email" required />
          <Field label="Marka / firma" id="c-brand" />
          <Field label="Nad czym pracujesz" id="c-msg" textarea required />
          <Button type="submit" variant="ink" shape="box" style={{ alignSelf: 'flex-start', marginTop: 6 }}>
            {sent ? 'Dziękujemy! Odezwiemy się wkrótce.' : 'Wyślij zgłoszenie'}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '34px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--fcl-taupe)', letterSpacing: '0.04em' }}>
        <div>© 2026 Fashion Cognition Lab · Warszawa</div>
        <div style={{ display: 'flex', gap: 18, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          <a href="#oferta" style={{ textDecoration: 'none', color: 'var(--fcl-taupe)' }}>Oferta</a>
          <a href="#realizacje" style={{ textDecoration: 'none', color: 'var(--fcl-taupe)' }}>Badania</a>
          <a href="https://www.linkedin.com/company/fashion-cognition-lab" target="_blank" rel="noopener" style={{ textDecoration: 'none', color: 'var(--fcl-taupe)' }}>LinkedIn</a>
          <a href="https://www.instagram.com/fashioncognitionlab" target="_blank" rel="noopener" style={{ textDecoration: 'none', color: 'var(--fcl-taupe)' }}>Instagram</a>
        </div>
      </div>
    </footer>
  );
}
window.Researchers = Researchers;
window.Contact = Contact;
window.Footer = Footer;
