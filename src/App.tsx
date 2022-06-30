import "./App.scss";

import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";

function App() {
  return (
    <div className="app">
      <header className="flex justify-content-between flex-wrap bg-blue-900">
        <h3 className="flex align-items-center justify-content-center m-2">Always under construction</h3>
        <Avatar className="flex align-items-center justify-content-center m-2" size="large" shape="circle" image="https://avatars.githubusercontent.com/u/17767531"/>
      </header>
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
        Under construction <i className="pi pi-spin pi-spinner"></i>
      </section>
      <footer className="app-footer p-2 bg-blue-900">
        Under construction <i className="pi pi-spin pi-spinner"></i>
      </footer>
    </div>
  );
}

export default App;
