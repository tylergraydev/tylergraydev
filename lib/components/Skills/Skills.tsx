import SkillGroup from "../SkillGroup/SkillGroup";

export default function Skills({
  skills,
}: {
  skills: { title: string; skills: string[] }[];
}) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="list-disc list-inside max-w-2xl px-4">
        {skills.map((skills, index) => (
          <div key={index} className="mb-2">
            <SkillGroup skills={skills.skills} title={skills.title} />
          </div>
        ))}
      </ul>
    </div>
  );
}
