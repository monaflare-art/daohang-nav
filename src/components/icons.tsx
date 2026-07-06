type IconProps = {
  className?: string;
};

export function SearchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="m16 16 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export function ExternalIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M14 5h5v5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="m10 14 9-9" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M19 14v4.5A1.5 1.5 0 0 1 17.5 20h-12A1.5 1.5 0 0 1 4 18.5v-12A1.5 1.5 0 0 1 5.5 5H10" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export function BookmarkIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M7 5.5A2.5 2.5 0 0 1 9.5 3h5A2.5 2.5 0 0 1 17 5.5V21l-5-3-5 3V5.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function RankIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M5 19h14" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M7 16V9M12 16V5M17 16v-4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export function GridIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M5 5h5v5H5zM14 5h5v5h-5zM5 14h5v5H5zM14 14h5v5h-5z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function CategoryGlyph({ label, className = "h-4 w-4" }: { label: string; className?: string }) {
  const first = label.slice(0, 1);

  return (
    <span className={`${className} inline-flex items-center justify-center rounded-md bg-slate-100 text-[11px] font-black text-[#116b5f]`}>
      {first}
    </span>
  );
}
