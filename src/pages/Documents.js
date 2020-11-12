import React, { useState } from "react";
import PDFViewer from '../component/PDFViewer';
import PDFJSBackend from '../backends/pdfjs';
import TreeViewDoc from '../component/TreeViewDocument';
import savina300 from '../assets/pdfs/TD_Savina_300.pdf';
import evita4 from '../assets/pdfs/TD_Evita_4.pdf';
import '../index.css';

const nameUnitDoc = {
  Savina300: [
    {
      titleDoc: 'Savina Technical Manual',
      urlDoc: savina300
    }
  ],
  Eviata4: [
    {
    titleDoc: 'Evita4 Technical Manual',
    urlDoc: evita4
    }
  ],
};

function Documents() {

  return (
    <div className='document-pdfviewer'>
      <TreeViewDoc 
        nameUnitDoc={nameUnitDoc}
      />
     <PDFViewer
      backend={PDFJSBackend}
      src={savina300}
     />
    </div>
  );
}

export default Documents;
