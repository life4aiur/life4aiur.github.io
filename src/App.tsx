import "./App.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Work from "./work/Work";

function App() {
  return (
    <div className="app">
      <section className="app-content">
        <Sidebar></Sidebar>
        <div className="app__content">
          <Header />
          <main>
            <section>
              <div className="p-4">
                <div className="text-3xl font-medium text-900 mb-3">About</div>
                <div className="font-medium text-500 mb-3">
                  Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.
                </div>
                <div
                  style={{ height: "150px" }}
                  className="border-2 border-dashed border-300"
                ></div>
              </div>
            </section>
            <section>
              <div className="p-4">
                <div className="text-3xl font-medium text-900 mb-3">Work</div>
                <Work></Work>
              </div>
            </section>
            <section>
              <div className="p-4">
                <div className="text-3xl font-medium text-900 mb-3">
                  Contact
                </div>
                <div className="font-medium text-500 mb-3">
                  Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.
                </div>
                <div
                  style={{ height: "150px" }}
                  className="border-2 border-dashed border-300"
                ></div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
