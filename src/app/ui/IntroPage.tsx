import BobbingArrow from "./BobbingArrow";

export default function IntroPage() {
  return (
    <section className="panel intro-section-div min-h-screen relative flex items-center justify-center sm:p-24 p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
        <div className="inline-flex flex-col gap-4">
          <div className="name-text text-3xl sm:text-6xl">
            Hi, I am Souheab
          </div>
          <div className="text-xl sm:text-2xl text-slate-300">
            I am a software engineer who loves to build things and learn new
            technologies.
          </div>
          <BobbingArrow className="absolute bottom-5 left-1/2 -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}
