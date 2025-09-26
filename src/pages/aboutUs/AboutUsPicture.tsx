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
        <div className="flex justify-center">
          <img
            src={"img/Gruppenbild.jpeg"}
            alt={"Gruppenbild"}
            className="w-240 h-auto rounded-2xl flex items-center justify-center"
          />
        </div>
        <p className="mt-2 text-sm text-text-normal">
          v.l.n.r. Darko, Torben, Natalia, Milli, Nico, Yannik, Cameron
        </p>
      </div>
    </div>
  );
}
