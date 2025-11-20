import type { SectionProps } from "../../types";

function About({ id }: SectionProps) {
  return (
    <section id={id}>
      <div className="container">
        <h2>About</h2>
        <p className="about-text">
          As a Senior Staff Software Engineer at symplr, I specialize in
          front-end development with a deep focus on design systems and hybrid
          mobile applications. Based in Wisconsin, I'm passionate about creating
          scalable, user-centric solutions that bridge the gap between design
          and functionality. Outside of work, I'm a girl-dad to three amazing
          daughters, a fan of Star Wars and Tolkien lore, and enjoy playing bass
          and guitar. I bring the same creativity and dedication to everything I
          do.
        </p>
      </div>
    </section>
  );
}

export default About;
