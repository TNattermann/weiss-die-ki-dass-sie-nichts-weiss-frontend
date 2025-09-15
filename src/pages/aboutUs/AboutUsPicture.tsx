import { useEffect } from "react";

export default function AboutUsPicture() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-6 text-center">
      <h1 className="text-5xl font-bold text-center text-primary mb-6">
        Über uns
      </h1>

      <div>
        <img
          src={"img/Gruppenbild.png"}
          alt={"Gruppenbild"}
          className="w-full h-150 rounded-2xl flex items-center justify-center"
        />
        <p className="mt-2 text-sm text-text-normal">
          v.l.n.r. Cameron, Natalia ...
        </p>
      </div>
    </div>
  );
}
