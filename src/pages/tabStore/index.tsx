import React from "react";
import { BreadCrumb } from "../../components/tabStore/BreadScrumb";
import "./tabStore.css";
import { TabStoreLayout } from "../../components/tabStore/TabStoreLayout";
import { TabStoreMain } from "../../components/tabStore/TabStoreMain";

export default function TabStore() {
  return (
    <TabStoreLayout>
      <BreadCrumb />
      <TabStoreMain />
    </TabStoreLayout>
  );
}
