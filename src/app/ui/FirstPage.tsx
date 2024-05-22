
export default function FirstPage() {

  return (
    <div className="min-h-screen flex items-center justify-center sm:p-24 p-6 text-slate-200 bg-violet-950">
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center animate-fade-in">
        {/*
          <Image
            src={faceSelfie}
            width={400}
            height={400}
            alt="A picture of me!"
          />
            */}
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
  );
}
