"use client"

export default function SkillChip({ skill, onClick }: { skill: string, onClick: (val: string) => void }) {
  return (
    <div className="flex items-center justify-center" onClick={() => onClick(skill)}>
      <div className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        {skill}
      </div>
    </div>
  );
}
