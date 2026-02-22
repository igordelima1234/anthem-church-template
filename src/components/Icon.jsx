import * as LucideIcons from 'lucide-react';

/**
 * Icon — a reusable wrapper around lucide-react icons.
 *
 * Props:
 *   name        {string}  — PascalCase lucide icon name (e.g. "Menu", "ArrowRight")
 *   size        {number}  — icon dimensions in px (default: 24)
 *   strokeWidth {number}  — stroke thickness (default: 2)
 *   className   {string}  — additional Tailwind / CSS classes
 *   fill        {string}  — SVG fill value (default: "none")
 *   ...rest               — any other valid SVG / lucide prop (color, aria-label, etc.)
 *
 * Usage:
 *   <Icon name="Menu" size={28} className="text-white" />
 *   <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
 *   <Icon name="Play" size={40} fill="currentColor" />
 */
export default function Icon({ name, size = 24, strokeWidth = 2, className = '', fill = 'none', ...rest }) {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Icon] Unknown icon name: "${name}". Check https://lucide.dev for valid names.`);
    }
    return null;
  }

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      fill={fill}
      className={className}
      {...rest}
    />
  );
}
