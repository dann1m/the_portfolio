import './Hero.css'; // Make sure to import the CSS with the layout and animation

const Hero = () => {
  return (
    <div className="hero">
      <div className="text-section">
        <h1>
          Hi, I&apos;m <br />
          <span className="handwriting">Danielle Imogu</span>
          {/* <span className="handwriting2">danielle imogu</span> */}
          {/* <span className="handwriting2">danielle imogu</span> */}
        </h1>
      </div>

      <div className="image-section">
        <div className="placeholder">Image Here</div>
      </div>
    </div>
  );
};

export default Hero;
