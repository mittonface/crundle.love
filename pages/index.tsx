import DateSection from "../components/DateSection";
import EventDetails from "../components/EventDetails";
import Gallery from "../components/Gallery";
import Head from "next/head";
import Hero from "../components/Hero";
import RSVP from "../components/RSVP";
import Registry from "../components/Registry";
import Timeline from "../components/Timeline";
import WeddingParty from "../components/WeddingParty";
const IndexPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Kate & Chris are getting married." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>K&C Wedding</title>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700"
          rel="stylesheet"
        />
      </Head>

      {
        // header component
      }
      <div className="wrapper">
        <header className="header default">
          <div className="header-section">
            <div className="container-fluid ">
              <nav className="navbar navbar-expand-lg header-navbar ml-0 ml-lg-5">
                <a className=" navbar-brand navbar-logo scroll" href="#wrapper">
                  <img
                    className="mb-0 logo-light"
                    src="assets/svg/logo-light.svg"
                    style={{ height: "35px", width: "187px" }}
                    alt=""
                  />
                  <img
                    className="mb-0 logo-dark"
                    src="assets/svg/logo-dark.svg"
                    style={{ height: "35px", width: "187px" }}
                    alt=""
                  />
                </a>
                <button
                  className="navbar-toggler btn-navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target=".nav-menu"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                >
                  <span className="fa fa-bars"></span>
                </button>
                <div className="nav-menu collapse navbar-collapse navbar-collapse justify-content-end mr-5 ">
                  <ul className=" navbar-nav  header-navbar-nav">
                    <li>
                      <a className=" nav-link scroll" href="#resto">
                        Date
                      </a>
                    </li>
                    <li>
                      <a className=" nav-link scroll" href="#story">
                        Love Story
                      </a>
                    </li>
                    <li>
                      <a className=" nav-link scroll" href="#wedding">
                        Wedding
                      </a>
                    </li>
                    <li>
                      <a className=" nav-link scroll" href="#gallery">
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a className=" nav-link scroll" href="#gift">
                        Gift Registry
                      </a>
                    </li>
                    <li>
                      <a className=" nav-link scroll" href="#friends">
                        Wedding Party
                      </a>
                    </li>
                    <li>
                      <a className=" nav-link scroll" href="#rsvp">
                        Rsvp
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <Hero />
        <DateSection />
        <Timeline />
        <EventDetails />
        <Gallery />
        <Registry />
        <WeddingParty />
        <RSVP />

        <a className="scroll-to-top scroll" href="#wrapper">
          <svg
            version="1.1"
            xmlBase="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 273.1091 238.2098"
            enable-background="new 0 0 273.1091 238.2098"
            xmlSpace="preserve"
          >
            <path
              fill="#636784"
              d="M136.7428,23.457L136.7428,23.457C105.6324-7.6197,55.2286-7.8699,23.8161,23.0177
                  c-31.6835,31.1545-31.6582,82.277-0.501,113.9287l90.7191,92.1591c11.8174,12.005,31.1293,12.1571,43.1343,0.3396l91.6648-90.2325
                  c31.6726-31.1777,32.5645-83.0754,1.4308-114.7912C219.1893-7.2342,168.3452-7.6516,136.7428,23.457z"
            />
            <path
              fill="#FFFFFF"
              d="M110.7149,123.5662l-2.9542-2.9542c-1.2509-1.2509-1.2509-3.2736,0-4.5112l25.8562-25.8695
                  c1.2509-1.2509,3.2736-1.2509,4.5112,0l25.8562,25.8562c1.2509,1.2509,1.2509,3.2736,0,4.5112l-2.9542,2.9542
                  c-1.2642,1.2642-3.3268,1.2376-4.5644-0.0532l-15.2635-16.0221v38.2454c0,1.7699-1.4239,3.1938-3.1938,3.1938H133.75
                  c-1.7699,0-3.1938-1.4239-3.1938-3.1938v-38.2454l-15.2769,16.0354C114.0418,124.8171,111.9791,124.8437,110.7149,123.5662z"
            />
          </svg>
        </a>
      </div>

      <script src="js/jquery-1.12.4.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/smooth-scroll.js"></script>
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/jquery.countdown.min.js"></script>
      <script src="js/placeholders.min.js"></script>
      <script src="js/script.js"></script>
    </>
  );
};

export default IndexPage;
