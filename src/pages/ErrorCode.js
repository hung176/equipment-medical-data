import React from "react";
import MaterialTable, { MTableToolbar }  from "material-table";
import TabUnits from "../component/TabUnits";
import SavinaErrorCode from "../mockData/Savina";
import Evita4ErrorCode from "../mockData/Evita4";

function ErrorCode(props) {
  const { location } = props;
  const { pathname } = location;
  const unitName = pathname.slice(12);
  const isUnits = ["Savina", "Savina300", "Evita4", "Carina", "EvitaV300"].includes(unitName);

  const mockData = {
    Savina: SavinaErrorCode,
    Evita4: Evita4ErrorCode
  };

  const columns = [
    { title: 'Error Code', field: 'errorcode', width: 150, cellStyle: { color: "red" }},
    { title: 'Assembly', field: 'assembly' },
    { title: 'Description', field: 'description' },
    { title: 'Cause Posible', field: 'causePosible' },
    { title: 'Remedies', field: 'remedies' },
  ];

  return (
    <>
      <TabUnits />
      {/* {isUnits ? ( */}
      {unitName && isUnits ? (
        <MaterialTable
          components={{
            Toolbar: props => (
                <div style={{ backgroundColor: '#e8eaf5' }}>
                    <MTableToolbar {...props} />
                </div>
            )
          }}
          title={`${unitName} Error Code`}
          columns={columns}
          // data={mockData[state]}
          data={mockData[unitName]}
          options={{
            filtering: true,
            rowStyle: {
              backgroundColor: '#fff',
            },
            headerStyle: {
              color: "#3f51b5",
              fontSize: "18px",
            },
          }}
        />
      ) : (
        <div style={{ textAlign: "center", fontSize: "20px", marginTop: "50px" }}>wrong URL path or not still select a model. Please click a model</div>
      )}
      
    </>
  )
};

export default ErrorCode;
