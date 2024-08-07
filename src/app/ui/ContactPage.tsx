import SectionHeader from "./SectionHeader";

export default function ContactPage() {
  return (
    <section className="panel contact-info-section-div min-h-screen relative flex flex-col items-center">
      <SectionHeader
        className="sm:text-5xl py-10 min mb-20 text-center"
        title="Contact Me"
      />
      <div className="text-xl my-4 mt-40">Write me an email:</div>
      <a
        href="mailto:souheab.ja@gmail.com"
        className="text-blue-500 text-2xl hover:underline"
      >
        souheab.dev@gmail.com
      </a>
      <div className="text-xl my-4">Or find me on:</div>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/souheab/" target="_blank">
          <img
            className="w-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
          />
        </a>
        <a href="https://github.com/Souheab" target="_blank">
          <img
            className="w-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          />
        </a>
      </div>
      <div className="absolute bottom-0">
        <div className="py-5">© 2024 Souheab, All rights reserved.</div>
      </div>
    </section>
  );
}
