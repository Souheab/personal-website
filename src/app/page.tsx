'use client'
import Image from "next/image";
import SkillsList from "./ui/SkillsList";
import SkillsListItem from "./ui/SkillsListItem";
const faceSelfie = "/placeholder.png";
import ReactPageScroller from 'react-page-scroller';
import { useState } from "react";
import FirstPage from "./ui/FirstPage";
import SecondPage from "./ui/SecondPage";
import ThirdPage from "./ui/ThirdPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ReactPageScroller>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
      </ReactPageScroller>
    </main>
  );
}
