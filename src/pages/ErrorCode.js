import React from "react";
import MaterialTable, { MTableToolbar }  from "material-table";
import TabUnits from "../component/TabUnits";
import SavinaErrorCode from "../mockData/Savina";
import Evita4ErrorCode from "../mockData/Evita4";

function ErrorCode(props) {
  const { location } = props;
  const { state } = location;
  const isUnits = ["Savina", "Savina300", "Evita4", "Carina", "EvitaV300"].includes(state);

  const mockData = {
    Savina: SavinaErrorCode,
    Evita4: Evita4ErrorCode
  };

  const columns = [
    { title: 'Error Code', field: 'errorcode' },
    { title: 'Assembly', field: 'assembly' },
    { title: 'Description', field: 'description' },
    { title: 'Cause Posible', field: 'causePosible' },
    { title: 'Remedies', field: 'remedies' },
  ];

  return (
    <>
      <TabUnits />
      {isUnits ? (
        <MaterialTable
          components={{
            Toolbar: props => (
                <div style={{ backgroundColor: '#e8eaf5' }}>
                    <MTableToolbar {...props} />
                </div>
            )
          }}
          title={`${state} Error Code`}
          columns={columns}
          data={mockData[state]}
          options={{
            filtering: true,
            search: false,
            rowStyle: {
              backgroundColor: '#eee',
            }
          }}
        />
      ) : (
        <div style={{ textAlign: "center", fontSize: "20px", marginTop: "50px" }}>Click to one Unit</div>
      )}
      
    </>
  )
};

export default ErrorCode;
