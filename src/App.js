import React from 'react';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main role="main" className="container">
        <div className="starter-template">
          <h1>Welcome to the Demo App</h1>
          <p className="lead">This is a simple demo application using Node.js, Express, and Bootstrap.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
