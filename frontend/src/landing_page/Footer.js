import React from "react";
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
    marginBottom: "8px"
  };

  return (
    <footer style={{ backgroundColor: "#fafafa" }}>
      <div className="container border-top mt-5">

        {/* MAIN FOOTER SECTION */}

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

            <a href="#" style={linkStyle}>Open demat account</a>
            <a href="#" style={linkStyle}>Minor demat account</a>
            <a href="#" style={linkStyle}>NRI demat account</a>
            <a href="#" style={linkStyle}>HUF demat account</a>
            <a href="#" style={linkStyle}>Commodity</a>
            <a href="#" style={linkStyle}>Dematerialisation</a>
            <a href="#" style={linkStyle}>Fund transfer</a>
            <a href="#" style={linkStyle}>MTF</a>
          </div>

          {/* SUPPORT */}

          <div className="col">
            <p className="fw-bold">Support</p>

            <a href="#" style={linkStyle}>Contact us</a>
            <a href="#" style={linkStyle}>Support portal</a>
            <a href="#" style={linkStyle}>How to file a complaint?</a>
            <a href="#" style={linkStyle}>Status of your complaints</a>
            <a href="#" style={linkStyle}>Bulletin</a>
            <a href="#" style={linkStyle}>Circular</a>
            <a href="#" style={linkStyle}>Z-Connect blog</a>
            <a href="#" style={linkStyle}>Downloads</a>
          </div>

          {/* COMPANY */}

          <div className="col">
            <p className="fw-bold">Company</p>

            <a href="#" style={linkStyle}>About</a>
            <a href="#" style={linkStyle}>Philosophy</a>
            <a href="#" style={linkStyle}>Press & media</a>
            <a href="#" style={linkStyle}>Careers</a>
            <a href="#" style={linkStyle}>Zerodha Cares (CSR)</a>
            <a href="#" style={linkStyle}>Zerodha.tech</a>
            <a href="#" style={linkStyle}>Open source</a>
            <a href="#" style={linkStyle}>Referral program</a>
          </div>

          {/* QUICK LINKS */}

          <div className="col">
            <p className="fw-bold">Quick links</p>

            <a href="#" style={linkStyle}>Upcoming IPOs</a>
            <a href="#" style={linkStyle}>Brokerage charges</a>
            <a href="#" style={linkStyle}>Market holidays</a>
            <a href="#" style={linkStyle}>Economic calendar</a>
            <a href="#" style={linkStyle}>Calculators</a>
            <a href="#" style={linkStyle}>Markets</a>
            <a href="#" style={linkStyle}>Sectors</a>
            <a href="#" style={linkStyle}>Gift Nifty</a>
          </div>

        </div>


        {/* LEGAL PARAGRAPHS */}

        <div className="mt-5 text-muted" style={{ fontSize: "13px", lineHeight: "1.8" }}>

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL:
            Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address:
            Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
            Document as prescribed by SEBI | ICF.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing
            complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
            Speedy redressal of the grievances.
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge
            in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock
            broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile
            number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued
            by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker factsheet
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock
            brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end
            of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets –
            once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo
            the same process again when you approach another intermediary."
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank
            account number and sign the IPO application form to authorize your bank to make payment in case of allotment.
            In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips,
            and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha
            and offering such services, please create a ticket here.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto (Tactcial Consulting Private Limited |
            IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange
            investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>

        </div>


        {/* FINAL LINKS */}

        <div className="text-center text-muted mt-4 pb-4" style={{ fontSize: "14px" }}>

          <a href="#" style={{ margin: "0 10px", textDecoration: "none" }}>NSE</a>
          <a href="#" style={{ margin: "0 10px", textDecoration: "none" }}>BSE</a>
          <a href="#" style={{ margin: "0 10px", textDecoration: "none" }}>MCX</a>
          <a href="#" style={{ margin: "0 10px", textDecoration: "none" }}>Terms & conditions</a>
          <a href="#" style={{ margin: "0 10px", textDecoration: "none" }}>Policies & procedures</a>
          <a href="#" style={{ margin: "0 10px", textDecoration: "none" }}>Privacy policy</a>
          <a href="#" style={{ margin: "0 10px", textDecoration: "none" }}>Disclosure</a>
          <a href="#" style={{ margin: "0 10px", textDecoration: "none" }}>For investor's attention</a>
          <a href="#" style={{ margin: "0 10px", textDecoration: "none" }}>Investor charter</a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;