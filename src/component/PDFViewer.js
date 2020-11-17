import React from 'react';

export default function PDFViewer(props) {
  const { docUrl } = props;
  return (
    <iframe src={docUrl} title={docUrl} style={{ width: '100%', height: "100%", border: '0' }}/>
  );
};