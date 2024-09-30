import "./App.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <section className="app-content">
        <Sidebar></Sidebar>
        <div className="app__content">
          <Header />
          <main>
            <section>
              <div className="surface-0 p-4 shadow-2 border-round">
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
              <div className="surface-0 p-4 shadow-2 border-round">
                <div className="text-3xl font-medium text-900 mb-3">Work</div>
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
              <div className="surface-0 p-4 shadow-2 border-round">
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
        {/* <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <Card>A</Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <Card>A</Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <Card>A</Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <Card>A</Card>
          </div>
        </div> */}
      </section>
      {/* <footer className="app-footer p-2 bg-blue-900">
        Under construction <i className="pi pi-spin pi-spinner"></i>
      </footer> */}
    </div>
  );
}

export default App;
