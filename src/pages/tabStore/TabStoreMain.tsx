import { Banner } from "./Banner";
import { MainContent } from "./MainContent";
import { TabStoreSideNav } from "./TabStoreSideNav";

export const TabStoreMain = () => {
  return (
    <div>
      <h1 className="tab-store-page-title">Computer Hardware</h1>
      <div className="tab-store-page-content">
        <TabStoreSideNav />
        <MainContent />
        <Banner />
      </div>
    </div>
  );
};
