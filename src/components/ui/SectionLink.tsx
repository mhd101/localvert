"use client";

import Link from "next/link";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

type SectionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  align?: ScrollLogicalPosition;
};

export default function SectionLink({
  href,
  children,
  className,
  style,
  align = "start",
}: SectionLinkProps) {
  const normalizedHref = href.startsWith("#") ? `/${href}` : href;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const hashIndex = href.indexOf("#");

    if (hashIndex === -1) {
      return;
    }

    const id = href.slice(hashIndex + 1);
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    event.preventDefault();

    window.history.pushState(null, "", `#${id}`);
    element.scrollIntoView({
      behavior: "smooth",
      block: align,
    });
  }

  return (
    <Link href={normalizedHref} className={className} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}
