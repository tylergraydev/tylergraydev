"use client";

import { useState } from "react";
import SkillChip from "../SkillChip/SkillChip";
import SkillDetail from "../SkillDetail/SkillDetail";

export default function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  const [skill, setSkill] = useState<string | undefined>(undefined);
  const handleClick = (skill: string) => {
    setSkill((existingSkill) => (existingSkill === skill ? undefined : skill));
  };
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap items-center justify-center max-w-2xl px-4">
        {skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <SkillChip skill={skill} onClick={handleClick} />
          </div>
        ))}
        {skill && <SkillDetail skill={skill} />}
      </div>
    </div>
  );
}
