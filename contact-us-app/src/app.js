// src/App.js
import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App bg-success-subtle">
      <Header />
      <main className="d-block p-2 text-bg-primary">
        <img src="gambar.jpg" alt="Gambar" id="gambar" />
        <p className="fs-2 text">Nama: M David</p>
        <p className="fs-2 text">Jenis Kelamin: Laki-Laki</p>
        <p className="fs-2 text">Halo nama saya David</p>
        <a className="icon-link icon-link-hover fs-2 text text-danger" style={{ '--bs-link-hover-color-rgb': '25, 135, 84' }} href="hubungisaya.html">
          Hubungi Saya
        </a>
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
