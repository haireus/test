import React from "react";
import { TabStoreMain } from "../../components/tabStore/TabStoreMain";
import { BreadCrumb } from "./BreadScrumb";
import "../tabStore/tabStore.css";
import { TabStoreLayout } from "./TabStoreLayout";

export default function TabStore() {
  return (
    <TabStoreLayout>
      <BreadCrumb />
      <TabStoreMain />
    </TabStoreLayout>
  );
}
