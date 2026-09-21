/* @ds-bundle: {"format":4,"namespace":"GambitDesignSystem_437136","components":[{"name":"Chessboard","sourcePath":"components/brand/Chessboard.jsx"},{"name":"MoveList","sourcePath":"components/brand/MoveList.jsx"},{"name":"ProjectCard","sourcePath":"components/brand/ProjectCard.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"CHESS_GLYPHS","sourcePath":"components/core/Icon.jsx"},{"name":"PieceGlyph","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Chessboard.jsx":"13b7d32204dd","components/brand/MoveList.jsx":"bbfd6fa54dfe","components/brand/ProjectCard.jsx":"32d6e10a8ff4","components/brand/SectionHeading.jsx":"821df6b29eb7","components/core/Badge.jsx":"ecf220aa5f95","components/core/Button.jsx":"c0a913ec9487","components/core/Card.jsx":"daf79389d768","components/core/Icon.jsx":"812405548dae","components/core/IconButton.jsx":"e982f4d62992","components/core/Tag.jsx":"1ab4204ab52b","components/feedback/Dialog.jsx":"4304c05cfb0d","components/feedback/Toast.jsx":"3ed0254c78ac","components/feedback/Tooltip.jsx":"b93df79bf056","components/forms/Checkbox.jsx":"ca6afe3bc956","components/forms/Field.jsx":"410dc927b846","components/forms/Input.jsx":"d4222568ff5d","components/forms/Radio.jsx":"5c48bc63921e","components/forms/Select.jsx":"e352a030444e","components/forms/Switch.jsx":"4db8660fb2d2","components/forms/Textarea.jsx":"87c5a2fc5966","components/navigation/Footer.jsx":"6e745d434a16","components/navigation/NavBar.jsx":"56f3b4de15cc","components/navigation/Tabs.jsx":"25e540731065","ui_kits/portfolio-site/CaseStudyScreen.jsx":"15bdb252f7c6","ui_kits/portfolio-site/ChessScreen.jsx":"3d73e71d53e2","ui_kits/portfolio-site/ContactScreen.jsx":"0344f6036d81","ui_kits/portfolio-site/HomeScreen.jsx":"b884a6ccddd2","ui_kits/portfolio-site/WorkScreen.jsx":"9182482b14e4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GambitDesignSystem_437136 = window.GambitDesignSystem_437136 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Chessboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const GLYPH = {
  k: '\u265A',
  q: '\u265B',
  r: '\u265C',
  b: '\u265D',
  n: '\u265E',
  p: '\u265F'
};
const START = ['rnbqkbnr', 'pppppppp', '........', '........', '........', '........', 'PPPPPPPP', 'RNBQKBNR'];

/** Renders an 8x8 position from simple rank strings (uppercase = White). */
function Chessboard({
  position = START,
  size = 8,
  squareSize = 34,
  coordinates = true,
  flipped = false,
  highlight = [],
  onSquare,
  style,
  ...rest
}) {
  const ranks = position.slice(0, size);
  const rows = flipped ? [...ranks].reverse() : ranks;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${size}, ${squareSize}px)`,
      border: '1px solid var(--ink-900)'
    }
  }, rows.map((row, r) => row.split('').slice(0, size).map((ch, c) => {
    const file = FILES[flipped ? size - 1 - c : c];
    const rank = flipped ? r + 1 : size - r;
    const id = file + rank;
    const dark = (r + c) % 2 === 1;
    const white = ch !== '.' && ch === ch.toUpperCase();
    const on = highlight.includes(id);
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      onClick: () => onSquare && onSquare(id),
      style: {
        width: squareSize,
        height: squareSize,
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        background: dark ? 'var(--square-dark)' : 'var(--square-light)',
        boxShadow: on ? 'inset 0 0 0 3px var(--ochre-500)' : 'none',
        cursor: onSquare ? 'pointer' : 'default'
      }
    }, ch !== '.' && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: squareSize * 0.78,
        lineHeight: 1,
        color: white ? 'var(--bone-50)' : 'var(--ink-900)',
        textShadow: white ? '0 0 1px rgba(35,28,21,.75)' : 'none'
      }
    }, GLYPH[ch.toLowerCase()]), coordinates && c === 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 1,
        left: 3,
        fontFamily: 'var(--font-mono)',
        fontSize: 8,
        color: dark ? 'var(--square-light)' : 'var(--walnut-600)'
      }
    }, rank), coordinates && r === rows.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: 0,
        right: 3,
        fontFamily: 'var(--font-mono)',
        fontSize: 8,
        color: dark ? 'var(--square-light)' : 'var(--walnut-600)'
      }
    }, file));
  }))));
}
Object.assign(__ds_scope, { Chessboard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Chessboard.jsx", error: String((e && e.message) || e) }); }

// components/brand/MoveList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MoveList({
  moves = [],
  activeIndex = -1,
  onSelect,
  title,
  style,
  ...rest
}) {
  const pairs = [];
  for (let i = 0; i < moves.length; i += 2) pairs.push([moves[i], moves[i + 1]]);
  const cell = (m, idx) => m ? /*#__PURE__*/React.createElement("button", {
    onClick: () => onSelect && onSelect(idx),
    style: {
      textAlign: 'left',
      background: idx === activeIndex ? 'var(--ochre-300)' : 'transparent',
      border: 'none',
      cursor: onSelect ? 'pointer' : 'default',
      padding: '3px 6px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-body)',
      borderRadius: 'var(--radius-xs)',
      width: '100%'
    }
  }, m) : /*#__PURE__*/React.createElement("span", null);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      overflow: 'hidden',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px',
      borderBottom: 'var(--border-hairline)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 6
    }
  }, pairs.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '28px 1fr 1fr',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-faint)',
      textAlign: 'right',
      paddingRight: 4
    }
  }, i + 1, "."), cell(p[0], i * 2), cell(p[1], i * 2 + 1)))));
}
Object.assign(__ds_scope, { MoveList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MoveList.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  note,
  level = 2,
  align = 'left',
  style,
  ...rest
}) {
  const H = 'h' + level;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--pattern-checker)',
      backgroundSize: '10px 10px'
    }
  }), eyebrow), React.createElement(H, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-display)'
    }
  }, title), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-prose)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: 'var(--bone-200)',
    color: 'var(--text-body)'
  },
  good: {
    background: 'var(--status-good-soft)',
    color: 'var(--moss-600)'
  },
  warn: {
    background: 'var(--status-warn-soft)',
    color: 'var(--ochre-600)'
  },
  bad: {
    background: 'var(--status-bad-soft)',
    color: 'var(--oxblood-500)'
  },
  accent: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--clay-600)'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: 'var(--radius-xs)',
      ...tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'currentColor',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '6px 12px',
    fontSize: 'var(--text-xs)',
    minHeight: 30
  },
  md: {
    padding: '9px 18px',
    fontSize: 'var(--text-sm)',
    minHeight: 38
  },
  lg: {
    padding: '13px 26px',
    fontSize: 'var(--text-base)',
    minHeight: 48
  }
};
const tones = {
  primary: {
    background: 'var(--clay-500)',
    color: 'var(--bone-50)',
    border: '1px solid var(--clay-500)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--ink-900)',
    border: '1px solid var(--line-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--bone-100)',
    color: 'var(--ink-900)',
    border: '1px solid var(--bone-100)'
  }
};
const hovers = {
  primary: {
    background: 'var(--clay-600)',
    borderColor: 'var(--clay-600)'
  },
  secondary: {
    background: 'var(--bone-200)'
  },
  ghost: {
    background: 'var(--bone-200)'
  },
  inverse: {
    background: '#fff'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  as = 'button',
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--sq-1)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    opacity: disabled ? 0.42 : 1,
    transition: 'background var(--dur-fast) var(--ease-place), transform var(--dur-instant) var(--ease-place), box-shadow var(--dur-fast) var(--ease-place)',
    transform: down && !disabled ? 'translateY(var(--press-translate))' : 'none',
    ...sizes[size],
    ...tones[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: Tag === 'a' ? href : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: base
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  elevation = 'flat',
  pad = 'md',
  interactive = false,
  as = 'div',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const shadow = {
    flat: 'none',
    card: 'var(--shadow-card)',
    offset: 'var(--shadow-offset)'
  }[elevation];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: elevation === 'offset' ? '1px solid var(--ink-900)' : 'var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: pad === 'none' ? 0 : pad === 'lg' ? 'var(--pad-card-lg)' : pad === 'sm' ? 'var(--sq-2)' : 'var(--pad-card)',
      boxShadow: hover && interactive && elevation !== 'offset' ? 'var(--shadow-raised)' : shadow,
      transform: hover && interactive ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-place), transform var(--dur-base) var(--ease-place)',
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.454.0/icons/';

/** Lucide outline icon, tinted with currentColor via CSS mask. */
function Icon({
  name,
  size = 18,
  strokeWidth,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
const CHESS_GLYPHS = {
  king: '\u265A',
  queen: '\u265B',
  rook: '\u265C',
  bishop: '\u265D',
  knight: '\u265E',
  pawn: '\u265F'
};

/** Unicode chess piece as a brand glyph. */
function PieceGlyph({
  piece = 'knight',
  size = 24,
  color = 'var(--ink-900)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      fontSize: size,
      lineHeight: 1,
      color,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), CHESS_GLYPHS[piece]);
}
Object.assign(__ds_scope, { Icon, CHESS_GLYPHS, PieceGlyph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 28,
  md: 34,
  lg: 42
};
function IconButton({
  label,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const tone = variant === 'solid' ? {
    background: 'var(--ink-900)',
    color: 'var(--bone-100)',
    border: '1px solid var(--ink-900)'
  } : variant === 'outline' ? {
    background: 'transparent',
    color: 'var(--ink-900)',
    border: '1px solid var(--line-hairline)'
  } : {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      padding: 0,
      transition: 'background var(--dur-fast) var(--ease-place)',
      ...tone,
      ...(hover && !disabled ? {
        background: variant === 'solid' ? 'var(--walnut-800)' : 'var(--bone-200)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onClick,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    role: interactive ? 'button' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (selected ? 'var(--ink-900)' : 'var(--line-hairline)'),
      background: selected ? 'var(--ink-900)' : hover && interactive ? 'var(--bone-200)' : 'transparent',
      color: selected ? 'var(--bone-100)' : 'var(--text-muted)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-place), color var(--dur-fast) var(--ease-place)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      cursor: 'pointer',
      opacity: 0.6,
      fontFamily: 'var(--font-mono)'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/brand/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  title,
  year,
  summary,
  tags = [],
  status,
  thumbnail,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    as: "article",
    elevation: "card",
    interactive: !!onClick,
    pad: "none",
    onClick: onClick,
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 148,
      background: thumbnail ? `center/cover no-repeat url(${thumbnail})` : 'var(--pattern-checker)',
      borderBottom: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--sq-1)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-display)'
    }
  }, title), year && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-faint)'
    }
  }, year)), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-muted)'
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 'auto',
      alignItems: 'center'
    }
  }, status && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "good",
    dot: true
  }, status), tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 460,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(35,28,21,.42)',
      backdropFilter: 'blur(2px)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--sq-4)',
      zIndex: 60,
      animation: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-raised)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-dialog)',
      padding: 'var(--pad-card-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--sq-2)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-display)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: 'var(--text-muted)',
      lineHeight: 1
    }
  }, "\xD7")), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-muted)'
    }
  }, description), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--sq-1)',
      marginTop: 'var(--sq-1)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    border: 'var(--line-strong)',
    accent: 'var(--walnut-700)'
  },
  good: {
    border: 'var(--moss-500)',
    accent: 'var(--moss-500)'
  },
  bad: {
    border: 'var(--oxblood-500)',
    accent: 'var(--oxblood-500)'
  }
};
function Toast({
  title,
  message,
  tone = 'neutral',
  onDismiss,
  style,
  ...rest
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--sq-1-5)',
      background: 'var(--surface-raised)',
      border: '1px solid ' + t.border,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raised)',
      padding: '12px 14px',
      minWidth: 280,
      maxWidth: 380,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      alignSelf: 'stretch',
      background: t.accent,
      borderRadius: 1,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-display)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)'
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-mono)'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-6px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,6px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-6px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(6px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      whiteSpace: 'nowrap',
      zIndex: 40,
      background: 'var(--ink-900)',
      color: 'var(--bone-100)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: '0.02em',
      padding: '4px 8px',
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--shadow-card)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      border: '1px solid ' + (checked ? 'var(--ink-900)' : 'var(--line-hairline)'),
      background: checked ? 'var(--ink-900)' : 'var(--bone-50)',
      borderRadius: 'var(--radius-xs)',
      boxShadow: checked ? 'none' : 'var(--inset-sunken)',
      transition: 'background var(--dur-fast) var(--ease-place)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.2 4.7 9 10 3",
    stroke: "var(--bone-50)",
    strokeWidth: "2",
    strokeLinecap: "square"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + help/error wrapper shared by every form control. */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay-500)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--status-bad)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid, disabled) => ({
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-body)',
  background: disabled ? 'var(--bone-200)' : 'var(--bone-50)',
  border: '1px solid ' + (invalid ? 'var(--status-bad)' : focus ? 'var(--line-strong)' : 'var(--line-hairline)'),
  borderRadius: 'var(--radius-md)',
  padding: '9px 12px',
  boxShadow: focus ? 'var(--ring-focus)' : 'var(--inset-sunken)',
  outline: 'none',
  transition: 'box-shadow var(--dur-fast) var(--ease-place), border-color var(--dur-fast) var(--ease-place)'
});
function Input({
  invalid = false,
  disabled = false,
  prefix,
  type = 'text',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const input = /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: prefix ? {
      ...shell(focus, invalid, disabled),
      border: 'none',
      boxShadow: 'none',
      background: 'transparent',
      padding: '9px 12px 9px 0'
    } : {
      ...shell(focus, invalid, disabled),
      ...style
    }
  }, rest));
  if (!prefix) return input;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      ...shell(focus, invalid, disabled),
      padding: '0 12px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'flex',
      marginRight: 8
    }
  }, prefix), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  value,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      borderRadius: '50%',
      border: '1px solid ' + (checked ? 'var(--ink-900)' : 'var(--line-hairline)'),
      background: 'var(--bone-50)',
      boxShadow: checked ? 'none' : 'var(--inset-sunken)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--ink-900)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid, disabled) => ({
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-body)',
  background: disabled ? 'var(--bone-200)' : 'var(--bone-50)',
  border: '1px solid ' + (invalid ? 'var(--status-bad)' : focus ? 'var(--line-strong)' : 'var(--line-hairline)'),
  borderRadius: 'var(--radius-md)',
  padding: '9px 12px',
  boxShadow: focus ? 'var(--ring-focus)' : 'var(--inset-sunken)',
  outline: 'none',
  transition: 'box-shadow var(--dur-fast) var(--ease-place), border-color var(--dur-fast) var(--ease-place)'
});
function Select({
  options = [],
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...shell(focus, invalid, disabled),
      appearance: 'none',
      paddingRight: 32,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 38,
      height: 21,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      position: 'relative',
      background: checked ? 'var(--moss-500)' : 'var(--bone-300)',
      border: '1px solid ' + (checked ? 'var(--moss-600)' : 'var(--line-hairline)'),
      transition: 'background var(--dur-base) var(--ease-place)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 19 : 2,
      width: 15,
      height: 15,
      borderRadius: '50%',
      background: 'var(--bone-50)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-place)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid, disabled) => ({
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-body)',
  background: disabled ? 'var(--bone-200)' : 'var(--bone-50)',
  border: '1px solid ' + (invalid ? 'var(--status-bad)' : focus ? 'var(--line-strong)' : 'var(--line-hairline)'),
  borderRadius: 'var(--radius-md)',
  padding: '9px 12px',
  boxShadow: focus ? 'var(--ring-focus)' : 'var(--inset-sunken)',
  outline: 'none',
  transition: 'box-shadow var(--dur-fast) var(--ease-place), border-color var(--dur-fast) var(--ease-place)'
});
function Textarea({
  invalid = false,
  disabled = false,
  rows = 5,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...shell(focus, invalid, disabled),
      resize: 'vertical',
      lineHeight: 'var(--leading-normal)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  name = 'Your Name',
  note,
  links = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      borderTop: 'var(--border-hairline)',
      padding: 'var(--sq-6) var(--gutter-page)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--sq-3)',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      background: 'var(--surface-page)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-900)'
    }
  }, name), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)'
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sq-2)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, l.label))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand = 'Your Name',
  items = [],
  active,
  onNavigate,
  right,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sq-4)',
      padding: 'var(--sq-2) var(--gutter-page)',
      borderBottom: 'var(--border-hairline)',
      background: 'var(--surface-page)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate && onNavigate(items[0] && (items[0].value || items[0])),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      background: 'var(--pattern-checker)',
      backgroundSize: '18px 18px',
      border: '1px solid var(--ink-900)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-900)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, brand)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sq-3)'
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const l = typeof it === 'string' ? it : it.label;
    const on = v === active;
    return /*#__PURE__*/React.createElement("a", {
      key: v,
      onClick: () => onNavigate && onNavigate(v),
      style: {
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        color: on ? 'var(--ink-900)' : 'var(--text-muted)',
        textDecoration: 'none',
        paddingBottom: 2,
        borderBottom: '1px solid ' + (on ? 'var(--clay-500)' : 'transparent')
      }
    }, l);
  }), right));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const active = value ?? (items[0] && (items[0].value || items[0]));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--sq-3)',
      borderBottom: 'var(--border-hairline)',
      ...style
    }
  }, rest), items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const l = typeof it === 'string' ? it : it.label;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 10px',
        marginBottom: -1,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 'var(--weight-medium)' : 'var(--weight-regular)',
        color: on ? 'var(--ink-900)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (on ? 'var(--clay-500)' : 'transparent'),
        transition: 'color var(--dur-fast) var(--ease-place)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/CaseStudyScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Badge,
  Tag,
  Card,
  SectionHeading
} = window.GambitDesignSystem_437136;
function CaseStudyScreen({
  project,
  onBack
}) {
  const p = project || {
    title: 'Opening Trainer',
    year: '2025',
    tags: ['React'],
    status: 'Shipped',
    summary: ''
  };
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 'var(--sq-6) var(--gutter-page) var(--sq-12)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onBack,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 15
    }),
    style: {
      marginLeft: -12
    }
  }, "All work"), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-2)',
      margin: 'var(--sq-3) 0 var(--sq-5)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, p.status && /*#__PURE__*/React.createElement(Badge, {
    tone: "good",
    dot: true
  }, p.status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-faint)'
    }
  }, p.year)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-display)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-muted)'
    }
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, (p.tags || []).map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 300,
      background: 'var(--pattern-checker)',
      border: '1px solid var(--ink-900)',
      borderRadius: 'var(--radius-md)',
      marginBottom: 'var(--sq-6)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      background: 'var(--bone-50)',
      padding: '6px 10px',
      border: '1px solid var(--ink-900)',
      color: 'var(--text-muted)'
    }
  }, "Hero image slot \u2014 1180 \xD7 600")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)',
      gap: 'var(--sq-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-4)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The problem",
    title: "People quit openings in week two",
    level: 2,
    note: "Every trainer on the market drilled positions the way flashcards drill vocabulary: relentlessly, out of context, with no sense of where a line is going."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-body)'
    }
  }, "I interviewed eleven club players between 1400 and 2100. All of them had abandoned at least one trainer. The reason was never difficulty \u2014 it was that a missed move felt like a failed exam rather than a position to understand."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      padding: 'var(--sq-2) var(--sq-3)',
      borderLeft: '2px solid var(--clay-500)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-display)'
    }
  }, "\u201CI don\u2019t want to be told I\u2019m wrong. I want to be told what I was thinking.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-body)'
    }
  }, "So the trainer never says wrong. A missed move plays out three plies so you can see the cost, then hands the position back. Retention at four weeks went from 31% to 68%.")), /*#__PURE__*/React.createElement(Card, {
    elevation: "card",
    pad: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-2)'
    }
  }, [['Role', 'Design, front-end'], ['Team', 'Solo, then two'], ['Duration', '10 weeks'], ['Shipped', 'March 2025'], ['Players', '4,120']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      borderBottom: 'var(--border-hairline)',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, v))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "external-link",
      size: 15
    })
  }, "Visit the site"))));
}
Object.assign(window, {
  CaseStudyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/ChessScreen.jsx
try { (() => {
const {
  Chessboard,
  MoveList,
  SectionHeading,
  IconButton,
  Icon,
  Switch,
  Card,
  Badge,
  Tooltip
} = window.GambitDesignSystem_437136;
const MOVES = ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd4', 'exd4', 'cxd4', 'Bb4+', 'Bd2', 'Bxd2+'];
const POSITIONS = [['rnbqkbnr', 'pppppppp', '........', '........', '........', '........', 'PPPPPPPP', 'RNBQKBNR'], ['rnbqkbnr', 'pppppppp', '........', '........', '....P...', '........', 'PPPP.PPP', 'RNBQKBNR'], ['rnbqkbnr', 'pppp.ppp', '........', '....p...', '....P...', '........', 'PPPP.PPP', 'RNBQKBNR'], ['rnbqkbnr', 'pppp.ppp', '........', '....p...', '....P...', '.....N..', 'PPPP.PPP', 'RNBQKB.R'], ['r.bqkbnr', 'pppp.ppp', '..n.....', '....p...', '....P...', '.....N..', 'PPPP.PPP', 'RNBQKB.R'], ['r.bqkbnr', 'pppp.ppp', '..n.....', '....p...', '..B.P...', '.....N..', 'PPPP.PPP', 'RNBQK..R'], ['r.bqk.nr', 'pppp.ppp', '..n.....', '..b.p...', '..B.P...', '.....N..', 'PPPP.PPP', 'RNBQK..R']];
const NOTES = {
  4: 'Black develops with tempo-free calm. The Italian is a good opening to learn structure from: nobody is punished early.',
  5: 'Bc4 eyes f7 — the square every beginner loses to and every club player forgets about.',
  6: 'Symmetry. Somebody has to break it, and whoever does tells you what kind of game they want.'
};
function ChessScreen() {
  const [ply, setPly] = React.useState(5);
  const [flipped, setFlipped] = React.useState(false);
  const [coords, setCoords] = React.useState(true);
  const pos = POSITIONS[Math.min(ply, POSITIONS.length - 1)];
  const note = NOTES[ply];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sq-8) var(--gutter-page) var(--sq-12)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Annotated games",
    title: "Giuoco Piano, club night, March",
    note: "I annotate one game a month, usually one I lost. This one I drew, which is worse."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto minmax(240px,320px)',
      gap: 'var(--sq-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-2)'
    }
  }, /*#__PURE__*/React.createElement(Chessboard, {
    position: pos,
    squareSize: 54,
    flipped: flipped,
    coordinates: coords,
    style: {
      boxShadow: 'var(--shadow-card)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sq-1)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Start",
    variant: "outline",
    onClick: () => setPly(0)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-left",
    size: 16
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Previous move",
    variant: "outline",
    onClick: () => setPly(p => Math.max(0, p - 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 16
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Next move",
    variant: "solid",
    onClick: () => setPly(p => Math.min(MOVES.length - 1, p + 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Copy PGN"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Copy PGN",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 16
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: flipped,
    onChange: setFlipped,
    label: "Flip"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: coords,
    onChange: setCoords,
    label: "Coords"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "\xBD\u2013\xBD"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "C53")), /*#__PURE__*/React.createElement(MoveList, {
    title: "Giuoco Piano",
    moves: MOVES,
    activeIndex: ply,
    onSelect: setPly
  }), /*#__PURE__*/React.createElement(Card, {
    elevation: "flat",
    pad: "md",
    style: {
      minHeight: 120
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "Note \u2014 move ", Math.floor(ply / 2) + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-body)'
    }
  }, note || 'No note on this move. Click a highlighted ply for commentary.')))));
}
Object.assign(window, {
  ChessScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/ChessScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/ContactScreen.jsx
try { (() => {
const {
  SectionHeading,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Icon,
  Toast,
  Card,
  Chessboard
} = window.GambitDesignSystem_437136;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const send = () => {
    if (!email.includes('@')) {
      setErr('That address looks incomplete.');
      return;
    }
    setErr('');
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sq-8) var(--gutter-page) var(--sq-12)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--sq-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-3)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Say hello",
    title: "Open to one project at a time",
    note: "Contract work, advisory, or a game if you are in Lagos. I reply within a day or two."
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    required: true,
    error: err
  }, /*#__PURE__*/React.createElement(Input, {
    invalid: !!err,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@domain.com",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Topic"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Project enquiry', 'Advisory', 'Speaking', 'Just saying hello']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    hint: "A sentence or two is plenty."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "What are you working on?"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the occasional note about new writing"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sq-1-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: send,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Send"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    })
  }, "CV (PDF)")), sent && /*#__PURE__*/React.createElement(Toast, {
    tone: "good",
    title: "Note sent",
    message: "I usually reply within a day or two.",
    onDismiss: () => setSent(false)
  })), /*#__PURE__*/React.createElement(Card, {
    elevation: "offset",
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-3)'
    }
  }, /*#__PURE__*/React.createElement(Chessboard, {
    size: 4,
    squareSize: 38,
    coordinates: false,
    position: ['....', '..N.', '....', '....'],
    style: {
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-display)'
    }
  }, "Or find me over the board on Tuesdays at the Yaba club."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [['mail', 'maya@example.com'], ['github', 'github.com/example'], ['external-link', 'lichess.org/@/example']].map(([i, l]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-link)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 15
  }), l)))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  NavBar,
  Footer,
  Button,
  Icon,
  SectionHeading,
  ProjectCard,
  Chessboard,
  Tag,
  Badge,
  Card
} = window.GambitDesignSystem_437136;
const PROJECTS = [{
  title: 'Opening Trainer',
  year: '2025',
  status: 'Shipped',
  tags: ['React', 'Product design'],
  summary: 'Spaced repetition for opening lines. 4,000 players, one weekend of code and a year of small fixes.'
}, {
  title: 'Ledger for Farmers',
  year: '2024',
  tags: ['Research', 'Design system'],
  summary: 'A bookkeeping tool for smallholder co-ops in Oyo State. Offline first, paper second.'
}, {
  title: 'Endgame Studies',
  year: '2023',
  tags: ['Writing', 'Typography'],
  summary: 'A print zine of 32 composed studies. Set in metal, printed in an edition of 120.'
}];
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,.75fr)',
      gap: 'var(--sq-8)',
      alignItems: 'center',
      padding: 'var(--sq-12) var(--gutter-page)',
      borderBottom: 'var(--border-hairline)',
      backgroundImage: 'var(--pattern-grain)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--pattern-checker)',
      backgroundSize: '10px 10px'
    }
  }), "Product designer \xB7 Lagos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-display)'
    }
  }, "I design tools people keep using after the demo."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-prose)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-muted)'
    }
  }, "Ten years of product work, mostly in fintech and education. I think in openings and endgames: what a product commits to early, and what it has left when the board thins out."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sq-1-5)',
      marginTop: 'var(--sq-1)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('Work'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "See the work"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('Chess')
  }, "The chess part"))), /*#__PURE__*/React.createElement(Chessboard, {
    squareSize: 46,
    highlight: ['e4', 'f3'],
    position: ['rnbqkbnr', 'pppp.ppp', '........', '....p...', '....P...', '.....N..', 'PPPP.PPP', 'RNBQKB.R'],
    style: {
      justifySelf: 'end',
      boxShadow: 'var(--shadow-raised)'
    }
  }));
}
function Work({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--sq-10) var(--gutter-page)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Selected work",
    title: "Three worth showing",
    note: "Everything else lives on the work page \u2014 including the things that did not ship."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 'var(--sq-3)'
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p, {
    onClick: () => onOpen(p)
  })))));
}
function Strip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      padding: 'var(--sq-8) var(--gutter-page)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 'var(--sq-5)'
    }
  }, [['10 yrs', 'designing products'], ['2103', 'FIDE rating, slowly climbing'], ['6', 'teams shipped with'], ['1', 'zine, printed in metal type']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 1,
      color: 'var(--ochre-300)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--bone-300)'
    }
  }, l))));
}
function HomeScreen({
  onNavigate,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Work, {
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement(Strip, null));
}
Object.assign(window, {
  HomeScreen,
  PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/WorkScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ProjectCard,
  Tabs,
  Tag,
  Select,
  Field
} = window.GambitDesignSystem_437136;
const ALL = [...window.PROJECTS, {
  title: 'Clockwise',
  year: '2023',
  tags: ['iOS', 'Prototype'],
  summary: 'A tournament clock that survives being dropped on a wooden table.'
}, {
  title: 'Ranked',
  year: '2022',
  status: 'Archived',
  tags: ['Data viz'],
  summary: 'Rating history as a contour map. Beautiful, barely useful.'
}, {
  title: 'Marginalia',
  year: '2021',
  tags: ['Writing'],
  summary: 'Notes on 40 books about decision-making under time pressure.'
}];
function WorkScreen({
  onOpen
}) {
  const [tab, setTab] = React.useState('All');
  const [tag, setTag] = React.useState(null);
  const tags = ['React', 'Research', 'Writing', 'Data viz', 'iOS'];
  const shown = ALL.filter(p => tab === 'All' || (tab === 'Shipped' ? p.status === 'Shipped' : p.status === 'Archived')).filter(p => !tag || p.tags.includes(tag));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sq-8) var(--gutter-page) var(--sq-12)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sq-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Work",
    title: "Everything, including the misses",
    note: "Six projects, 2021 to now. Filter by state or by what it was made of."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--sq-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['All', 'Shipped', 'Archived'],
    value: tab,
    onChange: setTab,
    style: {
      flex: 1,
      minWidth: 260
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Sort",
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Newest first', 'Oldest first', 'A–Z']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sq-1)',
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: tag === t,
    onClick: () => setTag(tag === t ? null : t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 'var(--sq-3)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p, {
    onClick: () => onOpen(p)
  })))), shown.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-faint)'
    }
  }, "Nothing under that filter. Try another."));
}
Object.assign(window, {
  WorkScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/WorkScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Chessboard = __ds_scope.Chessboard;

__ds_ns.MoveList = __ds_scope.MoveList;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.CHESS_GLYPHS = __ds_scope.CHESS_GLYPHS;

__ds_ns.PieceGlyph = __ds_scope.PieceGlyph;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
