import React, { useEffect, useState } from "react";
import classnames from "classnames";
import "./footer640.css";
import {
  B2bMarketLink,
  introLink,
  Link,
  logisticsLink,
  myAccountLink,
  partnershipsLink,
  resourcesLink,
  serveLink,
  serviceLink,
} from "./__mockData__";

export default function Footer640Width() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="footer-go-top">
        <p onClick={() => scrollToTop()}>BACK TO TOP</p>
      </div>
      <div className="footer-phone">
        <a
          href="https://kb.neweggbusiness.com/"
          target={"_blank"}
          title="Customer Service"
        >
          Customer Service
        </a>
      </div>

      <SingleLinkItem title="Who We Are" linkContent={introLink} />
      <SingleLinkItem title="Who We Serve" linkContent={serveLink} />
      <SingleLinkItem title="Customer Service" linkContent={serviceLink} />
      <SingleLinkItem title="B2B Marketplace" linkContent={B2bMarketLink} />
      <SingleLinkItem title="Newegg Logistics" linkContent={logisticsLink} />
      <SingleLinkItem title="My Account" linkContent={myAccountLink} />
      <SingleLinkItem title="Partnerships" linkContent={partnershipsLink} />
      <SingleLinkItem title="Tools and Resources" linkContent={resourcesLink} />
    </div>
  );
}

const SingleLinkItem = ({
  title,
  linkContent,
}: {
  title: string;
  linkContent: Link[];
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="footer-nav-640">
      <h6
        onClick={() => setExpanded(!expanded)}
        className={classnames("footer-nav-title-640", {
          "footer-nav-active": expanded,
        })}
      >
        {title}
      </h6>

      {expanded && (
        <ul className="footer-list-640">
          {linkContent.map((el) => (
            <li className="footer-item-640">
              <a href={el.url} title={el.title}>
                {el.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
