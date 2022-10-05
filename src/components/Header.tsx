import "./App.css";
import React, { useEffect } from "react";
import { BuildUrlImage, getTitleEightWords } from "../utils";

import ArrowDown from "../logo/arrow-black-down.png";
import { useMediaQuery } from "react-responsive";
import navIcon from "../logo/nav.png";
import userIcon from "../logo/user.png";

function Header() {
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
                  <a
                    className="tooltip"
                    href="https://secure.neweggbusiness.com/new/newmyaccount/dashboard.aspx"
                    title="My Account/Log In"
                  >
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
                        <li>
                          <a
                            href="https://secure.neweggbusiness.com/newmyaccount/dashboard.aspx"
                            title="Account Details"
                          >
                            Account Details
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://secure.neweggbusiness.com/new/newmyaccount/trackanorder.aspx"
                            title="Track an Order"
                          >
                            Track an Order
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://secure.neweggbusiness.com/new/newmyaccount/orderhistory.aspx"
                            title="Order History"
                          >
                            Order History
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://secure.neweggbusiness.com/new/newmyaccount/taxexemption"
                            title="Tax Exemption Application"
                          >
                            Tax Exemption Application
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://secure.neweggbusiness.com/new/wishlist/mysavedwishlists.aspx"
                            title="To-Buy List"
                          >
                            To-Buy List
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://secure.neweggbusiness.com/new/newmyaccount/rewards.aspx"
                            title=" Rewards Dashboard"
                          >
                            Rewards Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://secure.neweggbusiness.com/new/newmyaccount/netterms.aspx"
                            title="Net Terms"
                          >
                            Net Terms
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://secure.neweggbusiness.com/new/rma/returns.aspx"
                            title="Return an Item"
                          >
                            Return an Item
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.neweggbusiness.com/promotions/NEpro/22-0073/index.html"
                            title="Return Policy"
                          >
                            Return Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://secure.neweggbusiness.com/new/rma/rmahistory.aspx"
                            title="Check Return Status"
                          >
                            Check Return Status
                          </a>
                        </li>
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
              <a
                className="mini-cart-tooltip"
                href="https://secure.neweggbusiness.com/new/shopping/shoppingcart.aspx"
                title="cart"
              >
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
    </>
  );
}

export default Header;
