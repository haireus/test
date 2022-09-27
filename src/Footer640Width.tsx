import React, { useEffect, useRef, useState } from "react";

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
    <div className="footer-640-wrapper">
      <div className="footer-go-top">
        <p onClick={() => scrollToTop()}>BACK TO TOP</p>
      </div>
      <div className="footer-phone">
        <a
          href="https://kb.neweggbusiness.com/"
          target={"_blank"}
          title="Customer Service"
          rel={"noreferrer"}
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <>
      <h6
        onClick={() => setIsOpen(!isOpen)}
        className={`footer-nav-title-640
          ${isOpen ? "footer-nav-title-640-active" : ""}`}
      >
        {title}
      </h6>
      <ul
        className={`accordion-item-container ${
          isOpen ? "accordion-item-container-active" : ""
        }`}
        style={{ height }}
      >
        <div ref={contentRef} className="">
          {linkContent.map((el) => (
            <li className="footer-item-640">
              <a href={el.url} title={el.title}>
                {el.title}
              </a>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};
