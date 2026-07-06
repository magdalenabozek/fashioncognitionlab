/* @ds-bundle: {"format":4,"namespace":"FashionCognitionLabDesignSystem_7bbfa5","components":[{"name":"Marquee","sourcePath":"components/brand/Marquee.jsx"},{"name":"SpecBar","sourcePath":"components/brand/SpecBar.jsx"},{"name":"SquiggleUnderline","sourcePath":"components/brand/SquiggleUnderline.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"EyebrowLabel","sourcePath":"components/core/EyebrowLabel.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"}],"sourceHashes":{"Offer.jsx":"8ba871efc08c","Studies.jsx":"0d3a502ad660","components/brand/Marquee.jsx":"1e45e864ba35","components/brand/SpecBar.jsx":"0d553effa8c5","components/brand/SquiggleUnderline.jsx":"496d7fa1d9a4","components/core/Badge.jsx":"63ded1404b8f","components/core/Button.jsx":"7823907c3477","components/core/Card.jsx":"bd20571552bf","components/core/EyebrowLabel.jsx":"2fad6d228731","components/core/StatBlock.jsx":"411ea70cb263","components/forms/Field.jsx":"3fef72b2379b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FashionCognitionLabDesignSystem_7bbfa5 = window.FashionCognitionLabDesignSystem_7bbfa5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// Offer.jsx
try { (() => {
/* FCL Website UI kit — Offer / protocols */
function OfferCard({
  badge,
  badgeTone,
  title,
  body,
  extra,
  meta
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      borderColor: 'var(--fcl-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: badgeTone
  }, badge), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 18,
      margin: '16px 0 10px',
      color: 'var(--fcl-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--fcl-ink-soft)',
      margin: '0 0 14px'
    }
  }, body), extra, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--fcl-taupe)',
      borderTop: '1px solid var(--fcl-hairline)',
      paddingTop: 12
    }
  }, meta));
}
function OfferBlock({
  n,
  lead,
  leadAccent,
  body,
  img,
  ribbon,
  ribbonSide = 'left',
  imgRight,
  cards,
  last
}) {
  const head = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: '1px solid var(--fcl-ink)',
      aspectRatio: '5/4',
      overflow: 'hidden',
      order: imgRight ? 2 : 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      objectFit: 'cover',
      height: "516px",
      width: "712px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      [ribbonSide]: 0,
      background: 'var(--fcl-blue)',
      color: 'var(--fcl-ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '6px 11px',
      [ribbonSide === 'left' ? 'borderRight' : 'borderLeft']: '1px solid var(--fcl-ink)',
      borderBottom: '1px solid var(--fcl-ink)'
    }
  }, ribbon));
  const intro = /*#__PURE__*/React.createElement("div", {
    style: {
      order: imgRight ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fcl-oxblood)',
      marginBottom: 12
    }
  }, "Oferta ", n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 'clamp(22px,2.6vw,32px)',
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      margin: '0 0 14px',
      color: 'var(--fcl-ink)'
    }
  }, lead, " ", /*#__PURE__*/React.createElement("span", {
    className: "fcl-accent"
  }, leadAccent)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--fcl-ink-soft)',
      margin: 0
    }
  }, body));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--fcl-ink)',
      borderBottom: last ? '1px solid var(--fcl-ink)' : 'none',
      paddingTop: 30,
      paddingBottom: last ? 36 : 0,
      marginBottom: last ? 0 : 46
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(258px,1fr))',
      gap: 'clamp(20px,3vw,44px)',
      alignItems: 'center',
      marginBottom: 30
    }
  }, imgRight ? /*#__PURE__*/React.createElement(React.Fragment, null, intro, head) : /*#__PURE__*/React.createElement(React.Fragment, null, head, intro)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 14
    }
  }, cards));
}

/* ── EDIT ME ──────────────────────────────────────────────────────────────
   Upcoming group-workshop sessions. To set availability, change `status`:
     'open' = bookable (shows Zarezerwuj)   'full' = no seats   'soon' = TBA
   Reorder / add / remove rows freely. ────────────────────────────────────── */
