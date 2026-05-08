import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      
      <div className="hero-container">
        <div className="hero-image">
          <div className="circle-background">
            <img 
              src="/download.jpg" 
              alt="Woman with shopping bags"
              className="hero-img"
            />
          </div>
          <div className="decorative-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>

        <div className="hero-content">
          <p className="special-offer">SPECIAL OFFER</p>
          <h1 className="hero-title">
            MEGA <span className="sale-text">SALE</span>
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
          </p>
          
          <button className="shop-btn">SHOP NOW</button>

          <div className="social-links">
            <a href="#twitter" className="social-icon" title="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
              </svg>
            </a>
            <a href="#facebook" className="social-icon" title="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"/>
              </svg>
            </a>
            <a href="#instagram" className="social-icon" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#ff5477"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="#ff5477"/>
              </svg>
            </a>
          </div>

          <p className="website-url">www.sampletext.com</p>
        </div>
      </div>
    </section>
  );
}
