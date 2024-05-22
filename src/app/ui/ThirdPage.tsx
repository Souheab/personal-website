
export default function ThirdPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl self-start">Contact Me</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl my-4">Write me an email:</div>
        <a
          href="mailto:souheab.ja@gmail.com"
          className="text-blue-500 text-2xl hover:underline"
        >
          souheab.dev@gmail.com
        </a>
        <div className="text-xl my-4">Or find me on:</div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/souheab/"
            target="_blank"
          >
            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
          </a>
          <a
            href="https://github.com/Souheab"
            target="_blank"
          >
            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
