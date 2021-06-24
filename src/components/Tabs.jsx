import { useState } from "react";

import styled from "styled-components";

import Tab1Content from "../img/tab-content-1.png";
import TabContent21 from "../img/tab-content-2-1.png";
import TabContent22 from "../img/tab-content-2-2.png";
import TabContent23 from "../img/tab-content-2-3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faTablet,
  faTags,
  faChevronRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  // const toggleActiveTab = (i) => {
  //   setActiveTab(i);
  // };
  return (
    <>
      <TabsContainer>
        <div className="tab-items">
          <div
            id="tab-1"
            className={activeTab === 1 ? "tab-item tab-active" : "tab-item"}
            onClick={() => setActiveTab(1)}
          >
            <FontAwesomeIcon icon={faTimes} className="fa-3x"></FontAwesomeIcon>
            <p className="hide-sm">Cancel Anytime</p>
          </div>
          <div
            id="tab-2"
            className={activeTab === 2 ? "tab-item tab-active" : "tab-item"}
            onClick={() => setActiveTab(2)}
          >
            <FontAwesomeIcon
              icon={faTablet}
              className="fa-3x"
            ></FontAwesomeIcon>
            <p className="hide-sm">Watch Anywhere</p>
          </div>
          <div
            id="tab-3"
            className={activeTab === 3 ? "tab-item tab-active" : "tab-item"}
            onClick={() => setActiveTab(3)}
          >
            <FontAwesomeIcon icon={faTags} className="fa-3x"></FontAwesomeIcon>
            <p className="hide-sm">Pick Your Price</p>
          </div>
        </div>
      </TabsContainer>

      <TabContentContainer>
        {/* Tab 1 Content  */}
        {activeTab === 1 && (
          <div id="tab-1-content" className="tab-content-item">
            <div className="tab-1-content-inner">
              <div className="tab-1-content-left">
                <p className="text-lg">
                  If you decide Netflix isn't for you - no problem. No
                  commitment. Cancel online anytime.
                </p>
                <button className="btn btn-lg">Watch Free for 30 Days</button>
              </div>
              <div className="tab-1-content-right">
                <img src={Tab1Content} alt="" />
              </div>
            </div>
          </div>
        )}
        {/* Tab Content 2 */}
        {activeTab === 2 && (
          <div id="tab-2-content" className="tab-content-item">
            <div className="tab-2-content-top">
              <p className="text-lg">
                Watch TV shows and movies anytime, anywhere &nbsp;&nbsp; -
                personalized for you.
              </p>
              <button className="btn btn-lg">Watch Free for 30 Days</button>
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <img src={TabContent21} alt="" />
                <p className="text-md">Watch on your TV</p>
                <div className="text-dark">
                  Smart TVs, Playstation, Xbox, Chromecast, Apple TV. Blue-ray
                  players and more.
                </div>
              </div>
              <div>
                <img src={TabContent22} alt="" />
                <p className="text-md">Watch instantly or download for later</p>
                <p className="text-dark">
                  Available on phone and tablet, wherever you go.
                </p>
              </div>
              <div>
                <img src={TabContent23} alt="" />
                <p className="text-md">Use any computer</p>
                <p className="text-dark">Watch right now on Netflix.com</p>
              </div>
            </div>
          </div>
        )}
        {/* Tab 3 */}
        {activeTab === 3 && (
          <div id="tab-3-content" className="tab-content-item">
            <div className="text-center">
              <p className="text-lg">
                Choose one plan and watch everything on Netflix -
              </p>
              <button className="btn btn-lg">
                Watch Free for 30 Days
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="icon"
                ></FontAwesomeIcon>
              </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly price after free month ends on 3/15/22</td>
                  <td>$8.99</td>
                  <td>$12.99</td>
                  <td>$15.99</td>
                </tr>
                <tr>
                  <td>HD Available</td>
                  <td>
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                </tr>
                <tr>
                  <td>Ultra HD Available</td>
                  <td>
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                </tr>
                <tr>
                  <td>Screens you can watch at the same times</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Watch on your laptop, TV, phone and tablet</td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                </tr>
                <tr>
                  <td>Cancel Anytime</td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                </tr>
                <tr>
                  <td>First Month Free</td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </TabContentContainer>
    </>
  );
};

const TabsContainer = styled.div`
  background: #141414;
  padding-top: 1rem;
  border-bottom: 3px solid #3d3d3d;
  .tab-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    width: 80%;
    margin: auto;
    .tab-item {
      color: white;
      cursor: pointer;
      /* width: 10rem; */
      &.tab-active {
        border-bottom: #e50914 4px solid;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const TabContentContainer = styled.div`
  padding: 3rem 0;
  background: #000;
  color: #fff;
  width: 70%;
  margin: auto;
  /* display: flex; */
  #tab-1-content {
    .tab-1-content-inner {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
      justify-content: center;
      align-items: center;
    }
  }
  #tab-2-content {
    .tab-2-content-top {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 1rem;
      justify-content: center;
      align-items: center;
      .btn {
        transform: translateY(-0.7rem);
      }
    }
    .tab-2-content-bottom {
      display: grid;
      margin-top: 2rem;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      text-align: center;
    }
  }
  #tab-3-content {
    .table {
      width: 95%;
      margin: auto;
      margin-top: 2rem;
      border-collapse: collapse;
      border-spacing: 0;
      thead th {
        text-transform: uppercase;
        padding: 0.8rem;
      }
      tbody tr:nth-child(odd) {
        background: #222;
      }
      tbody tr td {
        color: #999;
        padding: 0.8rem 1.2rem;
        text-align: center;
        &:first-child {
          text-align: left;
        }
      }
    }
  }
`;

export default Tabs;
