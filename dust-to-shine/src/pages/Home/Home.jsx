import React from 'react';

function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand'>Dust 2 Shine CCS</a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'></div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className='bg-primary text-white text-center py-5'>
        <div className='container'>
          <h1 className='display-4'>Welcome to Dust 2 Shine CCS</h1>
          <p className='lead'>
            Your trusted partner in creating spotless spaces.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className='py-5'>
        <div className='container'>
          <h2 className='text-center mb-4'>Our Services</h2>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Residential Cleaning</h5>
                  <p className='card-text'>
                    We offer comprehensive residential cleaning services to keep
                    your home spotless.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Commercial Cleaning</h5>
                  <p className='card-text'>
                    Our commercial cleaning services ensure a pristine
                    environment for your business.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Deep Cleaning</h5>
                  <p className='card-text'>
                    We provide deep cleaning services for those hard-to-reach
                    areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className='bg-light py-5'>
        <div className='container'>
          <h2 className='text-center mb-4'>About Us</h2>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                At Dust 2 Shine CCS, we are dedicated to delivering high-quality
                cleaning services tailored to your needs. Our experienced team
                uses top-of-the-line products and techniques to ensure your
                space is clean, safe, and welcoming.
              </p>
            </div>
            <div className='col-md-6'>
              <p>
                We pride ourselves on our attention to detail, reliability, and
                exceptional customer service. Whether it's a one-time deep clean
                or regular maintenance, we are here to help you create a
                spotless environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-5'>
        <div className='container'>
          <h2 className='text-center mb-4'>Contact Us</h2>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <div className='card'>
                <div className='card-body text-center'>
                  <h5 className='card-title'>Get in Touch</h5>
                  <p className='card-text lead'>
                    <strong>Email:</strong> <a>dust2shineccs@outlook.com</a>
                  </p>
                  <p className='card-text lead'>
                    <strong>Phone:</strong>
                    <a>Helen Cordova at 720-365-4435</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-dark text-white text-center py-4'>
        <div className='container'>
          <p className='mb-0'></p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
