import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

function CreateTicket() {
  const sections = [
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Funds",
      links: ["Add money", "Withdraw money", "Fund transfer issues", "Bank account linking"],
    },
    {
      title: "Your Zerodha Account",
      links: ["Profile update", "Change password", "Segment activation"],
    },
  ];

  const linkStyle = { textDecoration: "none", lineHeight: "2.5" };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">To create a ticket, select a relevant topic</h1>

        {sections.map((section, index) => (
          <div key={index} className="col-md-4 mb-4">
            <h4>
              <FaPlusCircle className="me-2" />
              {section.title}
            </h4>
            {section.links.map((link, i) => (
              <div key={i}>
                <Link to="/support" style={linkStyle}>
                  {link}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;