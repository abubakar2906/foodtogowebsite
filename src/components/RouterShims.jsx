"use client";
// Drop-in replacements for react-router-dom's <Link>/<NavLink> so the ported
// components can keep using `to=` and the auto-applied `active` class exactly
// as they did under React Router.
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export function Link({ to, children, ...props }) {
  return (
    <NextLink href={to} {...props}>
      {children}
    </NextLink>
  );
}

export function NavLink({ to, className, children, end = false, ...props }) {
  const pathname = usePathname();

  // Active only for the current route. For "/" this means an exact match
  // (so "Home" isn't highlighted on every page); nested routes also match
  // their parent link (e.g. "/rider/x" activates the "/rider" link).
  const isActive = end
    ? pathname === to
    : to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(to + "/");

  const base = typeof className === "string" ? className : "";
  const merged = isActive ? (base ? `${base} active` : "active") : base;

  return (
    <NextLink href={to} className={merged} {...props}>
      {children}
    </NextLink>
  );
}
