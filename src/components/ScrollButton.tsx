'use client';

import Link from 'next/link';

interface ScrollButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function ScrollButton({ href, className, children }: ScrollButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Link 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
} 