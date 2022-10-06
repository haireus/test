import React from "react";
import { BreadCrumb } from "./BreadScrumb";
import "./tabStore.css";
import { TabStoreLayout } from "./TabStoreLayout";
import { TabStoreMain } from "./TabStoreMain";

export default function TabStore() {
  return (
    <TabStoreLayout>
      <BreadCrumb />
      <TabStoreMain />
    </TabStoreLayout>
  );
}
