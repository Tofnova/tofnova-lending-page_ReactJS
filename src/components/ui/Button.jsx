import { useRef } from "react";
import useMagnetic from "../../hooks/useMagnetic";

/**
 * Pill button with the magnetic hover effect.
 * Renders <a> when `href` is given, otherwise <button>.
 * variant: "primary" | "ghost" | "light"
 */
export default function Button({ variant = "primary", className = "", href, children, ...rest }) {
  const ref = useRef(null);
  useMagnetic(ref);
  const cls = `btn btn-${variant} magnetic ${className}`.trim();

  if (href) {
    return (
      <a ref={ref} href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} className={cls} {...rest}>
      {children}
    </button>
  );
}
