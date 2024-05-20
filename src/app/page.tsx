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
      <SkillsList
        skillsListItems={
          <SkillsListItem
            skillIconLink="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            skillName="React"
          />
        }
      />
    </main>
  );
}
