/* FCL Website UI kit — Nav */
function Nav() {
  const link = {
    textDecoration: 'none', color: 'var(--fcl-ink-soft)', fontFamily: 'var(--font-mono)',
    fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
  };
  const [h, setH] = React.useState(null);
  const items = [['Badania', '#realizacje'], ['Oferta', '#oferta'], ['Badaczki', '#o-nas']];
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 80, background: 'rgba(249,246,241,0.88)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--fcl-ink)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(22px,5vw,56px)', height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit' }}>
          <img src="../../assets/fcl-logo.png" alt="Fashion Cognition Lab" style={{ height: 26, width: 'auto', display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fcl-ink)' }}>Fashion Cognition Lab</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 26, flexWrap: 'wrap' }}>
          {items.map(([t, href], i) => (
            <a key={i} href={href} style={{ ...link, color: h === i ? 'var(--fcl-oxblood)' : link.color }}
               onMouseEnter={() => setH(i)} onMouseLeave={() => setH(null)}>{t}</a>
          ))}
          <Button href="#kontakt" variant="primary" shape="box" style={{ padding: '9px 16px', fontSize: 11 }}>Kontakt →</Button>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
