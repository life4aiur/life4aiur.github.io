import "./App.scss";

import Header from "./header/Header";

function App() {
  return (
    <div className="app">
      <section className="app-content">
        <div className="app__side__content flex-column bg-blue-900 z-5 fixed top-0 bottom-0">
          <div className="flex flex-column flex-grow-1 p-2 gap-3 overflow-y-auto">
            <div className="flex flex-shrink-0">Logo</div>
            <nav className="flex flex-column flex-1">
              <ul className="flex flex-column flex-1">
                <li>
                  <ul>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                  </ul>
                </li>
                <li className="mt-auto">Bottom</li>
              </ul>
            </nav>
          </div>
        </div>
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
