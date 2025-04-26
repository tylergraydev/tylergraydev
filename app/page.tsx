import About from "../lib/components/About/About";
import Nav from "../lib/components/Nav/Nav";
import Skills from "../lib/components/Skills/Skills";
import "./page.css";

export default function Home() {
  return (
    <>
      <Nav />
      <About />
      <Skills
        skills={[
          {
            title: "Languages",
            skills: [
              "JavaScript",
              "TypeScript",
              "Python",
              "Java",
              "C++",
              "C#",
              "Go",
              "Rust",
            ],
          },
          {
            title: "Frameworks",
            skills: [
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "Django",
              "Flask",
            ],
          },
          {
            title: "Databases",
            skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
          },
          {
            title: "Tools & Technologies",
            skills: ["Git", "Docker", "Kubernetes", "AWS", "Azure", "GCP"],
          },
        ]}
      />
    </>
  );
}
