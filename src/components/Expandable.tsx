import { useState } from "react";

interface ExpandableProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Expandable({ title, children, className }: ExpandableProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bg-bgColor border border-outline rounded-lg p-4 ${className || ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full font-semibold text-primary"
      >
        <span>{title}</span>
        <span>{open ? "–" : "+"}</span>
      </button>

      {open && <div className="mt-2 text-text-normal leading-relaxed">{children}</div>}
    </div>
  );
}
