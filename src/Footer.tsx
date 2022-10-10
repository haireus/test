import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./footer.css";
import Footer640Width from "./Footer640Width";
import { BuildUrlImage } from "./utils";
import {
  introLink,
  Link,
  serveLink,
  myAccountLink,
  B2bMarketLink,
  serviceLink,
  logisticsLink,
  resourcesLink,
  partnershipsLink,
} from "./__mockData__";

export default function Footer() {
  const is640Width = useMediaQuery({ query: "(max-width: 640px)" });
  const [isSubscribe, setIsSubcribe] = useState(false);
  const inputRef = useRef<any>(null);

  const handleAlert = () => {
    const inputValue = inputRef.current.value;

    let error;
    if (!inputValue) {
      error = "Your email field is empty";
    }

    if (
      inputValue &&
      !String(inputValue)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      error = "Your email address is invalid";
    }

    alert(`________________________________________________\n\nYour request cannot continue because of the following errors.\nPlease correct there error(s) and re-submit:\n________________________________________________\n\n- ${error} 
    `);
  };
  return (
    <footer id="footer">
      <div className="footer-group">
        <div className="footer-container">
          <div className="footer-row">
            {is640Width ? (
              <Footer640Width />
            ) : (
              <div className="footer-col-9">
                <div className="footer-col-3">
                  <FooterItemHeader title="Who We Are" />
                  <FooterItem linkContent={introLink} />

                  <FooterItemHeader title="Who We Serve" />
                  <FooterItem linkContent={serveLink} />
                </div>
                <div className="footer-col-3">
                  <FooterItemHeader title="Customer Service" />
                  <FooterItem linkContent={serviceLink} />

                  <FooterItemHeader title="B2B Marketplace" />
                  <FooterItem linkContent={B2bMarketLink} />
                  <FooterItemHeader title="Newegg Logistics" />
                  <FooterItem linkContent={logisticsLink} />
                </div>
                <div className="footer-col-3">
                  <FooterItemHeader title="My Account" />
                  <FooterItem linkContent={myAccountLink} />

                  <FooterItemHeader title="Partnerships" />
                  <FooterItem linkContent={partnershipsLink} />
                </div>
                <div className="footer-col-3">
                  <FooterItemHeader title="Tools and Resources" />
                  <FooterItem linkContent={resourcesLink} />
                </div>
              </div>
            )}

            <div className="footer-col-3-right">
              <FooterItemHeader title="Become a NeweggBusiness Insider" />
              <div>
                <div className="footer-subcribe">
                  Insider Only Promo Codes and Exclusive Savings for
                  Subscribers!&nbsp;
                  <a href="https://www.neweggbusiness.com/promotions/emails/latest/index-landing.html">
                    See Current E-Blast Promotion
                  </a>
                </div>
                <div>
                  {isSubscribe ? (
                    <div className="footer-subcribe-success ">
                      <div className="msg-green">
                        <h5>Thank you for subscribing</h5>

                        <div>
                          Your request will be processed within the next 24
                          hours. Please add "
                          <a href="mailto: promo@e.neweggbusiness.com">
                            promo@e.neweggbusiness.com
                          </a>
                          " to your address book to ensure delivery.
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form action="https://secure.neweggbusiness.com/new/newmyaccount/newslettersubscribe.aspx?action=manage">
                      <div className="footer-subscribe-normal">
                        <input
                          ref={inputRef}
                          className="footer-input"
                          type="email"
                          placeholder="Your E-mail"
                          name="LoginName"
                        />
                        <button onClick={handleAlert} type={"button"}>
                          SIGN UP
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                <div>
                  <h6 className="footer-item-title footer-social-title">
                    Connect With Us
                  </h6>
                  <ul className="footer-social">
                    <li className="icon-facebook">
                      <a
                        href="http://facebook.com/neweggbusiness"
                        target={"_blank"}
                        rel={"noreferrer"}
                      ></a>
                    </li>
                    <li className="icon-twitter">
                      <a
                        href="https://twitter.com/neweggbusiness"
                        target={"_blank"}
                        rel={"noreferrer"}
                      ></a>
                    </li>
                    <li className="icon-linkedin">
                      <a
                        href="https://www.linkedin.com/company/neweggbusiness"
                        target={"_blank"}
                        rel={"noreferrer"}
                      ></a>
                    </li>
                    <li className="icon-instagram">
                      <a
                        href="https://www.instagram.com/neweggbusiness/"
                        target={"_blank"}
                        rel={"noreferrer"}
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <div className="footer-container footer-info-container">
          <div className="footer-logo">
            <a href="https://www.neweggbusiness.com/">
              <img
                src={BuildUrlImage("logos/logo-neb-f.png")}
                alt="Newegg Business"
                title="Newegg Business"
                className=""
              />
            </a>
          </div>
          <p>© 2000-2022 Newegg Business Inc. All rights reserved.</p>

          <p id="policy">
            <a
              href="https://kb.neweggbusiness.com/Policies/Article/1173"
              title="Policy &amp; Agreement "
            >
              Policy &amp; Agreement
            </a>
            <em>|</em>
            <a
              href="https://kb.neweggbusiness.com/Policies/Article/1174"
              title="Privacy Policy "
            >
              Privacy Policy
            </a>
            <em>|</em>
            <a
              href="https://kb.neweggbusiness.com/Policies/Article/1615"
              title="CA Transparency in Supply Chains Act "
            >
              CA Transparency in Supply Chains Act
            </a>
            <em>|</em>
            <a
              href="javascript:void(0)"
              id="ot-sdk-btn"
              className="ot-sdk-show-settings"
            >
              About Cookie
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const FooterItemHeader = ({ title }: { title: string }) => (
  <h6 className="footer-item-title">{title}</h6>
);

const FooterItem = ({ linkContent }: { linkContent: Link[] }) => {
  return (
    <ul className="footer-item-list">
      {linkContent.map((el) => (
        <li key={el.title}>
          <a href={el.url} title={el.title} rel={"noreferrer"} target="_blank">
            {el.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
