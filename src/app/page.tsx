import Image from "next/image";
import SkillsList from "./ui/SkillsList";
import SkillsListItem from "./ui/SkillsListItem";
const faceSelfie = "/placeholder.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="min-h-screen flex items-center justify-center sm:p-24 p-6 text-slate-200 bg-violet-950">
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center animate-fade-in">
          <Image
            src={faceSelfie}
            width={400}
            height={400}
            alt="A picture of me!"
          />
          <div className="inline-flex flex-col gap-4">
            <div className="animation-fade text-3xl sm:text-6xl">Hi, I am Souheab</div>
            <div className="text-xl sm:text-2xl text-slate-300">
              I am a software engineer who loves to build things and learn new
              technologies. I am passionate about web development and I am
              currently working with React, Next.js, and TypeScript.
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl sm:text-5xl self-start">Technical Skills</h1>
      <div className="sm:flex w-5/6 py-5 gap-4">
        <SkillsList
          skillsListTitle="Languages"
          skillsListItems={
            <>
              <SkillsListItem
                skillName="Go"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Python"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="JavaScript"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              />
              <SkillsListItem
                skillName="TypeScript"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              />
              <SkillsListItem
                skillName="HTML"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="CSS"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Java"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="C"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
              />
              <SkillsListItem
                skillName="Lua"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg"
              />
            </>
          }
        />
        <SkillsList
          skillsListTitle="Frameworks & Libraries"
          skillsListItems={
            <>
              <SkillsListItem
                skillName="React"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Next.js"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="TailwindCSS"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              />
              <SkillsListItem
                skillName="MatPlotLib"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="OpenCV"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="NumPy"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Pandas"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="scikit-learn"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
              />
            </>
          }
        />
        <SkillsList
          skillsListTitle="Tools"
          skillsListItems={
            <>
              <SkillsListItem
                skillName="Git"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              />
              <SkillsListItem
                skillName="Linux"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
              />
              <SkillsListItem
                skillName="Emacs"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/emacs/emacs-original.svg"
              />
              <SkillsListItem
                skillName="Vim"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg"
              />
              <SkillsListItem
                skillName="VSCode"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg"
              />
            </>
          }
        />
      </div>
      <h1 className="text-3xl sm:text-5xl self-start">Contact Me</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl my-4">Write me an email:</div>
        <a
          href="mailto:souheab.ja@gmail.com"
          className="text-blue-500 text-2xl hover:underline"
        >
          souheab.ja@gmail.com
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
    </main>
  );
}
