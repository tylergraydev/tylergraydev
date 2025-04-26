export default function SkillChip({ skill }: { skill: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        {skill}
      </div>
    </div>
  );
}
