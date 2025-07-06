import * as React from "react";

type HeroSectionProps = {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    badges?: { label: string; icon: string }[];
    scrollToId?: string;
};

export default function HeroSection({
                                        title,
                                        subtitle,
                                        badges = [],
                                        scrollToId = "educational-content",
                                    }: HeroSectionProps) {
    const scrollToNext = () => {
        const element = document.getElementById(scrollToId);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

    return (
        <section className="neural-bg py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    {title}
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                    {subtitle}
                </p>

                {badges.length > 0 && (
                    <div className="flex items-center justify-center space-x-4 mb-12">
                        {badges.map((badge, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
                            >
                                <i className={`${badge.icon} text-primary`}></i>
                                <span className="text-sm font-medium text-gray-700">
                  {badge.label}
                </span>
                            </div>
                        ))}
                    </div>
                )}

                <button
                    onClick={scrollToNext}
                    className="w-8 h-8 mx-auto flex items-center justify-center rounded-full border-2 border-gray-400 animate-bounce hover:border-primary transition-colors cursor-pointer"
                >
                    <i className="ri-arrow-down-s-line text-gray-500"></i>
                </button>
            </div>
        </section>
    );
}