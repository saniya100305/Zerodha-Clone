import React from "react";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTelegram
} from "react-icons/fa6";

function Footer() {

  const linkStyle = {
    textDecoration: "none",
    color: "#6c757d",
    display: "block",
    marginBottom: "8px",
    fontSize: "14px"
  };

  const bottomLink = {
    margin: "0 10px",
    textDecoration: "none",
    color: "#6c757d"
  };

  return (
    <footer style={{ backgroundColor: "#fafafa" }}>
      <div className="container border-top mt-5">

        <div className="row mt-5">

          {/* LOGO + SOCIAL */}

          <div className="col-3">

            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "60%" }}
            />

            <p className="text-muted mt-3">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="d-flex gap-3 fs-5 text-muted mt-3">
              <FaXTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>

            <div className="d-flex gap-3 fs-5 text-muted mt-3">
              <FaYoutube />
              <FaWhatsapp />
              <FaTelegram />
            </div>

            <div className="mt-4">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="playstore"
                style={{ width: "140px", marginRight: "10px" }}
              />

              <img
                src="media/images/appstoreBadge.svg"
                alt="appstore"
                style={{ width: "140px" }}
              />
            </div>

          </div>


          {/* ACCOUNT */}

          <div className="col">
            <p className="fw-bold">Account</p>

            <Link to="/open-account" style={linkStyle}>Open demat account</Link>
            <Link to="/minor-account" style={linkStyle}>Minor demat account</Link>
            <Link to="/nri-account" style={linkStyle}>NRI demat account</Link>
            <Link to="/huf-account" style={linkStyle}>HUF demat account</Link>
            <Link to="/commodity" style={linkStyle}>Commodity</Link>
            <Link to="/demat" style={linkStyle}>Dematerialisation</Link>
            <Link to="/fund-transfer" style={linkStyle}>Fund transfer</Link>
            <Link to="/mtf" style={linkStyle}>MTF</Link>
          </div>


          {/* SUPPORT */}

          <div className="col">
            <p className="fw-bold">Support</p>

            <Link to="/contact" style={linkStyle}>Contact us</Link>
            <Link to="/support" style={linkStyle}>Support portal</Link>
            <Link to="/complaint" style={linkStyle}>How to file a complaint?</Link>
            <Link to="/complaint-status" style={linkStyle}>Status of your complaints</Link>
            <Link to="/bulletin" style={linkStyle}>Bulletin</Link>
            <Link to="/circular" style={linkStyle}>Circular</Link>
            <Link to="/blog" style={linkStyle}>Z-Connect blog</Link>
            <Link to="/downloads" style={linkStyle}>Downloads</Link>
          </div>


          {/* COMPANY */}

          <div className="col">
            <p className="fw-bold">Company</p>

            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/philosophy" style={linkStyle}>Philosophy</Link>
            <Link to="/press" style={linkStyle}>Press & media</Link>
            <Link to="/careers" style={linkStyle}>Careers</Link>
            <Link to="/csr" style={linkStyle}>Zerodha Cares (CSR)</Link>
            <Link to="/tech" style={linkStyle}>Zerodha.tech</Link>
            <Link to="/opensource" style={linkStyle}>Open source</Link>
            <Link to="/referral" style={linkStyle}>Referral program</Link>
          </div>


          {/* QUICK LINKS */}

          <div className="col">
            <p className="fw-bold">Quick links</p>

            <Link to="/ipos" style={linkStyle}>Upcoming IPOs</Link>
            <Link to="/brokerage" style={linkStyle}>Brokerage charges</Link>
            <Link to="/holidays" style={linkStyle}>Market holidays</Link>
            <Link to="/calendar" style={linkStyle}>Economic calendar</Link>
            <Link to="/calculators" style={linkStyle}>Calculators</Link>
            <Link to="/markets" style={linkStyle}>Markets</Link>
            <Link to="/sectors" style={linkStyle}>Sectors</Link>
            <Link to="/gift-nifty" style={linkStyle}>Gift Nifty</Link>
          </div>

        </div>


        {/* LEGAL TEXT */}

        <div
          className="mt-5 text-muted"
          style={{ fontSize: "13px", lineHeight: "1.8" }}
        >

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address:
            Zerodha Broking Ltd., Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all
            the related documents carefully before investing.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
            Mandatory details: Name, PAN, Address, Mobile Number, E-mail ID.
          </p>

        </div>


        {/* FINAL LINKS */}

        <div className="text-center text-muted mt-4 pb-4" style={{ fontSize: "14px" }}>

          <Link to="/nse" style={bottomLink}>NSE</Link>
          <Link to="/bse" style={bottomLink}>BSE</Link>
          <Link to="/mcx" style={bottomLink}>MCX</Link>
          <Link to="/terms" style={bottomLink}>Terms & conditions</Link>
          <Link to="/policies" style={bottomLink}>Policies & procedures</Link>
          <Link to="/privacy" style={bottomLink}>Privacy policy</Link>
          <Link to="/disclosure" style={bottomLink}>Disclosure</Link>
          <Link to="/investor-attention" style={bottomLink}>For investor's attention</Link>
          <Link to="/investor-charter" style={bottomLink}>Investor charter</Link>

        </div>

      </div>
    </footer>
  );
}

export default Footer;