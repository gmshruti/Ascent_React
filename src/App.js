import "./App.scss";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/Flipkart_logo-700x185.png" alt="flipkart"></img>
        </div>
        <div className="navbar__heading">
          <p>Pay Cycle: 31-May-2021 to 31-June-2021</p>
          <b><p>Amazon India Pvt Ltd</p></b>
        </div>
        <div className="navbar__icons">
          {" "}
          <div className="support">
            <svg
              id="help_outline-24px_3_"
              data-name="help_outline-24px (3)"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                id="Path_6305"
                data-name="Path 6305"
                d="M0,0H24V24H0Z"
                fill="none"
              />
              <path
                id="Path_6306"
                data-name="Path 6306"
                d="M11,18h2V16H11ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20ZM12,6a4,4,0,0,0-4,4h2a2,2,0,0,1,4,0c0,2-3,1.75-3,5h2c0-2.25,3-2.5,3-5A4,4,0,0,0,12,6Z"
                fill="#5f6368"
              />
            </svg>
            <p>SUPPORT</p>
          </div>
          <div className="notifications">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                id="Group_8570"
                data-name="Group 8570"
                transform="translate(-2588 57)"
              >
                <rect
                  id="Rectangle_14167"
                  data-name="Rectangle 14167"
                  width="24"
                  height="24"
                  transform="translate(2588 -57)"
                  fill="#fff"
                />
                <path
                  id="notification_important-24px_1_"
                  data-name="notification_important-24px (1)"
                  d="M10.01,21.01a1.99,1.99,0,0,0,3.98,0ZM12,6a5,5,0,0,1,5,5v7H7V11A5,5,0,0,1,12,6Zm0-4.5A1.5,1.5,0,0,0,10.5,3V4.17A6.993,6.993,0,0,0,5,11v6L3,19v1H21V19l-2-2V11a6.993,6.993,0,0,0-5.5-6.83V3A1.5,1.5,0,0,0,12,1.5ZM11,8h2v4H11Zm0,6h2v2H11Z"
                  transform="translate(2588 -57.25)"
                  fill="#5f6368"
                />
              </g>
            </svg>
            <p>NOTIFICATIONS</p>
          </div>
          <div className="profile">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <circle
                id="Ellipse_488"
                data-name="Ellipse 488"
                cx="16"
                cy="16"
                r="16"
                fill="#1d4d40"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="sideNav">
          <div className="sideNav__icons">
            <img
              className="sideNav__images"
              src="/dashboard_black_24dp.png"
              alt=""
            />
            <div class="sideNav__caption">Dashboard</div>
            <img
              className="sideNav__images"
              src="/work_history_black_24dp.png"
              alt=""
            />
            <div class="sideNav__caption">Monthly process</div>
            <img
              className="sideNav__images"
              src="/tune_black_24dp.png"
              alt=""
            />
            <div class="sideNav__caption">Super configuration</div>
            <img
              className="sideNav__images"
              src="/auto_graph_black_24dp.png"
              alt=""
            />
            <div class="sideNav__caption">Master report</div>
            <img
              className="sideNav__images"
              src="/read_more_black_24dp.png"
              alt=""
            />
            <div class="sideNav__caption">More</div>
          </div>
          <div className="sideNav__content">
            <div className="services">Services offered</div>
            <div className="orgsetup">Org setup</div>
          </div>
        </div>
        <div className="org">
          <div className="org__setup">Org Setup</div>
          <div className="org__details">
            <div className="org__details__left-part">
              <h3>Details</h3>
              <p>Page to configure all company details</p>
            </div>
            <div className="org__details__right-part">
              <button className="upload">
                <img src="/upload_black_24dp.png" alt="" />
                Bulk upload
              </button>
              <button className="save">
                <img src="/save_black_24dp.png" alt="" />
                Save
              </button>
              <img src="/Group 10162.png" alt="" />
            </div>
          </div>
          <div className="org__form">
            <table>
              <tr>
                <td>
                  <label>Org Id</label>
                  <input
                    type="text"
                    className="org__form__input"
                    placeholder="Enter org ID"
                  />
                </td>
                <td>
                  <label>City name</label>
                  <input
                  type="text"
                    className="org__form__input"
                    placeholder="Enter city name"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Org name</label>
                  <input
                    type="text"
                    className="org__form__input"
                    placeholder="Enter org name"
                  />
                </td>
                <td>
                  <label>Team name</label>
                  <input
                  type="text"
                    className="org__form__input"
                    placeholder="Enter team name"
                  />
                </td>
              </tr>
              
              <tr>
                <td>
                  <label>No. of integrations</label>
                  <input
                    type="text"
                    className="org__form__input"
                    placeholder="Select"
                  />
                </td>
                <td>
                  <label>Team count</label>
                  <input
                  type="text"
                    className="org__form__input"
                    placeholder="Enter team count"
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="org__details">
            <div className="org__details__left-part">
              <h3>Lock Setup</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="org__details__right-part">
              <img src="/Group 10163.png" alt="" />
            </div>
          </div>
          <div className="org__details">
            <div className="org__details__left-part">
              <h3>Integration Info</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="org__details__right-part">
              <img src="/Group 10163.png" alt="" />
            </div>
          </div>
          <div className="org__details">
            <div className="org__details__left-part">
              <h3>AI Info</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="org__details__right-part">
              <img src="/Group 10163.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
