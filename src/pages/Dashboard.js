import React from "react";

import "@styles/components/InitialComponent.css";
import ProductsDashboard from "@components/ProductsDashboard/ProductsDashboard";
import QuestionModal from "@components/QuestionModal/QuestionModal";
import PageTemplate from "../templates/PageTemplate";

const Dashboard = () => {
  return (
    <PageTemplate>
      <main className="initial-component">
        <QuestionModal />
        <ProductsDashboard />
      </main>
    </PageTemplate>
  );
};

export default Dashboard;
