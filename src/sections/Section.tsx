import { ReactNode } from "react";
import "./Section.scss";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

function Section(props: SectionProps) {
  return (
    <section id={props.id}>
      <div className="p-4">
        <div className="text-3xl font-medium text-900 mb-3">{props.title}</div>
        <div className="font-medium text-500 mb-3">{props.children}</div>
      </div>
    </section>
  );
}

export default Section;
