import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import "./Experience.scss";
import type { SectionProps } from "../../types";
import symplrLogo from "../../assets/logos/symplr_logo.jpg";
import geHealthcareLogo from "../../assets/logos/gehealthcare_logo.jpg";
import apiHealthcareLogo from "../../assets/logos/api_healthcare.png";

function Experience({ id }: SectionProps) {
  return (
    <section id={id} className="experience">
      <div className="container">
        <h2>Experience</h2>
        <Card className="experience__card mb-4">
          <div className="flex align-items-start mb-2">
            <Avatar
              image={symplrLogo}
              size="large"
              shape="circle"
              className="mr-3 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex justify-content-between align-items-start mb-2">
                <div>
                  <div className="font-bold text-lg mb-1">
                    Senior Staff Software Engineer
                  </div>
                  <div className="text-primary mb-2">symplr</div>
                  <div className="line-height-3">
                    Lead engineer driving the creation of symplr's front-end
                    design system and component library
                  </div>
                </div>
                <div className="text-sm font-semibold text-right ml-3">
                  2024–Present
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="experience__card mb-4">
          <div className="flex align-items-start mb-2">
            <Avatar
              image={symplrLogo}
              size="large"
              shape="circle"
              className="mr-3 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex justify-content-between align-items-start mb-2">
                <div>
                  <div className="font-bold text-lg mb-1">
                    Staff Software Engineer
                  </div>
                  <div className="text-primary mb-2">symplr</div>
                  <div className="line-height-3">
                    Advanced technical leadership in frontend architecture and
                    development practices
                  </div>
                </div>
                <div className="text-sm font-semibold text-right ml-3">
                  2021–2024
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="experience__card mb-4">
          <div className="flex align-items-start mb-2">
            <Avatar
              image={symplrLogo}
              size="large"
              shape="circle"
              className="mr-3 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex justify-content-between align-items-start mb-2">
                <div>
                  <div className="font-bold text-lg mb-1">
                    Senior Software Engineer
                  </div>
                  <div className="text-primary mb-2">
                    symplr - Hartford, Wisconsin
                  </div>
                  <div className="line-height-3">
                    Frontend development and technical contributions to
                    healthcare technology solutions
                  </div>
                </div>
                <div className="text-sm font-semibold text-right ml-3">
                  2018–2021
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="experience__card mb-4">
          <div className="flex align-items-start mb-2">
            <Avatar
              image={geHealthcareLogo}
              size="large"
              shape="circle"
              className="mr-3 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex justify-content-between align-items-start mb-2">
                <div>
                  <div className="font-bold text-lg mb-1">
                    Senior Software Engineer
                  </div>
                  <div className="text-primary mb-2">
                    GE Healthcare (acquired by symplr)
                  </div>
                  <div className="line-height-3">
                    Transitioned legacy on-premise applications to SaaS
                    solutions and converted ASP.NET web apps to Angular
                  </div>
                </div>
                <div className="text-sm font-semibold text-right ml-3">
                  2016–2018
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="experience__card mb-4">
          <div className="flex align-items-start mb-2">
            <Avatar
              image={geHealthcareLogo}
              size="large"
              shape="circle"
              className="mr-3 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex justify-content-between align-items-start mb-2">
                <div>
                  <div className="font-bold text-lg mb-1">
                    Software Engineer II
                  </div>
                  <div className="text-primary mb-2">GE Healthcare</div>
                  <div className="line-height-3">
                    Developed Ionic-based mobile UI for Mobile Workforce
                    staffing and scheduling system
                  </div>
                </div>
                <div className="text-sm font-semibold text-right ml-3">
                  2014–2016
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="experience__card mb-4">
          <div className="flex align-items-start mb-2">
            <Avatar
              image={apiHealthcareLogo}
              size="large"
              shape="circle"
              className="mr-3 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex justify-content-between align-items-start mb-2">
                <div>
                  <div className="font-bold text-lg mb-1">
                    Software Engineer → Software Engineer II
                  </div>
                  <div className="text-primary mb-2">
                    API Healthcare (acquired by GE Healthcare)
                  </div>
                  <div className="line-height-3">
                    Started career in healthcare technology, progressed through
                    engineering roles
                  </div>
                </div>
                <div className="text-sm font-semibold text-right ml-3">
                  2009–2014
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Experience;
