import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh- var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: 1rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Landing;
