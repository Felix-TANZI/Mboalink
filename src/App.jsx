import "./styles/theme.css";
import "./styles/ui.css";

import Topbar from "./components/Topbar";
import Subnav from "./components/Subnav";
import ClearAddressForm from "./components/ClearAddressForm";
import ClearedTable from "./components/ClearedTable";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Topbar active="Logins" />
      <Subnav active="Login by Address" />

      <main className="page">
        <div className="wrap">
          <section className="panel" aria-label="Clear IP/MAC Address">
            <header className="panelHeader">
              <h1 className="panelTitle">Clear IP/MAC Address</h1>
              <p className="panelSubtitle">
                If the IP you want to clear is a public IP, you must specify the network interface.
              </p>
            </header>

            <ClearAddressForm />
            <ClearedTable />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
