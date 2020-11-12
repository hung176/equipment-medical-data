import React, { useState } from "react";
import PDFViewer from '../component/PDFViewer';
import PDFJSBackend from '../backends/pdfjs';
import TreeViewDoc from '../component/TreeViewDocument';
import savina300 from '../assets/pdfs/TD_Savina_300.pdf';
import '../index.css';

function Documents() {

  return (
    <div className='document-pdfviewer'>
      <TreeViewDoc />
     <PDFViewer
      backend={PDFJSBackend}
      src={savina300}
     />
    </div>
  );
}

export default Documents;
