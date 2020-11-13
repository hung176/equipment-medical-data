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
      titleDoc: 'Savina300 Technical Manual',
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
  const [urlDoc, setUrlDoc] = useState('');

  const handleGetName = (url) => {
    setUrlDoc(url);
  };

  return (
    <div className='document-pdfviewer'>
      <TreeViewDoc 
        nameUnitDoc={nameUnitDoc}
        handleGetName={handleGetName}
      />
     {urlDoc && 
     <PDFViewer
        backend={PDFJSBackend}
        src={urlDoc}
      />
      }
    </div>
  );
}

export default Documents;
