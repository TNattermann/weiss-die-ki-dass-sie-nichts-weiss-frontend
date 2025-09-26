import { useEffect, useState, useRef } from "react";

interface Section {
    id: string;
    title: string;
}

interface Props {
    sections: Section[];
}

export default function SectionSidebar({ sections }: Props) {
    const [activeId, setActiveId] = useState<string | null>(
        sections.length > 0 ? sections[0].id : null
    );
    // A ref to prevent the observer from overwriting the active section
    // immediately after a user clicks a sidebar link.
    const clickedRef = useRef(false);
    const clickTimeoutRef = useRef<number | null>(null);

    // This observer is for the main content area. It activates a section
    // when its top edge crosses the vertical center of the screen.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // If a click just happened, ignore observer entries for a short time.
                if (clickedRef.current) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                // This margin creates a 1px horizontal line at 50% of the viewport height.
                // A section is "intersecting" when it crosses this line.
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
            if (clickTimeoutRef.current) {
                window.clearTimeout(clickTimeoutRef.current);
            }
        };
    }, [sections]);

    // This effect handles the absolute top and bottom edges of the page,
    useEffect(() => {
        const handleScroll = () => {
            if (clickedRef.current) return;

            const isAtBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
            const isAtTop = window.scrollY < 10;

            if (isAtBottom) {
                setActiveId(sections[sections.length - 1].id);
            } else if (isAtTop) {
                setActiveId(sections[0].id);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            clickedRef.current = true;
            setActiveId(id);

            const offset = 96;
            const y = el.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({ top: y, behavior: "smooth" });

            if (clickTimeoutRef.current) {
                window.clearTimeout(clickTimeoutRef.current);
            }
            clickTimeoutRef.current = window.setTimeout(() => {
                clickedRef.current = false;
            }, 1000);
        }
    };

    return (
        <aside className="hidden lg:block">
            <div className="sticky top-24 pr-8">
                <nav className="flex flex-col space-y-3">
                    {sections.map(({ id, title }) => {
                        const isActive = activeId === id;
                        return (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className={`
                text-center text-lg font-semibold rounded-full px-6 py-2 transition-all duration-300
                ${
                                    isActive
                                        ? "bg-primary-container-selected text-on-primary-container-selected shadow-lg"
                                        : "bg-primary-container text-on-primary-container hover:brightness-110"
                                }
              `}
                            >
                                {title}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}