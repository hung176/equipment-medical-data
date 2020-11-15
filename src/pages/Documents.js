import React, { useState } from "react";
import PDFViewer from '../component/PDFViewer';
import ListNameDoc from '../component/ListNameDoc';
import ListDocMobile from '../component/ListDocMobile';
import DocUrl from '../assets/pdfs';
import '../index.css';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const { savina300, evita4 } = DocUrl;
const nameUnitDoc = {
  Savina300: [
    {
      titleDoc: 'TD_Savina300',
      urlDoc: savina300
    }
  ],
  Eviata4: [
    {
    titleDoc: 'TD_Evita4',
    urlDoc: evita4
    }
  ],
};

function Documents() {
  const [docUrl, setDocUrl] = useState(savina300);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleDocUrl = (url) => {
    setDocUrl(url);
  }

  return (
    <div className='document-pdfviewer'>
      {isMobile ? (
      <div>
        <ListDocMobile />
      </div>
      ) : (
          <ListNameDoc 
            nameUnitDoc={nameUnitDoc}
            handleDocUrl={handleDocUrl}
          />
      )}
      <PDFViewer 
        docUrl={docUrl}
      />
    </div>
  );
}

export default Documents;