const WORKSHOP_SLOTS = [{
  title: 'Identyfikuj inside out — grupowy',
  date: '14.10.2026',
  time: '10:00–14:00',
  format: 'Online',
  price: '890 zł',
  status: 'open'
}, {
  title: 'Jak zbudować klienta powracającego',
  date: '21.11.2026',
  time: '11:00–15:00',
  format: 'Warszawa',
  price: '1 200 zł',
  status: 'open'
}, {
  title: 'Identyfikuj inside out — grupowy',
  date: '05.09.2026',
  time: '10:00–14:00',
  format: 'Online',
  price: '890 zł',
  status: 'full'
}, {
  title: 'Warsztat retencji — wersja in-house',
  date: 'termin do ustalenia',
  time: '—',
  format: 'In-house',
  price: 'wycena',
  status: 'soon'
}];
function bookSlot(slot) {
  const msg = document.getElementById('c-msg');
  if (msg) {
    msg.value = `Rezerwacja terminu: ${slot.title} — ${slot.date}, ${slot.time} (${slot.format}).`;
    msg.dispatchEvent(new Event('input', {
      bubbles: true
    }));
  }
  const target = document.getElementById('kontakt');
  if (target) window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - 20,
    behavior: 'smooth'
  });
  setTimeout(() => {
    const f = document.getElementById('c-name');
    if (f) f.focus();
  }, 600);
}
function WorkshopSlots() {
  const meta = {
    open: {
      label: 'Wolne miejsca',
      color: 'var(--fcl-oxblood)'
    },
    full: {
      label: 'Brak miejsc',
      color: 'var(--fcl-taupe)'
    },
    soon: {
      label: 'Wkrótce',
      color: 'var(--fcl-blue-ink)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--fcl-ink)',
      paddingTop: 30,
      marginBottom: 46
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fcl-oxblood)'
    }
  }, "Najbli\u017Csze terminy \xB7 warsztaty grupowe"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      letterSpacing: '0.06em',
      color: 'var(--fcl-taupe)'
    }
  }, "miejsca aktualizowane na bie\u017C\u0105co")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--fcl-ink)'
    }
  }, WORKSHOP_SLOTS.map((s, i) => {
    const m = meta[s.status] || meta.soon;
    const dim = s.status !== 'open';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(14px,2vw,28px)',
        flexWrap: 'wrap',
        padding: '16px 18px',
        borderBottom: i < WORKSHOP_SLOTS.length - 1 ? '1px solid var(--fcl-hairline)' : 'none',
        opacity: dim ? 0.62 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 'none',
        minWidth: 96,
        fontFamily: 'var(--font-mono)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--fcl-ink)',
        letterSpacing: '0.02em'
      }
    }, s.date), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: 'var(--fcl-taupe)',
        marginTop: 3
      }
    }, s.time)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '2 1 220px',
        minWidth: 180
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 16,
        color: 'var(--fcl-ink)',
        lineHeight: 1.25
      }
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--fcl-taupe)',
        marginTop: 5
      }
    }, s.format)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 'none',
        minWidth: 70,
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--fcl-ink)'
      }
    }, s.price), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 'none',
        marginLeft: 'auto'
      }
    }, s.status === 'open' ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      shape: "box",
      size: "sm",
      onClick: () => bookSlot(s)
    }, "Zarezerwuj") : /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: m.color
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: m.color
      }
    }), m.label)));
  })));
}
function Offer() {
  return /*#__PURE__*/React.createElement("section", {
    id: "oferta",
    style: {
      borderBottom: '1px solid var(--fcl-ink)',
      padding: 'clamp(72px,10vw,128px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 clamp(22px,5vw,56px)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    style: {
      marginBottom: 22
    }
  }, "03 \u2014 Oferta"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 200,
      fontSize: 'clamp(30px,4.4vw,56px)',
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      margin: '0 0 14px',
      color: 'var(--fcl-ink)'
    }
  }, "Co mo\u017Cemy zrobi\u0107 ", /*#__PURE__*/React.createElement("span", {
    className: "fcl-accent"
  }, "dla Twojej marki?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--fcl-ink-soft)',
      maxWidth: '60ch',
      margin: '0 0 56px'
    }
  }, "Wychodzimy od Twojej potrzeby. Wybierz scenariusz, a je\u015Bli \u017Caden nie pasuje idealnie, po prostu do nas napisz."), /*#__PURE__*/React.createElement(OfferBlock, {
    n: "01",
    lead: "Chcesz",
    leadAccent: "zorganizowa\u0107 szkolenie w firmie?",
    body: "Format zamkni\u0119ty, dopasowany do zespo\u0142u i case'\xF3w z Twojego portfolio.",
    img: "./assets/warsztat_lamelu_ewa_daleko.jpg",
    ribbon: "Z warsztatu",
    cards: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OfferCard, {
      badge: "Otwarte zapisy",
      badgeTone: "outline-oxblood",
      title: "Identyfikuj inside out \u2192 in-house",
      body: "Trzymodu\u0142owy warsztat zamkni\u0119ty dla zespo\u0142u \u2014 o fundamencie identyfikacji marki i prze\u0142o\u017Ceniu jej na produkt.",
      meta: "3 modu\u0142y \xB7 materia\u0142y dla zespo\u0142u"
    }), /*#__PURE__*/React.createElement(OfferCard, {
      badge: "Sta\u0142y format",
      badgeTone: "outline-ink",
      title: "1:1 z psycholo\u017Ck\u0105 mody w firmie",
      body: "Indywidualne sesje nad konkretn\u0105 kolekcj\u0105, kampani\u0105 lub pivotem. Idealne jako pierwszy krok.",
      meta: "elastyczny zakres \xB7 online lub w biurze"
    }))
  }), /*#__PURE__*/React.createElement(OfferBlock, {
    n: "02",
    imgRight: true,
    ribbonSide: "right",
    lead: "Jeste\u015B",
    leadAccent: "m\u0142od\u0105 mark\u0105, kt\xF3ra chce rosn\u0105\u0107?",
    body: "Praktyczne formaty grupowe \u2014 zyskujesz fundamenty psychologiczne razem z innymi founderkami, bez agencyjnych koszt\xF3w.",
    img: "./assets/warsztat_lamelu_ewa2.jpg",
    ribbon: "Praca grupowa",
    cards: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OfferCard, {
      badge: "Otwarte zapisy",
      badgeTone: "outline-oxblood",
      title: "Identyfikuj inside out \u2192 grupowy",
      body: "Ten sam trzymodu\u0142owy warsztat w wersji grupowej. Wyjdziesz z gotow\u0105 strategi\u0105 identyfikacji opart\u0105 na badaniach.",
      meta: "grupa otwarta \xB7 networking founderek"
    }), /*#__PURE__*/React.createElement(OfferCard, {
      badge: "Nadchodz\u0105ce",
      badgeTone: "solid-oxblood",
      title: "Jak zbudowa\u0107 klienta powracaj\u0105cego",
      body: "Profilowanie, UX zakupowy, komunikacja i element projektowy \u2014 spi\u0119te w jeden system retencji.",
      meta: "w przygotowaniu \xB7 napisz po termin"
    }), /*#__PURE__*/React.createElement(OfferCard, {
      badge: "Opcja indywidualna",
      badgeTone: "outline-ink",
      title: "Praca u Ciebie \u2014 na Twoim case'ie",
      body: "Konsultacje, mini-badanie i strategia w skali ma\u0142ej marki. Zakres i tempo ustalamy razem.",
      meta: "dopasowane do bud\u017Cetu"
    }))
  }), /*#__PURE__*/React.createElement(WorkshopSlots, null), /*#__PURE__*/React.createElement(OfferBlock, {
    n: "03",
    last: true,
    lead: "Szukasz pomys\u0142u na",
    leadAccent: "innowacyjny event?",
    body: "Robimy eventy badawczo-PRowe: spotkania, w kt\xF3rych uczestniczki zostawiaj\u0105 Ci insighty, a Ty budujesz spo\u0142eczno\u015B\u0107. Ka\u017Cdy format budujemy pod mark\u0119 \u2014 tak jak przy Rilke, Lamelu i Olas.",
    img: "./assets/lamelu_czerwien_zdala.jpg",
    ribbon: "Z eventu",
    cards: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OfferCard, {
      badge: "Format dopracowany",
      badgeTone: "outline-oxblood",
      title: "Event PRowo-badawczy \u2014 badanie w formacie spotkania",
      body: "\u0141\u0105czy badanie konsumenckie, networking i PR w jednym wydarzeniu. Pe\u0142en cykl: scenariusz, rekrutacja, facylitacja, raport.",
      meta: "zrealizowany m.in. dla Rilke, Lamelu i Olas"
    }), /*#__PURE__*/React.createElement(OfferCard, {
      badge: "Szyte na miar\u0119",
      badgeTone: "outline-ink",
      title: "Format dopasowany do Twojej marki",
      body: "Od tematu badawczego, przez scenariusz, po miejsce \u2014 bielizna, marynarki czy sukienki. Event projektujemy pod produkt i spo\u0142eczno\u015B\u0107.",
      meta: "online lub stacjonarnie \xB7 Warszawa i dalej"
    }), /*#__PURE__*/React.createElement(OfferCard, {
      badge: "Dzia\u0142ania PR-owe",
      badgeTone: "solid-oxblood",
      title: "Zapro\u015B nas na sw\xF3j event",
      body: "Wyst\u0105pienia, panele i prowadzenie warsztat\xF3w na wydarzeniu Twojej marki \u2014 tre\u015Bci atrakcyjne dla medi\xF3w i spo\u0142eczno\u015Bci.",
      meta: "format ustalany pod event"
    }))
  })));
}
window.Offer = Offer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Offer.jsx", error: String((e && e.message) || e) }); }

