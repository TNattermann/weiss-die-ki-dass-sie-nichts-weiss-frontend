import { useEffect, useState } from "react";

interface Section {
    id: string;
    title: string;
}

interface Props {
    sections: Section[];
}

export default function SectionSidebar({ sections }: Props) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveId(visible.target.id);
            },
            { rootMargin: "-40% 0% -55% 0%", threshold: 0 }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
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
                text-left text-lg font-semibold rounded-full px-6 py-2 transition-all duration-300
                ${
                                isActive
                                    ? "bg-primary-container-selected text-on-primary-container-selected"
                                    : "bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg"
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
