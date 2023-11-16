"use client"
import AboutLink from "@/components/AboutLink"
import OrangeFolder from "../../assets/folder-orange.svg"
import BlueFolder from "../../assets/folder-blue.svg"
import RedFolder from "../../assets/folder-red.svg"
import TurquoiseFolder from "../../assets/folder-turquoise.svg"
import PurpleFolder from "../../assets/folder-open-purple.svg"
import OrangeOpenFolder from "../../assets/folder-open-orange.svg"
import BlueOpenFolder from "../../assets/folder-open-blue.svg"
import RedOpenFolder from "../../assets/folder-open-red.svg"
import PurpleOpenFolder from "../../assets/folder-open-purple.svg"
import TurquoiseOpenFolder from "../../assets/folder-open-turquoise.svg"
import { useState } from "react"
import { Scrollbar } from "@/components/Scrollbar"
import TextDisplay from "@/components/TextDisplay"
import SnippetsSlider from "@/components/SnippetsSlider"

const snippets = [1, 2, 3, 4, 5, 6, 7];

const AboutPage = () => {

  const [section, setSection] = useState<string>("bio");

  return (
    <div className="w-full h-full grid grid-cols-about-layout">
      <div className="p-4 border-r border-r-line-color">
        <ul className="flex flex-col justify-start items-start gap-2">
          <AboutLink
            section={section}
            setSection={setSection}
            path="bio"
            text="bio"
            img={section === "bio" ? OrangeOpenFolder : OrangeFolder}
          />
          <AboutLink
            section={section}
            setSection={setSection}
            path="experience"
            text="experience"
            img={section === "experience" ? BlueOpenFolder : BlueFolder}
          />
          <AboutLink
            section={section}
            setSection={setSection}
            path="education"
            text="education"
            img={section === "education" ? RedOpenFolder : RedFolder}
          />
          <AboutLink
            section={section}
            setSection={setSection}
            path="skills"
            text="skills"
            img={section === "skills" ? TurquoiseOpenFolder : TurquoiseFolder}
          />
        </ul>
      </div>
      <div className="overflow-y-auto py-4 px-6 border-r border-r-line-color">
        <TextDisplay section={section} />
      </div>
      <div className="grid grid-cols-text-display-layout px-10">
        <SnippetsSlider snippets={snippets} />
      </div>
    </div>
  )
}

export default AboutPage