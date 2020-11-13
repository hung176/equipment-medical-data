import React from "react";
import MaterialTable, { MTableToolbar }  from "material-table";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SavinaErrorCode from "../mockData/Savina";
import Evita4ErrorCode from "../mockData/Evita4";
import TabUnits from "../component/TabUnits";
import { withRouter } from "react-router-dom";

function ErrorCodeUnit({ match, history }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

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
    { title: 'Error', field: 'error' },
    { title: 'Cause Posible', field: 'causePosible' },
    { title: 'Remedies', field: 'remedies' },
  ];

  const columnsMobile = [
    { title: 'Error Code', field: 'errorcode', cellStyle: { color: "red" }},
    { title: 'Remedies', field: 'remedies' },
  ];

  return (
    <>
      <TabUnits />
      {isMobile ? (
        <MaterialTable 
          title={`${unitName} Error Code`}
          columns={columnsMobile}
          data={mockData[unitName]}
        />
      ) : (
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
            filtering: false,
            rowStyle: {
              backgroundColor: '#fff',
            },
            headerStyle: {
              color: "#3f51b5",
              fontSize: "18px",
            },
            pageSize: 20,
            pageSizeOptions: [20, 30, 50],
          }}
        />
      )}
    </>
  );
}

export default withRouter(ErrorCodeUnit);