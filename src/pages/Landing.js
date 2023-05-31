import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobster-logo" className="logo" />
      </nav>
      <div className="container page">
        {/* {info} */}
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby four loko salvia etsy celiac mixtape. Banh mi normcore
            kickstarter messenger bag. Adaptogen taxidermy fashion axe venmo.
            Readymade lomo cred migas biodiesel slow-carb fixie. Tacos jawn
            synth humblebrag DSA portland green juice marxism jianbing next
            level 8-bit locavore. Man braid tacos scenester pok pok
            chicharrones, hot chicken hell of. Vegan flexitarian blue bottle, yr
            JOMO PBR&B whatever.
          </p>
          <button type="" className="btn btn-hero">
            Login/Register
          </button>
        </div>
        <img src={main} alt="job-hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
