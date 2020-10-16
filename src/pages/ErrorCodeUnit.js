import React from "react";
import MaterialTable, { MTableToolbar }  from "material-table";
import SavinaErrorCode from "../mockData/Savina";
import Evita4ErrorCode from "../mockData/Evita4";
import TabUnits from "../component/TabUnits";
import { withRouter } from "react-router-dom";

function ErrorCodeUnit({ match, history }) {
  const { params } = match;
  const { unitName } = params;
  const isUnits = ["Savina", "Savina300", "Evita4", "Carina", "EvitaV300"].includes(unitName);

  if(!isUnits) {
    history.push('/errorcodes')
  }
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
      <MaterialTable
        components={{
          Toolbar: props => (
              <div style={{ backgroundColor: '#fff' }}>
                  <MTableToolbar {...props} />
              </div>
          )
        }}
        title={`${unitName} Error Code`}
        columns={columns}
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
    </>
  );
}

export default withRouter(ErrorCodeUnit);