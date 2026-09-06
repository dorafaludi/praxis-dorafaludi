/* @ds-bundle: {"format":3,"namespace":"LeadToWorkDesignSystem_b90026","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data-display/Card.jsx"},{"name":"CardTitle","sourcePath":"components/data-display/Card.jsx"},{"name":"CardDescription","sourcePath":"components/data-display/Card.jsx"},{"name":"CardContent","sourcePath":"components/data-display/Card.jsx"},{"name":"CardFooter","sourcePath":"components/data-display/Card.jsx"},{"name":"StatusBadge","sourcePath":"components/data-display/StatusBadge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"a5281a811dec","components/buttons/IconButton.jsx":"f602c956ce60","components/data-display/Avatar.jsx":"c3e0cdde8761","components/data-display/Badge.jsx":"c40285d7d02c","components/data-display/Card.jsx":"672245374583","components/data-display/StatusBadge.jsx":"765ca02aec23","components/forms/Input.jsx":"9770545fd6d7","components/forms/Switch.jsx":"68cdf2f2f7c6","ui_kits/crm/AppShell.jsx":"002e0c3a0738","ui_kits/crm/LeadCenter.jsx":"dc15c8786875","ui_kits/crm/QuotesDashboard.jsx":"8d82dcfef6d3","ui_kits/crm/data.jsx":"08acd423a8e2","ui_kits/crm/icons.jsx":"672eed5b4cef"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LeadToWorkDesignSystem_b90026 = window.LeadToWorkDesignSystem_b90026 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action control in the LeadToWork UI.
 * Ports the shadcn/cva button: steel-blue primary, plus secondary,
 * outline, ghost, link and destructive variants in three sizes.
 */

