import React from "react";
import TabUnits from "../component/TabUnits";

function ErrorCode(props) {

  return (
    <>
      <TabUnits />
      <div style={{ textAlign: "center", fontSize: "20px", marginTop: "50px" }}>wrong URL path or not still select a model. Please click a model</div>
    </>
  );
};

export default ErrorCode;
