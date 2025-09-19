import React, { type ReactNode } from "react";

type BitContent = {
  id: number;
  title: string;
  content: ReactNode;
};

const Bit: React.FC<BitContent> = ({ id, title, content }) => {
  return (
    <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
      {/* Number */}
      <div className="font-bold">Wissenshäppchen {id}</div>

      {/* Title */}
      <h2 className="font-semibold">{title}</h2>

      {/* Content */}
      <div className="font-small">{content}</div>
    </div>
  );
};

export default Bit;