const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  whiteSpace: 'nowrap',
  borderRadius: 'var(--radius-md)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-sm)',
  fontWeight: 'var(--font-medium)',
  lineHeight: 1,
  cursor: 'pointer',
  border: '1px solid transparent',
  transition: 'background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast), opacity var(--transition-fast)',
  userSelect: 'none'
};
const sizes = {
  sm: {
    height: 'var(--control-sm)',
    padding: '0 0.75rem'
  },
  default: {
    height: 'var(--control-md)',
    padding: '0 1rem'
  },
  lg: {
    height: 'var(--control-lg)',
    padding: '0 2rem',
    fontSize: 'var(--text-base)'
  },
  icon: {
    height: 'var(--control-md)',
    width: 'var(--control-md)',
    padding: 0
  }
};
const variants = {
  default: {
    background: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))'
  },
  secondary: {
    background: 'hsl(var(--secondary))',
    color: 'hsl(var(--secondary-foreground))'
  },
  outline: {
    background: 'hsl(var(--background))',
    color: 'hsl(var(--foreground))',
    borderColor: 'hsl(var(--border))'
  },
  ghost: {
    background: 'transparent',
    color: 'hsl(var(--foreground))'
  },
  link: {
    background: 'transparent',
    color: 'hsl(var(--primary))',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    height: 'auto',
    padding: 0
  },
  destructive: {
    background: 'hsl(var(--destructive))',
    color: 'hsl(var(--destructive-foreground))'
  }
};
const hoverBg = {
  default: 'hsl(var(--primary) / 0.9)',
  secondary: 'hsl(var(--secondary-foreground) / 0.08)',
  outline: 'hsl(var(--accent))',
  ghost: 'hsl(var(--accent))',
  link: 'transparent',
  destructive: 'hsl(var(--destructive) / 0.9)'
};
function Button({
  variant = 'default',
  size = 'default',
  disabled = false,
  type = 'button',
  style,
  children,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.default;
  const composed = {
    ...base,
    ...sizes[size],
    ...v,
    ...(hover && !disabled ? {
      background: hoverBg[variant],
      ...(variant === 'outline' ? {
        color: 'hsl(var(--accent-foreground))'
      } : {})
    } : {}),
    ...(disabled ? {
      opacity: 0.5,
      pointerEvents: 'none'
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square, icon-only control. Mirrors the app's IconButton
 * with brand / neutral / destructive emphasis tiers and three sizes.
 * Pass a lucide icon (or any node) as children.
 */

const sizes = {
  small: 24,
  medium: 32,
  large: 40
};
const variants = {
  'brand-primary': {
    background: 'hsl(var(--primary))',
    color: '#fff',
    hover: 'hsl(var(--primary) / 0.9)'
  },
  'brand-secondary': {
    background: 'hsl(var(--brand-50))',
    color: 'hsl(var(--brand-700))',
    hover: 'hsl(var(--brand-100))'
  },
  'brand-tertiary': {
    background: 'transparent',
    color: 'hsl(var(--brand-700))',
    hover: 'hsl(var(--brand-50))'
  },
  'neutral-primary': {
    background: 'hsl(var(--muted))',
    color: 'hsl(var(--neutral-700))',
    hover: 'hsl(var(--border))'
  },
  'neutral-secondary': {
    background: '#fff',
    color: 'hsl(var(--neutral-700))',
    border: 'hsl(var(--border))',
    hover: 'hsl(var(--muted))'
  },
  'neutral-tertiary': {
    background: 'transparent',
    color: 'hsl(var(--neutral-700))',
    hover: 'hsl(var(--muted))'
  },
  'destructive-primary': {
    background: 'var(--error-600)',
    color: '#fff',
    hover: 'var(--error-500)'
  },
  'destructive-tertiary': {
    background: 'transparent',
    color: 'var(--error-700)',
    hover: 'var(--error-50)'
  }
};
function IconButton({
  variant = 'neutral-tertiary',
  size = 'medium',
  disabled = false,
  type = 'button',
  style,
  children,
  icon,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants['neutral-tertiary'];
  const dim = sizes[size];
  const composed = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: dim,
    width: dim,
    borderRadius: 'var(--radius-md)',
    border: v.border ? `1px solid ${v.border}` : '1px solid transparent',
    background: hover && !disabled ? v.hover : v.background,
    color: v.color,
    cursor: 'pointer',
    transition: 'background-color var(--transition-fast)',
    ...(disabled ? {
      opacity: 0.5,
      pointerEvents: 'none'
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, props), icon || children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular user/brand image with initials fallback.
 * Used in the sidebar footer, page headers and lead/quote cards.
 */

const sizes = {
  sm: 20,
  md: 32,
  lg: 40,
  xl: 56
};
function initialsFrom(name) {
  if (!name) return '?';
  return name.trim().split(/\s+/).slice(0, 2).map(p => p.charAt(0).toUpperCase()).join('');
}
function Avatar({
  src,
  name,
  size = 'md',
  style,
  ...props
}) {
  const dim = typeof size === 'number' ? size : sizes[size] || 32;
  const fontSize = Math.max(10, Math.round(dim * 0.4));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
      background: 'hsl(var(--muted))',
      color: 'hsl(var(--neutral-700))',
      fontFamily: 'var(--font-sans)',
      fontSize,
      fontWeight: 'var(--font-semibold)',
      ...style
    }
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initialsFrom(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small rounded-full label for status, counts and tags.
 * Matches the app's badge variants (default/secondary/destructive/
 * outline/success/warning).
 */

const variants = {
  default: {
    background: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    border: 'transparent'
  },
  secondary: {
    background: 'hsl(var(--secondary))',
    color: 'hsl(var(--secondary-foreground))',
    border: 'transparent'
  },
  destructive: {
    background: 'hsl(var(--destructive))',
    color: 'hsl(var(--destructive-foreground))',
    border: 'transparent'
  },
  outline: {
    background: 'transparent',
    color: 'hsl(var(--foreground))',
    border: 'hsl(var(--border))'
  },
  success: {
    background: 'var(--success-100)',
    color: 'var(--success-800)',
    border: 'transparent'
  },
  warning: {
    background: 'var(--warning-100)',
    color: 'var(--warning-800)',
    border: 'transparent'
  }
};
function Badge({
  variant = 'default',
  style,
  children,
  ...props
}) {
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      borderRadius: 'var(--radius-full)',
      border: `1px solid ${v.border}`,
      padding: '0.125rem 0.625rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--font-semibold)',
      lineHeight: 1.4,
      background: v.background,
      color: v.color,
      whiteSpace: 'nowrap',
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the app's surface container. Default is a white card with a
 * subtle gradient toward light gray, hairline border and small shadow.
 * Status variants (success/warning/danger/error/info) tint the whole card,
 * used for the statistics cards on the quotes dashboard.
 * Exports Card + CardHeader / CardTitle / CardDescription / CardContent / CardFooter.
 */

const variants = {
  default: {
    background: 'linear-gradient(135deg, hsl(var(--card)), #f1f3f6)',
    border: 'hsl(var(--border))',
    color: 'hsl(var(--card-foreground))'
  },
  success: {
    background: 'linear-gradient(135deg, var(--success-50), var(--success-100))',
    border: 'var(--success-200)',
    color: 'var(--success-800)'
  },
  warning: {
    background: 'linear-gradient(135deg, var(--warning-50), var(--warning-100))',
    border: 'var(--warning-200)',
    color: 'var(--warning-800)'
  },
  danger: {
    background: 'linear-gradient(135deg, var(--danger-50), var(--danger-100))',
    border: 'var(--danger-200)',
    color: 'var(--danger-800)'
  },
  error: {
    background: 'linear-gradient(135deg, var(--error-50), var(--error-100))',
    border: 'var(--error-200)',
    color: 'var(--error-800)'
  },
  info: {
    background: 'linear-gradient(135deg, var(--info-50), var(--info-100))',
    border: 'var(--info-200)',
    color: 'var(--info-800)'
  }
};
const accent = {
  default: 'hsl(var(--primary))',
  success: 'var(--success-500)',
  warning: 'var(--warning-500)',
  danger: 'var(--danger-500)',
  error: 'var(--error-500)',
  info: 'var(--info-500)'
};
function Card({
  variant = 'default',
  showAccentedBorder = false,
  style,
  children,
  ...props
}) {
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      border: `1px solid ${v.border}`,
      background: v.background,
      color: v.color,
      boxShadow: 'var(--shadow-sm)',
      ...(showAccentedBorder ? {
        borderLeft: `4px solid ${accent[variant]}`
      } : {}),
      ...style
    }
  }, props), children);
}
function CardHeader({
  style,
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.375rem',
      padding: '1rem',
      ...style
    }
  }, props), children);
}
function CardTitle({
  style,
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("h3", _extends({
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--font-semibold)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      margin: 0,
      ...style
    }
  }, props), children);
}
function CardDescription({
  style,
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontSize: 'var(--text-sm)',
      color: 'hsl(var(--muted-foreground))',
      margin: 0,
      ...style
    }
  }, props), children);
}
function CardContent({
  style,
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '0 1rem 1rem',
      ...style
    }
  }, props), children);
}
function CardFooter({
  style,
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem 1rem',
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusBadge — maps a quote / lead lifecycle status to the correct
 * badge colour and human label in one component, so status colour stays
 * consistent everywhere it appears (dashboard cards, detail header, filters).
 * Mirrors quoteStatusConfig.ts from the codebase.
 */

const STATUS = {
  draft: {
    variant: 'secondary',
    label: 'Draft'
  },
  sending: {
    variant: 'default',
    label: 'Sending'
  },
  sent: {
    variant: 'default',
    label: 'Sent'
  },
  failed_to_send: {
    variant: 'destructive',
    label: 'Failed'
  },
  viewed: {
    variant: 'warning',
    label: 'Viewed'
  },
  opened: {
    variant: 'warning',
    label: 'Opened'
  },
  accepted: {
    variant: 'success',
    label: 'Accepted'
  },
  rejected: {
    variant: 'destructive',
    label: 'Rejected'
  },
  archived: {
    variant: 'outline',
    label: 'Archived'
  },
  // lead lifecycle aliases
  new: {
    variant: 'default',
    label: 'New'
  },
  qualified: {
    variant: 'warning',
    label: 'Qualified'
  },
  contacted: {
    variant: 'secondary',
    label: 'Contacted'
  },
  converted: {
    variant: 'success',
    label: 'Converted'
  },
  lost: {
    variant: 'destructive',
    label: 'Lost'
  }
};
const DOT = {
  default: 'hsl(var(--primary))',
  secondary: 'hsl(var(--muted-foreground))',
  destructive: 'hsl(var(--destructive))',
  outline: 'hsl(var(--muted-foreground))',
  success: 'var(--success-600)',
  warning: 'var(--warning-600)'
};
function StatusBadge({
  status = 'draft',
  label,
  showDot = true,
  style,
  ...props
}) {
  const cfg = STATUS[status] || STATUS.draft;
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, _extends({
    variant: cfg.variant,
    style: style
  }, props), showDot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: DOT[cfg.variant],
      display: 'inline-block'
    }
  }), label || cfg.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. White surface, hairline border, blue
 * focus ring. 40px tall to match Button default and align in filter bars.
 */