// Studies.jsx
try { (() => {
/* FCL Website UI kit — Studies / research results.
   Each study is an expandable "dossier": hover (desktop) or tap (touch) expands a
   drawer revealing a photo gallery + a research spec block, with the hero zooming. */
function StudyDossier({
  n,
  name,
  kind,
  quote,
  body,
  stats,
  hero,
  heroFit = 'cover',
  gallery = [],
  spec = [],
  imgRight,
  last
}) {
  const [hover, setHover] = React.useState(false);
  const [pin, setPin] = React.useState(false);
  const open = hover || pin;
  const heroBox = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: '1px solid var(--fcl-ink)',
      minHeight: 320,
      overflow: 'hidden',
      order: imgRight ? 2 : 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: hero,
    alt: name,
    style: {
      position: 'absolute',
      inset: 0,
      transform: open ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 1s var(--ease)',
      padding: "0px",
      objectFit: "cover",
      margin: "-88px",
      width: "698px",
      height: "410px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'var(--fcl-blue)',
      color: 'var(--fcl-ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '6px 11px',
      borderRight: '1px solid var(--fcl-ink)',
      borderBottom: '1px solid var(--fcl-ink)'
    }
  }, "Studium \xB7 ", name));
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      order: imgRight ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(18px,2.1vw,24px)',
      lineHeight: 1.32,
      color: 'var(--fcl-ink)',
      margin: '0 0 12px'
    }
  }, quote), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--fcl-ink-soft)',
      margin: '0 0 24px'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 0,
      border: '1px solid var(--fcl-ink)'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      minWidth: 110,
      padding: '15px 16px',
      borderRight: i < stats.length - 1 ? '1px solid var(--fcl-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: s.v,
    label: s.l,
    size: "sm"
  })))));
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderTop: '1px solid var(--fcl-ink)',
      borderBottom: last ? '1px solid var(--fcl-ink)' : 'none',
      padding: '30px 0 34px',
      background: open ? 'var(--fcl-paper-card)' : 'transparent',
      transition: 'background 0.7s var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 18,
      flexWrap: 'wrap',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 200,
      fontSize: 'clamp(40px,5vw,64px)',
      lineHeight: 0.85,
      letterSpacing: '-0.03em',
      color: 'var(--fcl-oxblood)',
      transform: open ? 'translateY(-2px)' : 'none',
      transition: 'transform 0.7s var(--ease)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'clamp(19px,2.2vw,26px)',
      lineHeight: 1,
      color: 'var(--fcl-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fcl-taupe)'
    }
  }, kind))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPin(p => !p),
    "aria-expanded": open,
    style: {
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      padding: '6px 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fcl-oxblood)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
      transition: 'transform 0.7s var(--ease)'
    }
  }, "\u25B8"), open ? 'zwiń' : 'zobacz więcej')), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--fcl-hairline)',
      marginBottom: 26,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: open ? '100%' : '0%',
      background: 'var(--fcl-oxblood)',
      transition: 'width 0.9s var(--ease)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'clamp(24px,4vw,56px)',
      alignItems: 'stretch'
    }
  }, imgRight ? /*#__PURE__*/React.createElement(React.Fragment, null, text, heroBox) : /*#__PURE__*/React.createElement(React.Fragment, null, heroBox, text)), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: open ? 1600 : 0,
      transition: 'max-height 1.05s var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 28,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.45fr) minmax(0,1fr)',
      gap: 'clamp(20px,3vw,40px)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      flex: '1 1 150px',
      minWidth: 130,
      aspectRatio: '4 / 5',
      border: '1px solid var(--fcl-ink)',
      overflow: 'hidden',
      opacity: open ? 1 : 0,
      transform: open ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity 0.5s var(--ease) ${0.12 + i * 0.1}s, transform 0.5s var(--ease) ${0.12 + i * 0.1}s`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g.src,
    alt: g.cap || name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), g.cap && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: 'var(--fcl-paper)',
      color: 'var(--fcl-ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '4px 8px',
      borderTop: '1px solid var(--fcl-ink)',
      borderRight: '1px solid var(--fcl-ink)'
    }
  }, g.cap)))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--fcl-ink)',
      background: 'var(--fcl-paper)',
      alignSelf: 'start',
      opacity: open ? 1 : 0,
      transform: open ? 'translateY(0)' : 'translateY(16px)',
      transition: 'opacity 0.5s var(--ease) 0.18s, transform 0.5s var(--ease) 0.18s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fcl-ink)',
      color: 'var(--fcl-paper)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      padding: '9px 16px'
    }
  }, "Karta badania"), spec.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      padding: '11px 16px',
      borderBottom: i < spec.length - 1 ? '1px solid var(--fcl-hairline)' : 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fcl-taupe)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, s.k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fcl-ink)',
      textAlign: 'right'
    }
  }, s.v))))))));
}
function Studies() {
  const logos = ['https://static.wixstatic.com/media/cf5ada_c66ae2a7c42e40ecbe2db87297b7f242~mv2.png', 'https://static.wixstatic.com/media/cf5ada_f0dd00d3b1614a71927bea60683ee62d~mv2.png', 'https://static.wixstatic.com/media/cf5ada_7a2c7a9b084c44fa9cbced0ad304afdb~mv2.png'];
  return /*#__PURE__*/React.createElement("section", {
    id: "realizacje",
    style: {
      borderBottom: '1px solid var(--fcl-ink)',
      padding: 'clamp(72px,10vw,128px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 clamp(22px,5vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    style: {
      marginBottom: 22
    }
  }, "01 \u2014 Portfolio / badania"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 200,
      fontSize: 'clamp(30px,4.6vw,60px)',
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      margin: 0,
      color: 'var(--fcl-ink)'
    }
  }, "Co pokaza\u0142y nasze ", /*#__PURE__*/React.createElement("span", {
    className: "fcl-accent"
  }, /*#__PURE__*/React.createElement(SquiggleUnderline, null, "badania")), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--fcl-taupe)',
      letterSpacing: '0.08em',
      textAlign: 'right'
    }
  }, "n = 03 studia \xB7 2024\u20142026", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fcl-oxblood)'
    }
  }, "\u21B3 najed\u017A, by zobaczy\u0107 wi\u0119cej"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--fcl-ink)',
      padding: '30px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(20px,4vw,48px)',
      flexWrap: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--fcl-taupe)',
      flex: 'none',
      maxWidth: 130
    }
  }, "\u2014 Wsp\xF3\u0142pracowali z nami \u2014"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%)',
      maskImage: 'linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(56px,7vw,104px)',
      width: 'max-content',
      animation: 'fclscroll 26s linear infinite'
    }
  }, [...logos, ...logos].map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    alt: "",
    style: {
      width: 'auto',
      height: 110,
      objectFit: 'contain',
      filter: 'grayscale(1)',
      opacity: 0.78,
      flex: 'none'
    }
  }))))), /*#__PURE__*/React.createElement(StudyDossier, {
    n: "01",
    name: "Rilke",
    kind: "Event PR + badanie",
    quote: "Czy wiesz, ze gdy zakladasz piekna bielizne, zmienia sie wygl\u0105d Twojej twarzy?",
    body: "90%+ uczestniczek uzna\u0142o kobiet\u0119 w bieli\u017Anie Rilke za atrakcyjniejsz\u0105. Badanie w formacie spotkania \u2014 dane, spo\u0142eczno\u015B\u0107 i PR w jednym wydarzeniu.",
    hero: "./assets/rilke_event2.jpg",
    stats: [{
      v: '+20,7%',
      l: 'pewność siebie'
    }, {
      v: '+23%',
      l: 'sprawczość'
    }, {
      v: '~20%',
      l: 'ekspresja'
    }],
    gallery: [{
      src: './assets/rilke_event_wyniki.jpg',
      cap: 'badanie'
    }, {
      src: './assets/rilke_butik.jpg',
      cap: 'przymiarki'
    }, {
      src: './assets/rilke_kolaz_dziewczyny.jpg',
      cap: 'branding'
    }],
    spec: [{
      k: 'Metoda',
      v: 'Mixed-methods'
    }, {
      k: 'Format',
      v: 'Event PRowo-badawczy'
    }, {
      k: 'Próba',
      v: 'n = 40 uczestniczek'
    }, {
      k: 'Deliverable',
      v: 'Raport + insighty PR'
    }]
  }), /*#__PURE__*/React.createElement(StudyDossier, {
    n: "02",
    name: "Lamelu",
    kind: "Badanie eksperymentalne",
    imgRight: true,
    quote: "Jak forma, struktura i materia\u0142 marynarki zmieniaj\u0105 pewno\u015B\u0107 siebie i postaw\u0119 cia\u0142a?",
    body: "Efekt najsilniejszy przy strukturalnych sylwetkach. Wy\u0142onili\u015Bmy trzy profile psychologiczne klientek marki.",
    hero: "./assets/lamelu_main.jpg",
    stats: [{
      v: '+63%',
      l: 'pewność siebie'
    }, {
      v: '3',
      l: 'profile klientek'
    }, {
      v: 'up',
      l: 'sylwetki'
    }],
    gallery: [{
      src: './assets/lamelu_wieszak.jpg',
      cap: 'kolekcja'
    }, {
      src: './assets/lamelu_main_conference.jpg',
      cap: 'warsztat'
    }, {
      src: './assets/lamelu_warsztat.jpg',
      cap: 'warsztaty'
    }],
    spec: [{
      k: 'Metoda',
      v: 'Eksperyment + wywiady'
    }, {
      k: 'Format',
      v: 'Sesja badawcza'
    }, {
      k: 'Wynik',
      v: '3 profile klientek'
    }, {
      k: 'Deliverable',
      v: 'Segmentacja + rekomendacje'
    }]
  }), /*#__PURE__*/React.createElement(StudyDossier, {
    n: "03",
    name: "Olas",
    kind: "Badanie + to\u017Csamo\u015B\u0107 marki",
    last: true,
    quote: "OLAS sprawia, \u017Ce si\u0142a staje si\u0119 naturalna.",
    body: "Kobiety w OLAS czuj\u0105 si\u0119 silne bez utraty kobieco\u015Bci \u2014 stoj\u0105 wy\u017Cej, poruszaj\u0105 si\u0119 p\u0142ynniej, pewniej m\xF3wi\u0105 cia\u0142em. Z tych insight\xF3w zbudowa\u0142y\u015Bmy to\u017Csamo\u015B\u0107 marki.",
    hero: "./assets/Olas_sukienka_zbliska.jpg",
    stats: [{
      v: '≈70%',
      l: 'komfort kobiecości'
    }, {
      v: 'up',
      l: 'akceptacja ciała'
    }, {
      v: 'done',
      l: 'wdrożone'
    }],
    gallery: [{
      src: './assets/olas_dwor.jpg',
      cap: 'event'
    }, {
      src: './assets/olas_tlo.jpg',
      cap: 'sesja'
    }, {
      src: './assets/Olas_dziewczyny1.jpg',
      cap: 'warsztat'
    }],
    spec: [{
      k: 'Metoda',
      v: 'Badanie jakościowe'
    }, {
      k: 'Format',
      v: 'Warsztat tożsamości'
    }, {
      k: 'Wynik',
      v: 'Strategia marki'
    }, {
      k: 'Deliverable',
      v: 'Tożsamość + segmentacja'
    }]
  })));
}
window.Studies = Studies;
})(); } catch (e) { __ds_ns.__errors.push({ path: "Studies.jsx", error: String((e && e.message) || e) }); }

// components/brand/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marquee — infinite mono uppercase scroller on ink, with powder-blue ✦ separators.
 * Pass an array of phrases; they're duplicated for a seamless loop.
 */
function Marquee({
  items = [],
  speed = 36,
  style = {},
  ...rest
}) {
  const id = React.useId().replace(/[:]/g, '');
  const Run = ({
    ariaHidden
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: (ariaHidden ? 'b' : 'a') + i,
    "aria-hidden": ariaHidden || undefined,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fcl-paper)',
      padding: '0 22px'
    }
  }, t, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fcl-blue-deep)'
    }
  }, "\u2726"))));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--fcl-ink)',
      overflow: 'hidden',
      padding: '13px 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      whiteSpace: 'nowrap',
      width: 'max-content',
      animation: `fclmq-${id} ${speed}s linear infinite`,
      willChange: 'transform'
    }
  }, /*#__PURE__*/React.createElement(Run, null), /*#__PURE__*/React.createElement(Run, {
    ariaHidden: true
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes fclmq-${id} { from { transform: translateX(0); } to { transform: translateX(-50%); } }`));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/brand/SpecBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpecBar — the "lab dossier" metadata strip.
 * A row of mono cells (key + value) divided by hairlines, framed top & bottom by ink rules.
 */
