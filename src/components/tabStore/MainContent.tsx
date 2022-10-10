import { useState, useEffect } from "react";
import Axios from "axios";
import { DataPageSEO } from "../../__mockData__";

export const MainContent = () => {
  const [dataSEO, setDataSEO] = useState(DataPageSEO);
  // const fetchSEOContent = async () => {
  //   try {
  //     const data = await Axios.request({
  //       url: "http://10.16.75.24:3000/b2b-www/assistance/page-info?CompanyCode=1003&CountryCode=USB&IsSciQuest=False&LanguageCode=en-US&storeID=21&storeType=TabStore&subcategoryid=-1",
  //       method: "get",
  //       withCredentials: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((res) => res.data);

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchSEOContent();
  // }, []);
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

      <div dangerouslySetInnerHTML={{ __html: dataSEO.SEOContent }}></div>
    </div>
  );
};