function Input({
  style,
  invalid = false,
  disabled = false,
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      props.onFocus && props.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      props.onBlur && props.onBlur(e);
    },
    style: {
      height: 'var(--control-md)',
      width: '100%',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${invalid ? 'hsl(var(--destructive))' : 'hsl(var(--border))'}`,
      background: 'hsl(var(--card))',
      padding: '0 0.75rem',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'hsl(var(--foreground))',
      outline: 'none',
      boxShadow: focus && !invalid ? '0 0 0 2px hsl(var(--ring) / 0.35)' : 'none',
      borderColor: focus && !invalid ? 'hsl(var(--ring))' : invalid ? 'hsl(var(--destructive))' : 'hsl(var(--border))',
      transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
      ...(disabled ? {
        opacity: 0.5,
        cursor: 'not-allowed',
        background: 'hsl(var(--muted))'
      } : {}),
      ...style
    }
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — a controlled on/off toggle. Track turns primary-blue when on.
 * Used in settings panels (notifications, feature flags).
 */

function Switch({
  checked = false,
  onCheckedChange,
  disabled = false,
  style,
  ...props
}) {
  const toggle = () => {
    if (!disabled && onCheckedChange) onCheckedChange(!checked);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: 'relative',
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-full)',
      border: 'none',
      padding: 2,
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: checked ? 'hsl(var(--primary))' : 'hsl(var(--border))',
      transition: 'background-color var(--transition-fast)',
      opacity: disabled ? 0.5 : 1,
      flexShrink: 0,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--transition-fast)'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/AppShell.jsx
try { (() => {
/* AppShell — the LeadToWork sidebar + content frame. Light sidebar with the
 * LEAD ⇒ WORK wordmark, brand selector, nav with active/badge states, and a
 * user footer — mirrors AppSidebar.tsx (expanded state). */
const {
  Avatar,
  Badge
} = window.LeadToWorkDesignSystem_b90026;
function NavRow({
  item,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const bg = active ? 'hsl(var(--primary) / 0.10)' : hover ? 'hsl(var(--neutral-50))' : 'transparent';
  const color = active ? 'hsl(var(--primary))' : 'hsl(var(--neutral-600))';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '8px 10px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: bg,
      color,
      cursor: 'pointer',
      textAlign: 'left',
      font: `${active ? 600 : 500} 14px/1 var(--font-sans)`,
      transition: 'background-color var(--transition-fast)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 20,
    color: color,
    strokeWidth: active ? 2.4 : 2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge ? /*#__PURE__*/React.createElement(Badge, {
    variant: "secondary",
    style: {
      padding: '1px 7px'
    }
  }, item.badge) : null);
}
function Sidebar({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'hsl(var(--card))',
      borderRight: '1px solid hsl(var(--border))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/leadtowork-mark.png",
    alt: "",
    width: "26",
    height: "26",
    style: {
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: '-0.01em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--foreground))'
    }
  }, "LEAD"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--primary))'
    }
  }, "\u21D2"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--amber-500))'
    }
  }, "WORK"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'hsl(var(--border))',
      margin: '0 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '7px 9px',
      border: '1px solid hsl(var(--border))',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: 'hsl(var(--background))'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Praktiker HU",
    size: 22,
    style: {
      borderRadius: 6,
      background: 'hsl(var(--brand-100))',
      color: 'hsl(var(--brand-800))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '600 13px var(--font-sans)',
      color: 'hsl(var(--foreground))'
    }
  }, "Praktiker HU"), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronsUpDown",
    size: 15,
    color: "hsl(var(--muted-foreground))"
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, window.NAV.map(item => /*#__PURE__*/React.createElement(NavRow, {
    key: item.id,
    item: item,
    active: active === item.id,
    onClick: () => onNavigate(item.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid hsl(var(--border))',
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Anna Kov\xE1cs",
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px var(--font-sans)',
      color: 'hsl(var(--foreground))',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Anna Kov\xE1cs"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-sans)',
      color: 'hsl(var(--muted-foreground))'
    }
  }, "Owner")), /*#__PURE__*/React.createElement(Icon, {
    name: "LogOut",
    size: 18,
    color: "hsl(var(--neutral-600))"
  })));
}
function AppShell({
  active,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'hsl(var(--background))'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children));
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/LeadCenter.jsx
try { (() => {
/* LeadCenter — the "Requesters" workbench: page header, status tabs, and a
 * table of incoming leads with AI score chips, source, assignee and status.
 * Clicking a row opens a detail side panel. Mirrors CustomerLeadCenter.tsx. */
const {
  Button,
  StatusBadge,
  Input,
  Avatar,
  Badge
} = window.LeadToWorkDesignSystem_b90026;
function ScoreChip({
  score,
  tone
}) {
  const map = {
    hot: {
      bg: 'var(--danger-100)',
      fg: 'var(--danger-700)',
      icon: 'Zap',
      label: 'Hot'
    },
    warm: {
      bg: 'var(--warning-100)',
      fg: 'var(--warning-800)',
      icon: 'TrendingUp',
      label: 'Warm'
    },
    cold: {
      bg: 'hsl(var(--muted))',
      fg: 'hsl(var(--neutral-600))',
      icon: 'Snowflake',
      label: 'Cold'
    }
  };
  const c = map[tone] || map.cold;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 9px',
      borderRadius: 'var(--radius-full)',
      background: c.bg,
      color: c.fg,
      font: '600 12px var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 12,
    color: c.fg
  }), score, " \xB7 ", c.label);
}
function LeadDetail({
  lead,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340,
      flexShrink: 0,
      borderLeft: '1px solid hsl(var(--border))',
      background: 'hsl(var(--card))',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      borderBottom: '1px solid hsl(var(--border))',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: lead.name,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-sans)',
      color: 'hsl(var(--foreground))'
    }
  }, lead.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'hsl(var(--muted-foreground))'
    }
  }, lead.job)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "X",
    size: 18,
    color: "hsl(var(--muted-foreground))"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      overflow: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ScoreChip, {
    score: lead.score,
    tone: lead.tone
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: lead.status
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'hsl(var(--muted-foreground))',
      marginBottom: 8
    }
  }, "Details"), [['Source', lead.source], ['Received', lead.when], ['Assigned to', lead.assignee || 'Unassigned']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 0',
      borderBottom: '1px solid hsl(var(--border))',
      font: '400 13px var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--muted-foreground))'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--foreground))',
      fontWeight: 500
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'hsl(var(--accent))',
      borderRadius: 'var(--radius-md)',
      padding: 12,
      display: 'flex',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Sparkles",
    size: 16,
    color: "hsl(var(--primary))",
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12.5px/1.5 var(--font-sans)',
      color: 'hsl(var(--accent-foreground))'
    }
  }, "AI extracted: ", /*#__PURE__*/React.createElement("b", null, lead.job), ". Auto-message sent asking for preferred start date."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderTop: '1px solid hsl(var(--border))',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Phone",
    size: 14
  }), "Call"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "FileText",
    size: 14
  }), "Create quote")));
}
function LeadCenter() {
  const [tab, setTab] = React.useState('all');
  const [selected, setSelected] = React.useState(null);
  const tabs = [['all', 'All'], ['new', 'New'], ['qualified', 'Qualified'], ['contacted', 'Contacted'], ['converted', 'Converted']];
  const list = window.LEADS.filter(l => tab === 'all' || l.status === tab);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ClipboardList",
    size: 30,
    color: "hsl(var(--primary))"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '700 24px var(--font-sans)',
      color: 'hsl(var(--primary))',
      letterSpacing: '-0.02em'
    }
  }, "Requesters"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'hsl(var(--muted-foreground))',
      marginTop: 2
    }
  }, "Every lead captured, scored and followed up automatically"))), /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement(Icon, {
    name: "Plus",
    size: 16
  }), "Add lead")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid hsl(var(--border))',
      marginBottom: 14
    }
  }, tabs.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '9px 14px',
      font: '600 13px var(--font-sans)',
      color: tab === id ? 'hsl(var(--primary))' : 'hsl(var(--neutral-600))',
      borderBottom: '2px solid ' + (tab === id ? 'hsl(var(--primary))' : 'transparent'),
      marginBottom: -1
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--border))',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'hsl(var(--card))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1.1fr 1fr 1fr auto',
      gap: 12,
      padding: '10px 16px',
      background: 'hsl(var(--muted))',
      font: '600 11px var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'hsl(var(--muted-foreground))'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Requester"), /*#__PURE__*/React.createElement("span", null, "Score"), /*#__PURE__*/React.createElement("span", null, "Source"), /*#__PURE__*/React.createElement("span", null, "Assignee"), /*#__PURE__*/React.createElement("span", null, "Status")), list.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    onClick: () => setSelected(l),
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1.1fr 1fr 1fr auto',
      gap: 12,
      padding: '12px 16px',
      alignItems: 'center',
      cursor: 'pointer',
      borderTop: i ? '1px solid hsl(var(--border))' : 'none',
      background: selected && selected.id === l.id ? 'hsl(var(--accent))' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: l.name,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'hsl(var(--foreground))',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'hsl(var(--muted-foreground))',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, l.job))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(ScoreChip, {
    score: l.score,
    tone: l.tone
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'hsl(var(--neutral-600))'
    }
  }, l.source), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-sans)',
      color: l.assignee ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))'
    }
  }, l.assignee || 'Unassigned'), /*#__PURE__*/React.createElement(StatusBadge, {
    status: l.status
  }))))), selected && /*#__PURE__*/React.createElement(LeadDetail, {
    lead: selected,
    onClose: () => setSelected(null)
  }));
}
Object.assign(window, {
  LeadCenter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/LeadCenter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/QuotesDashboard.jsx
try { (() => {
/* QuotesDashboard — the quotes view: page header, accepted/pending stat tiles,
 * a filter bar, and the quote list. Composes DS Card / StatusBadge / Button /
 * Input / Badge. Mirrors DemoQuotesDashboard.tsx. */
const {
  Button,
  Card,
  StatusBadge,
  Input,
  Badge
} = window.LeadToWorkDesignSystem_b90026;
function StatTile({
  variant,
  label,
  value,
  count,
  icon
}) {
  const fg = variant === 'success' ? 'var(--success-700)' : 'var(--danger-700)';
  const fgStrong = variant === 'success' ? 'var(--success-800)' : 'var(--danger-800)';
  const fgIcon = variant === 'success' ? 'var(--success-600)' : 'var(--danger-600)';
  return /*#__PURE__*/React.createElement(Card, {
    variant: variant,
    style: {
      flex: 1,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px var(--font-sans)',
      color: fg
    }
  }, label), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: fgIcon
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 22px var(--font-sans)',
      color: fgStrong,
      marginTop: 6
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: fgIcon,
      marginTop: 2
    }
  }, count, " quotes"));
}
function FilterChip({
  label,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      font: '500 13px var(--font-sans)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer',
      border: '1px solid ' + (active ? 'hsl(var(--primary))' : 'hsl(var(--border))'),
      background: active ? 'hsl(var(--primary) / 0.10)' : 'hsl(var(--card))',
      color: active ? 'hsl(var(--primary))' : 'hsl(var(--neutral-600))',
      transition: 'all var(--transition-fast)'
    }
  }, label);
}
function QuoteRow({
  q,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Card, {
    onClick: () => onOpen(q),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: 16,
      cursor: 'pointer',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transition: 'box-shadow var(--transition-fast)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'hsl(var(--brand-50))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "FileText",
    size: 20,
    color: "hsl(var(--brand-700))"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'hsl(var(--foreground))'
    }
  }, q.name), q.pinned && /*#__PURE__*/React.createElement(Icon, {
    name: "Pin",
    size: 13,
    color: "hsl(var(--muted-foreground))"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'hsl(var(--muted-foreground))',
      marginTop: 2
    }
  }, q.customer, " \xB7 ", q.area, " \xB7 sent ", q.sent)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px var(--font-sans)',
      color: 'hsl(var(--foreground))'
    }
  }, window.huf(q.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: q.status
  }))), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 18,
    color: "hsl(var(--muted-foreground))"
  })));
}
function QuotesDashboard({
  onOpenQuote,
  onNew
}) {
  const [filter, setFilter] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const filters = ['all', 'draft', 'sent', 'viewed', 'accepted', 'rejected'];
  let list = window.QUOTES.filter(q => filter === 'all' || q.status === filter);
  if (search.trim()) {
    const s = search.toLowerCase();
    list = list.filter(q => q.name.toLowerCase().includes(s) || q.customer.toLowerCase().includes(s));
  }
  const accepted = window.QUOTES.filter(q => q.status === 'accepted');
  const pending = window.QUOTES.filter(q => ['sent', 'viewed', 'draft'].includes(q.status));
  const sum = arr => arr.reduce((a, q) => a + q.total, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px',
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "FileBarChart",
    size: 30,
    color: "hsl(var(--primary))"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '700 24px var(--font-sans)',
      color: 'hsl(var(--primary))',
      letterSpacing: '-0.02em'
    }
  }, "Quotes"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'hsl(var(--muted-foreground))',
      marginTop: 2
    }
  }, "Your itemised quotes \u2014 sent, viewed and accepted"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "RotateCcw",
    size: 15
  }), "Reset"), /*#__PURE__*/React.createElement(Button, {
    onClick: onNew
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Plus",
    size: 16
  }), "New quote"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    variant: "success",
    label: "Accepted",
    value: window.huf(sum(accepted)),
    count: accepted.length,
    icon: "CheckCircle"
  }), /*#__PURE__*/React.createElement(StatTile, {
    variant: "danger",
    label: "Pending",
    value: window.huf(sum(pending)),
    count: pending.length,
    icon: "Clock"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 16,
    color: "hsl(var(--muted-foreground))",
    style: {
      position: 'absolute',
      left: 10,
      top: 12
    }
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search quotes\u2026",
    value: search,
    onChange: e => setSearch(e.target.value),
    style: {
      paddingLeft: 32
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(FilterChip, {
    key: f,
    label: f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1),
    active: filter === f,
    onClick: () => setFilter(f)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'hsl(var(--primary))'
    }
  }, "My quotes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, list.map(q => /*#__PURE__*/React.createElement(QuoteRow, {
    key: q.id,
    q: q,
    onOpen: onOpenQuote
  })), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 0',
      color: 'hsl(var(--muted-foreground))',
      font: '400 14px var(--font-sans)'
    }
  }, "No quotes match your filters.")));
}
Object.assign(window, {
  QuotesDashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/QuotesDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/data.jsx
try { (() => {
/* Mock data for the LeadToWork CRM kit — believable demo content modelled on
 * the app's quote dashboard and lead center (construction trades, HUF). */

const QUOTES = [{
  id: 'q1',
  name: 'Bathroom retile — Buda flat',
  customer: 'James Roberts',
  area: '8 m²',
  status: 'accepted',
  total: 420000,
  sent: '2 days ago',
  pinned: true
}, {
  id: 'q2',
  name: 'Kitchen floor — porcelain',
  customer: 'Sophie Marsh',
  area: '14 m²',
  status: 'sent',
  total: 685000,
  sent: '5 hours ago',
  pinned: false
}, {
  id: 'q3',
  name: 'Hallway + stairs tiling',
  customer: 'Dan Kovács',
  area: '11 m²',
  status: 'viewed',
  total: 510000,
  sent: 'yesterday',
  pinned: false
}, {
  id: 'q4',
  name: 'Terrace paving — granite',
  customer: 'Nagy Építő Kft.',
  area: '46 m²',
  status: 'draft',
  total: 1240000,
  sent: '—',
  pinned: false
}, {
  id: 'q5',
  name: 'Wet room — full refit',
  customer: 'Erika Tóth',
  area: '6 m²',
  status: 'rejected',
  total: 380000,
  sent: '1 week ago',
  pinned: false
}, {
  id: 'q6',
  name: 'Garage epoxy floor',
  customer: 'Bauer Home',
  area: '32 m²',
  status: 'accepted',
  total: 540000,
  sent: '3 days ago',
  pinned: false
}];
const LEADS = [{
  id: 'l1',
  name: 'James Roberts',
  job: 'Bathroom retile · 8 m²',
  source: 'Facebook Ad',
  score: 94,
  tone: 'hot',
  status: 'new',
  when: '6m ago',
  assignee: null
}, {
  id: 'l2',
  name: 'Sophie Marsh',
  job: 'Kitchen floor · 14 m²',
  source: 'Web form',
  score: 78,
  tone: 'warm',
  status: 'qualified',
  when: '40m ago',
  assignee: 'Anna K.'
}, {
  id: 'l3',
  name: 'Dan Kovács',
  job: 'Hallway tiles · 6 m²',
  source: 'Facebook Ad',
  score: 89,
  tone: 'hot',
  status: 'contacted',
  when: '2h ago',
  assignee: 'Béla V.'
}, {
  id: 'l4',
  name: 'Nagy Építő Kft.',
  job: 'Terrace paving · 46 m²',
  source: 'Referral',
  score: 71,
  tone: 'warm',
  status: 'qualified',
  when: '5h ago',
  assignee: 'Anna K.'
}, {
  id: 'l5',
  name: 'Erika Tóth',
  job: 'Wet room refit · 6 m²',
  source: 'Web form',
  score: 52,
  tone: 'cold',
  status: 'contacted',
  when: 'yesterday',
  assignee: 'Béla V.'
}, {
  id: 'l6',
  name: 'Bauer Home',
  job: 'Garage epoxy · 32 m²',
  source: 'Praktiker',
  score: 83,
  tone: 'hot',
  status: 'converted',
  when: '2 days ago',
  assignee: 'Anna K.'
}];
const NAV = [{
  id: 'requesters',
  label: 'Requesters',
  icon: 'ClipboardList',
  badge: 3
}, {
  id: 'quotes',
  label: 'Quotes',
  icon: 'FileText'
}, {
  id: 'plans',
  label: 'Plans',
  icon: 'Map'
}, {
  id: 'tasks',
  label: 'My Tasks',
  icon: 'ListChecks',
  badge: 2
}, {
  id: 'pros',
  label: 'Pros',
  icon: 'HardHat'
}, {
  id: 'catalog',
  label: 'Catalog',
  icon: 'Package'
}, {
  id: 'stats',
  label: 'Statistics',
  icon: 'BarChart3'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'Settings'
}];
function huf(n) {
  return new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    maximumFractionDigits: 0
  }).format(n);
}
Object.assign(window, {
  QUOTES,
  LEADS,
  NAV,
  huf
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/icons.jsx
try { (() => {
/* Lucide icon bridge — renders any Lucide icon from the CDN UMD global as an
 * inline SVG React element, matching the lucide-react usage in the real app. */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  ...rest
}) {
  const lib = window.lucide || {};
  const node = lib.icons && lib.icons[name] || lib[name];
  if (!node) {
    return React.createElement('span', {
      style: {
        width: size,
        height: size,
        display: 'inline-block',
        ...style
      }
    });
  }
  const children = (Array.isArray(node) ? node : node.slice ? node : []).map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  }));
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      flexShrink: 0,
      ...style
    },
    ...rest
  }, children);
}
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
