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
                    alt=""
                  />
                  <img
                    className="mb-0 logo-dark"
                    src="assets/svg/logo-dark.svg"
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
                        Friends
                      </a>
                    </li>
                    <li>
                      <a className=" nav-link scroll" href="#rsvp">
                        Rsvp
                      </a>
                    </li>
                    <li>
                      <a className=" nav-link scroll" href="#location">
                        Location
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
      </div>
    </>
  );
};

export default IndexPage;
