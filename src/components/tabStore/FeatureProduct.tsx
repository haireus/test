import React, { useEffect, useRef, useState } from "react";
import { BuildProductImage, getDecimalPart, groupByChunk } from "../../utils";
import { DATA_PAGE_INFO, getBranchImageUrl } from "../../__mockData__";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";
import Carousel, { CarouselItem } from "./Carousel";

const PRODUCTS = groupByChunk(DATA_PAGE_INFO.Obj.ProductDeals, 4);

export default function FeatureProduct() {
  console.log(PRODUCTS);

  return (
    <div className="feature-wrapper">
      <div className="feature-title">
        <h3>Featured Products</h3>
      </div>
      <Carousel>
        {PRODUCTS.map((product: any, proIdx: number) => (
          <CarouselItem key={proIdx}>
            <div className="product-list">
              {product.map((item: any, index: number) => (
                <div key={index} className="product-item">
                  <div className="product-img">
                    <img
                      src={
                        item?.IsCombo
                          ? item?.ComboDetail?.ProductImageUrl
                          : item?.ItemDetail?.ProductImageUrl
                      }
                      alt=""
                    />
                  </div>
                  <div className="product-rating-group">
                    <div className="product-brand">
                      <img
                        src={getBranchImageUrl(
                          item?.ItemDetail?.BrandInfo?.BrandImage
                        )}
                        alt=""
                      />
                    </div>

                    <div className="item-rating">
                      {item?.ItemDetail?.Review?.HumanRating ? (
                        <a
                          href={`https://www.neweggbusiness.com/product/product.aspx?item=9b-19-118-233&amp;isfeedbacktab=true`}
                          className={`icon-rating-sm icon-rating-sm-${item?.ItemDetail?.Review?.Rating}`}
                        >
                          <strong>
                            Avg. Rating {item?.ItemDetail?.Review?.Rating}/5
                          </strong>
                          (<span>{item?.ItemDetail?.Review?.HumanRating}</span>)
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="item-product-desc">
                    <a href="https://www.neweggbusiness.com/product/product.aspx?item=9b-19-118-233">
                      {item?.IsCombo
                        ? item?.ComboDetail?.Description?.WebDescription
                        : item?.ItemDetail?.Description?.WebDescription}
                    </a>
                  </div>

                  <div className="">
                    <div className="item-price-promo">
                      {item?.ItemDetail?.PromotionInfo ? (
                        <>
                          <div className="item-price-save">
                            <span>Save: (13%)</span>
                          </div>
                          <div className="item-price-was">
                            <del>$409.99</del>
                          </div>
                        </>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    {item?.ItemDetail?.UnitPrice ? (
                      <div className="item-price-now">
                        $
                        <strong>
                          {Math.floor(item?.ItemDetail?.UnitPrice)}
                        </strong>
                        <sup>
                          {" "}
                          .{getDecimalPart(item?.ItemDetail?.UnitPrice)}
                        </sup>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* <div>Item Shipping</div> */}
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}
