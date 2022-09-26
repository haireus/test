import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./footer.css";
import Footer640Width from "./Footer640Width";
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

  return (
    <footer id="footer">
      {is640Width ? (
        <Footer640Width />
      ) : (
        <>
          <div className="footer-container">
            <div className="footer-row">
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
                            className="footer-input"
                            type="email"
                            placeholder="Your E-mail"
                            name="LoginName"
                          />
                          <button>SIGN UP</button>
                        </div>
                      </form>
                    )}
                  </div>

                  <div>
                    <h6 className="footer-item-title">Connect With Us</h6>
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
        </>
      )}
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
