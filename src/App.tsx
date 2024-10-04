import "./App.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Section from "./sections/Section";
import Work from "./sections/work/Work";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const dummyPlaceholder = (
    <div>
      <div className="font-medium text-500 mb-3">
        Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.
      </div>
      <div
        style={{ height: "150px" }}
        className="border-2 border-dashed border-300"
      ></div>
    </div>
  );

  return [
    <Header />,
    <section className="app__main">
      <Sidebar></Sidebar>
      <div className="app__content">
        <main>
          <Section title="About">{dummyPlaceholder}</Section>
          <Section title="Work">
            <Work></Work>
          </Section>
          <Section title="Contact">{dummyPlaceholder}</Section>
        </main>
      </div>
      <Footer />
    </section>,
  ];
}

export default App;
