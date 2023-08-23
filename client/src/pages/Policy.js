import React from "react";
import Layout from "../components/layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Explain the types of personal information collected (e.g., name,
            address, email, payment details) when users register, browse, or
            make purchases.
          </p>
          <p>
            Clarify that certain information, like browsing history and device
            data, may also be automatically collected through cookies and
            similar technologies.
          </p>
          <p>
            Describe how collected information is used, such as processing
            orders, delivering products, providing customer support, and
            improving services.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
