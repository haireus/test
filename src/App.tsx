import "./App.css";
import React, { useEffect } from "react";
import { BuildUrlImage, getTitleEightWords } from "./utils";

import ArrowDown from "./logo/arrow-black-down.png";
import { useMediaQuery } from "react-responsive";
import navIcon from "./logo/nav.png";
import userIcon from "./logo/user.png";

function App() {
  // const [minicart, setMiniCart] = useState();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const dataMiniCart = {
    Success: true,
    Object: {
      UseCookie: false,
      ItemPrice: "4 Item(s) in my cart: $13,650.97",
      ItemDetailInfos: [
        {
          Description:
            "CyberPower CP1500PFCLCD - PFC Sinewave UPS Systems - Pure Sine Wave / 100% Active PFC Compatible with USB Charging Ports",
          ImageUrl:
            "https://c1.neweggimages.com/ProductImageCompressAll/42-102-134-V02.jpg",
          Qty: 2,
          ItemLink:
            "https://www.neweggbusiness.com/product/product.aspx?item=9b42-102-134",
        },
        {
          Description:
            'GIGABYTE AERO 5 XE4 - 15.6" 4K/UHD Samsung AMOLED - Intel Core i7-12700H - NVIDIA GeForce RTX 3070 Ti Laptop GPU - 16GB DDR4 ...',
          ImageUrl:
            "https://c1.neweggimages.com/ProductImageCompressAll/34-233-521-V01.jpg",
          Qty: 1,
          ItemLink:
            "https://www.neweggbusiness.com/product/product.aspx?item=9b34-233-521",
        },
        {
          Description:
            "Supermicro Intel Xeon Gold 6314U (2.30GHz) Ultimate Workstation, 32 Core/64 Thread, 256GB (8x32G)DDR4 Memory, 960GB Samsung ...",
          ImageUrl:
            "https://c1.neweggimages.com/ProductImageCompressAll/59-152-138-V01.jpg",
          Qty: 1,
          ItemLink:
            "https://www.neweggbusiness.com/product/product.aspx?item=9b59-152-138",
        },
      ],
      MiniQuoteInfo: { TotalAmount: 0.0, TotalQty: 0 },
    },
  };

  return (
    <>
      <header id="page-header" className="header-main">
        <div className="header-container">
          <h2 className="header-logo">
            <a href="https://www.neweggbusiness.com/">
              <img
                src={BuildUrlImage(
                  isTabletOrMobile
                    ? "logos/logo-mobile.png"
                    : "logos/logo-neb.png"
                )}
                alt="Newegg Business - Business IT Products, Small Business Solutions, Office Supplies and more."
                title="Newegg Business - Business IT Products, Small Business Solutions, Office Supplies and more."
                className="logo"
              />
            </a>
          </h2>

          <ul id="header-nav">
            {isTabletOrMobile ? (
              <>
                <a href="" className="ne-category">
                  <img src={navIcon} alt="" />
                </a>
                <a href="" className="ne-category">
                  <img src={userIcon} alt="" />
                </a>
              </>
            ) : (
              <>
                <li className="header-nav-list-item" id="header-account">
                  <a
                    href="https://secure.neweggbusiness.com/new/newmyaccount/b2baccountregistration.aspx"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-link"
                  >
                    Create A Free Account
                  </a>
                </li>
                <li className="header-nav-list-item">
                  <a className="tooltip" href="/">
                    My Account/Log In <img src={ArrowDown} alt="" />
                    <div className="tooltiptext">
                      <div>
                        <a
                          href="https://secure.neweggbusiness.com/new/newmyaccount/b2baccountregistration.aspx"
                          target="_blank"
                          rel="noreferrer"
                          className="btn-login"
                        >
                          Login
                        </a>
                      </div>
                      <ul>
                        <li>Account Details</li>
                        <li>Track an Order</li>
                        <li>Order History</li>
                        <li>Tax Exemption Application</li>
                        <li>To-Buy List</li>
                        <li>Rewards Dashboard</li>
                        <li>Net Terms</li>
                        <li>Return an Item</li>
                        <li>Return Policy</li>
                        <li>Check Return Status</li>
                      </ul>
                    </div>
                  </a>
                </li>

                <li className="header-nav-list-item">
                  <a
                    href="https://kb.neweggbusiness.com/"
                    className="customer-service"
                    title="Customer Service"
                  >
                    Customer Service
                  </a>
                </li>
              </>
            )}

            <li className="header-nav-list-item">
              <a className="mini-cart-tooltip" href="/">
                <div className="cart-container">
                  <img
                    src={BuildUrlImage(
                      isTabletOrMobile
                        ? "icons/icon-neb-cart-m.png"
                        : "icons/icon-neb-cart.png"
                    )}
                    alt=""
                    className="cart-img"
                  />
                  <span className="cart-item">9</span>
                </div>

                <div className="mini-cart-tooltip-text">
                  <div className="item-price">
                    {dataMiniCart.Object.ItemPrice}
                  </div>

                  {dataMiniCart.Object.ItemDetailInfos.map((el) => (
                    <div className="item-wrapper" key={el.ItemLink}>
                      <div className="item-img">
                        <img
                          className="item-img-wrapper"
                          src={el.ImageUrl}
                          alt=""
                        />
                      </div>

                      <div className="item-info">
                        <a className="item-des" href={el.ItemLink}>
                          {el.Description}
                        </a>
                        <div className="item-qty">Quantity: {el.Qty}</div>
                      </div>
                    </div>
                  ))}

                  <div className="btn-wrapper">
                    <a
                      href="https://secure.neweggbusiness.com/new/newmyaccount/b2baccountregistration.aspx"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-login"
                    >
                      View Cart
                    </a>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <nav className="nav"></nav>
    </>
  );
}

export default App;
