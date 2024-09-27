import "./App.scss";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <section className="app-content">
        <Sidebar></Sidebar>
        <div className="app__content">
          <Header></Header>
          <main></main>
          <footer className="app-footer p-2 bg-blue-900">
            Under construction <i className="pi pi-spin pi-spinner"></i>
          </footer>
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
