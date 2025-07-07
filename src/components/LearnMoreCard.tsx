import { Link } from "react-router-dom";
import React from "react";

interface InfoCardProps {
    icon: string;
    iconColor: string; // Tailwind class
    bgColor: string;   // Tailwind class
    title: string;
    description: React.ReactNode;
    linkText: string;
    linkTo: string;
}

export default function InfoCard({
                                     icon,
                                     iconColor,
                                     bgColor,
                                     title,
                                     description,
                                     linkText,
                                     linkTo,
                                 }: InfoCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
            <div className={`w-14 h-14 flex items-center justify-center ${bgColor} rounded-xl mb-6`}>
                <i className={`${icon} ${iconColor} text-2xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-700 font-semibold mb-6 leading-relaxed flex-grow">{description}</p>
                <Link
                    to={linkTo}
                    className={`${iconColor} font-medium flex items-center hover:opacity-80 transition-colors mt-auto`}
                >
                    {linkText}
                    <i className="ri-arrow-right-line ml-2"></i>
                </Link>
        </div>
    );
}
