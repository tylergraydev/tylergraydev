import FadeIn from "./animations/FadeIn";
import SlideIn from "./animations/SlideIn";
import "./page.css";

export default function Home() {
  return (
    <div>
      <header>Tyler Gray, Senior Software Developer</header>
      <section className="content">
        <FadeIn>
          <SlideIn direction="left" duration={0.5}>
            <h1>Welcome to my portfolio</h1>
            <p>
              I am a Senior Software Developer with a passion for creating
              innovative solutions. Explore my work and get in touch!
            </p>
          </SlideIn>
        </FadeIn>
      </section>
      <section className="content">
        <FadeIn>
          <SlideIn direction="right" duration={0.5}>
            <h2>About Me</h2>
            <p>
              I have over 10 years of experience in software development,
              specializing in web applications and cloud solutions.
            </p>
          </SlideIn>
        </FadeIn>
      </section>
      <section className="content">
        <FadeIn>
          <SlideIn direction="left" duration={0.5}>
            <h2>My Work</h2>
            <p>
              I have worked on various projects, including e-commerce platforms,
              mobile applications, and enterprise software solutions.
            </p>
          </SlideIn>
        </FadeIn>
      </section>
      <section className="content">
        <FadeIn>
          <SlideIn direction="right" duration={0.5}>
            <h2>Contact Me</h2>
            <p>
              If you would like to discuss a project or just want to say hello,
              feel free to reach out!
            </p>
          </SlideIn>
        </FadeIn>
      </section>
      <section className="content">
        <FadeIn>
          <SlideIn direction="left" duration={0.5}>
            <h2>Follow Me</h2>
            <p>
              You can find me on LinkedIn, GitHub, and Twitter. Let's connect!
            </p>
          </SlideIn>
        </FadeIn>
      </section>
    </div>
  );
}

