import AboutUsPicture from "./AboutUsPicture";
import AboutUsText from "./AboutUsText";

function AboutUs() {
  return (
    <div className="min-h-screen">
      <main className="flex-1 max-w-7xl mx-auto space-y-6 px-4">
        <div id="picture">
          <AboutUsPicture />
        </div>
        <div id="text">
          <AboutUsText />
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
