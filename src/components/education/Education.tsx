import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import "./Education.scss";
import type { SectionProps } from "../../types";
import marquetteLogo from "../../assets/logos/marquette_logo.jpg";

function Education({ id }: SectionProps) {
  return (
    <section id={id} className="education">
      <div className="container">
        <h2>Education</h2>
        <Card className="education__card mb-4">
          <div className="education__content flex align-items-center">
            <Avatar
              image={marquetteLogo}
              size="large"
              shape="circle"
              className="mr-3 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="mb-2">
                <strong>Bachelor of Science in Computer Science</strong> (Minor
                in Biology)
              </div>
              <div className="mb-1">
                Marquette University – Milwaukee, Wisconsin
              </div>
              <div className="text-sm font-semibold">2005–2009</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Education;
