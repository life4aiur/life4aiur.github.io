import "./App.scss";

import { Card } from "primereact/card";
import Header from "./header/Header";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <section className="app-content">
        <div className="grid">
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
        </div>
      </section>
      <footer className="app-footer p-2 bg-blue-900">
        Under construction <i className="pi pi-spin pi-spinner"></i>
      </footer>
    </div>
  );
}

export default App;
