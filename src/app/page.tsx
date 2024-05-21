import Image from "next/image";
import SkillsList from "./ui/SkillsList";
import SkillsListItem from "./ui/SkillsListItem";
const faceSelfie = "/placeholder.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <Image
          src={faceSelfie}
          width={400}
          height={400}
          alt="A picture of me!"
        />
        <div className="flex flex-col gap-4">
          <div className="text-3xl sm:text-6xl">Hi, I am Souheab</div>
          <div className="text-xl sm:text-2xl">
            I am a software engineer who loves to build things and learn new
            technologies. I am passionate about web development and I am
            currently working with React, Next.js, and TypeScript.
          </div>
        </div>
      </div>
      <h1 className="text-3xl sm:text-5xl self-start">Technical Skills</h1>
      <div className="flex gap-4">
        <SkillsList
          skillsListItems={
            <>
              <SkillsListItem
                skillName="Go"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Python"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="JavaScript"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="TypeScript"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="HTML"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="CSS"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Java"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="C"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Lua"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
            </>
          }
        />
        <SkillsList
          skillsListItems={
            <>
              <SkillsListItem
                skillName="React"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Next.js"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="TailwindCSS"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="MatPlotLib"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="OpenCV"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="NumPy"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Pandas"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="scikit-learn"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
            </>
          }
        />
        <SkillsList
          skillsListItems={
            <>
              <SkillsListItem
                skillName="Git"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Linux"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Emacs"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="Vim"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="VSCode"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
              <SkillsListItem
                skillName="OpenSSH"
                skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
              />
            </>
          }
        />
      </div>
      <h1 className="text-3xl sm:text-5xl self-start">Contact Me</h1>
    </main>
  );
}
