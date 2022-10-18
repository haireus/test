import { useState, useEffect } from "react";
import Axios from "axios";
import { DataPageSEO } from "../../__mockData__";
import FeatureProduct from "./FeatureProduct";

export const MainContent = () => {
  const [dataSEO, setDataSEO] = useState(DataPageSEO);

  return (
    <div className="tab-store-main-content">
      <div className="tab-store-leaderboard">
        <div className="tab-store-leaderboard-swiper">
          <img
            src="https://promotions.newegg.com/B2B/22-0257/696x250.jpg"
            alt=""
          />
        </div>
      </div>
      <FeatureProduct />
      <div
        id="tab-store-seo"
        dangerouslySetInnerHTML={{ __html: dataSEO.SEOContent }}
      ></div>
    </div>
  );
};
