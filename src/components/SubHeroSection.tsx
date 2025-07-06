import {Link} from "react-router-dom";
import {ArrowLeft, ChevronRight} from "lucide-react";
import type {JSX} from "react";

interface SubHeroSectionProps {
    backHref: string;
    backLabel: string;
    breadcrumbLabel: string;
    title: string | JSX.Element;
    subtitle: string | JSX.Element;
}

export default function SubHeroSection({
                                           backHref,
                                           backLabel,
                                           breadcrumbLabel,
                                           title,
                                           subtitle,
                                       }: SubHeroSectionProps) {
    return (
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-6">
                    <Link to={backHref} className="text-slate-600 hover:text-primary transition-colors">
                        <ArrowLeft className="h-5 w-5 mr-2 inline"/>
                        {backLabel}
                    </Link>
                    <ChevronRight className="h-4 w-4 mx-2 text-slate-400"/>
                    <span className="text-slate-800 font-medium">{breadcrumbLabel}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">{title}</h1>
                <p className="text-xl text-slate-600 max-w-3xl">{subtitle}</p>
            </div>
        </section>
    );
}
