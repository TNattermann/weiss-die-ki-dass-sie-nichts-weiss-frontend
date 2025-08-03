import { useEffect, useState } from "react";

interface Section {
    id: string;
    title: string;
}

interface Props {
    sections: Section[];
}

export default function SectionSidebar({ sections }: Props) {
    const [activeId, setActiveId] = useState<string | null>(sections.length > 0 ? sections[0].id : null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);
                if (visibleEntries.length > 0) {
                    const topMost = visibleEntries.reduce((prev, curr) =>
                        prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
                    );
                    setActiveId(topMost.target.id);
                }
            },
            {
                rootMargin: "-30% 0px -60% 0px",
                threshold: 0.1,
            }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            sections.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, [sections]);


    // HINWEIS: Dieser neue useEffect fängt die Ränder der Seite (ganz oben / ganz unten) ab
    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
            const isAtTop = window.scrollY < 10; // 10px Toleranz

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
            const offset = -96; // Höhe deiner fixierten Navbar
            const y = el.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveId(id);
        }
    };


    return (
        <aside className="fixed top-24 overflow-auto hidden lg:block pr-8">
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
        </aside>
    );
}