function SpecBar({
  items = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${Math.max(items.length, 1)}, 1fr)`,
      borderTop: '1px solid var(--fcl-ink)',
      borderBottom: '1px solid var(--fcl-ink)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '16px 18px',
      borderLeft: i === 0 ? 'none' : '1px solid var(--fcl-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--fcl-taupe)'
    }
  }, it.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--fcl-ink)',
      marginTop: '4px'
    }
  }, it.v))));
}
Object.assign(__ds_scope, { SpecBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SpecBar.jsx", error: String((e && e.message) || e) }); }

// components/brand/SquiggleUnderline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SquiggleUnderline — wraps a word with a hand-drawn oxblood squiggle that draws in.
 * The brand's signature decorative accent. Usually wraps a Fraunces italic word.
 */
function SquiggleUnderline({
  children,
  color = 'var(--fcl-oxblood)',
  draw = true,
  style = {},
  ...rest
}) {
  const id = React.useId();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 24",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-2%',
      bottom: '-0.13em',
      width: '104%',
      height: '0.34em',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 14 C 48 5, 92 21, 140 11 S 236 3, 297 13",
    fill: "none",
    stroke: color,
    strokeWidth: "4",
    strokeLinecap: "round",
    style: draw ? {
      strokeDasharray: 340,
      strokeDashoffset: 340,
      animation: `fcldraw-${id.replace(/[:]/g, '')} 1.1s 0.4s ease-out forwards`
    } : {}
  })), draw && /*#__PURE__*/React.createElement("style", null, `@keyframes fcldraw-${id.replace(/[:]/g, '')} { to { stroke-dashoffset: 0; } }`));
}
Object.assign(__ds_scope, { SquiggleUnderline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SquiggleUnderline.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small mono uppercase status tag.
 * tone: 'outline-oxblood' | 'outline-ink' | 'solid-oxblood' | 'blue'.
 * Sharp corners, 1px border, no radius. Used on offer cards & specimen panels.
 */
function Badge({
  children,
  tone = 'outline-oxblood',
  style = {},
  ...rest
}) {
  const tones = {
    'outline-oxblood': {
      color: 'var(--fcl-oxblood)',
      background: 'transparent',
      border: '1px solid var(--fcl-oxblood)'
    },
    'outline-ink': {
      color: 'var(--fcl-ink)',
      background: 'transparent',
      border: '1px solid var(--fcl-hairline)'
    },
    'solid-oxblood': {
      color: 'var(--fcl-paper)',
      background: 'var(--fcl-oxblood)',
      border: '1px solid var(--fcl-oxblood)'
    },
    'blue': {
      color: 'var(--fcl-ink)',
      background: 'var(--fcl-blue)',
      border: '1px solid var(--fcl-blue)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '4px 9px',
      lineHeight: 1.2,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the FCL call-to-action: mono uppercase, wide tracking.
 * Default shape is the sketch pill; `shape="box"` is the clinical sharp rectangle.
 * variant: 'primary' (oxblood fill) | 'outline' (transparent → ink fill) | 'ink' (ink fill → oxblood).
 * No scale on hover/press — only fills swap.
 */
function Button({
  children,
  variant = 'primary',
  shape = 'pill',
  // 'pill' | 'box'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  href,
  type,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pad = {
    sm: '11px 20px',
    md: '15px 26px',
    lg: '17px 34px'
  }[size] || '15px 26px';
  const fs = {
    sm: '11px',
    md: '12px',
    lg: '13px'
  }[size] || '12px';
  const ink = 'var(--fcl-ink)';
  const ox = 'var(--fcl-oxblood)';
  const paper = 'var(--fcl-paper)';
  const variants = {
    primary: {
      background: hover && !disabled ? ink : ox,
      color: paper,
      borderColor: ink
    },
    outline: {
      background: hover && !disabled ? ink : 'transparent',
      color: hover && !disabled ? paper : ink,
      borderColor: ink
    },
    ink: {
      background: hover && !disabled ? ox : ink,
      color: paper,
      borderColor: ink
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: 'var(--font-mono)',
    fontSize: fs,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: pad,
    border: '1px solid',
    borderRadius: shape === 'box' ? 'var(--radius-none)' : 'var(--radius-pill)',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease)',
    lineHeight: 1,
    boxSizing: 'border-box'
  };
  const Comp = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href,
    type: href ? undefined : type || 'button',
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: href ? undefined : disabled,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the FCL surface: cream fill, 1px border, sharp corners.
 * On hover the border goes oxblood. Optional hard offset 'sketch' shadow + rotation.
 */
function Card({
  children,
  hover = true,
  shadow = false,
  rotate = 0,
  surface = 'card',
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const surfaces = {
    card: 'var(--fcl-paper-card)',
    paper: 'var(--fcl-paper)',
    blue: 'var(--fcl-blue)',
    ink: 'var(--fcl-ink)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: surfaces[surface],
      color: surface === 'ink' ? 'var(--fcl-paper)' : 'var(--fcl-ink)',
      border: '1px solid',
      borderColor: hover && h ? 'var(--fcl-oxblood)' : 'var(--fcl-ink)',
      borderRadius: 'var(--radius-none)',
      padding: '24px',
      boxShadow: shadow ? 'var(--shadow-sketch-md)' : 'none',
      transform: rotate ? `rotate(${rotate}deg)` : 'none',
      transition: 'border-color 0.25s ease',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/EyebrowLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EyebrowLabel — the numbered section marker.
 * A mono uppercase label preceded by a 34px oxblood rule.
 * e.g. "01 — Badania / wyniki".
 */
function EyebrowLabel({
  children,
  color = 'var(--fcl-oxblood)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '34px',
      height: '1px',
      background: color,
      display: 'inline-block',
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { EyebrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyebrowLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — a single research metric: large thin oxblood number + mono caption.
 * Used in the bordered stat strips under study cards, and the "active finding" panel.
 */
function StatBlock({
  value,
  label,
  size = 'md',
  align = 'left',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 'clamp(24px,3vw,32px)',
    md: 'clamp(32px,4vw,44px)',
    lg: 'clamp(56px,7vw,84px)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 200,
      fontSize: sizes[size],
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fcl-oxblood)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--fcl-ink-soft)',
      marginTop: '6px'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — labelled input/textarea in the FCL intake-form style.
 * Mono uppercase label above a borderless input with a single ink bottom-rule.
 */
function Field({
  label,
  id,
  type = 'text',
  textarea = false,
  required = false,
  placeholder,
  style = {},
  ...rest
}) {
  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid var(--fcl-ink)',
    background: 'transparent',
    padding: '9px 0',
    fontFamily: 'var(--font-sans)',
    fontSize: '15px',
    color: 'var(--fcl-ink)',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    resize: textarea ? 'vertical' : undefined,
    minHeight: textarea ? '84px' : undefined
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fcl-taupe)'
    }
  }, label), textarea ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    required: required,
    placeholder: placeholder,
    style: inputStyle
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    required: required,
    placeholder: placeholder,
    style: inputStyle
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.SpecBar = __ds_scope.SpecBar;

__ds_ns.SquiggleUnderline = __ds_scope.SquiggleUnderline;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EyebrowLabel = __ds_scope.EyebrowLabel;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Field = __ds_scope.Field;

})();
