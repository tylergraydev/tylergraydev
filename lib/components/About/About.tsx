export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-4  ">
      <div className="flex flex-row items-center justify-center max-w-2xl mx-auto p-4 ">
        <div>
          <h1 className="text-4xl font-bold mb-4">Hey There! I'm Tyler!</h1>
          <p className="text-lg text-center max-w-2xl px-4">
            Hi, I'm a Senior Software Developer at Emergent Software with a
            passion for building great software and constantly learning new
            technologies. I'm skilled in Angular, C#, React, and have strong
            expertise in Azure cloud development. I love tackling challenges,
            whether it's writing clean code, optimizing cloud solutions, or
            exploring new frameworks and tools. Outside of work, you’ll often
            find me building Lego creations, diving into Marvel stories, or
            adventuring through World of Warcraft.
          </p>
        </div>

        <img
          src="/images/me.webp"
          alt="Tyler Gray"
          className="rounded-full mt-8 w-48 h-48 object-cover"
        />
      </div>
    </div>
  );
}
