import SkillChip from "../SkillChip/SkillChip";

export default function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap items-center justify-center max-w-2xl px-4">
        {skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <SkillChip skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
