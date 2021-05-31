import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utama from "./utama";
import { Content, Drawer, Header, Layout, Navigation } from "react-mdl";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Portofolio" scroll>
            <Navigation>
              <Link to="/beranda">Beranda</Link>
              <Link to="/tentangsaya">Tentang Saya</Link>
              <Link to="/karya">Karya</Link>
              <Link to="/kontak">Kontak</Link>
            </Navigation>
          </Header>
          <Drawer title="Portofolio">
            <Navigation>
              <Link to="/beranda">Beranda</Link>
              <Link to="/tentangsaya">Tentang Saya</Link>
              <Link to="/karya">Karya</Link>
              <Link to="/kontak">Kontak</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Utama />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
