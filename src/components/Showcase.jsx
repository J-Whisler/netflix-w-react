import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "../img/logo.png";
import Background from "../img/background.jpg";
const Showcase = () => {
  return (
    <ShowcaseMain>
      <div className="showcase-top">
        <img src={Logo} alt="netflix" />
        <button className="btn btn-rounded">Sign In</button>
      </div>
      <div className="showcase-content">
        <h1>See what's next</h1>
        <p>Watch anywhere. Cancel anytime</p>
        <button className="btn btn-xl">
          Watch Free for 30 Days
          <FontAwesomeIcon
            icon={faChevronRight}
            className="icon"
          ></FontAwesomeIcon>
        </button>
      </div>
    </ShowcaseMain>
  );
};

const ShowcaseMain = styled.div`
  width: 100%;
  height: 94vh;
  position: relative;
  background: url(${Background}) no-repeat center center/cover;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 120px 100px 250px #000 inset, -120px -100px 250px #000 inset;
  }
  .showcase-top {
    position: relative;
    height: 5.6rem;
    z-index: 2;
    img {
      width: 10.6rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-50%, -50%);
    }
  }

  .showcase-content {
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 9rem;
    z-index: 2;
    h1 {
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 1.1;
      margin-bottom: 2rem;
      letter-spacing: 0.2rem;
    }
    p {
      text-transform: uppercase;
      color: #fff;
      font-weight: 400;
      font-size: 1.7rem;
      line-height: 1.25;
      margin-bottom: 3rem;
      letter-spacing: 0.1rem;
    }
  }
`;

export default Showcase;
