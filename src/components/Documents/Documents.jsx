import {
  Box,
  // Button, Typography
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import BackImg2 from '../../assets/kherson.jpg';
import './Documents.css';

export default function Documents() {
  const [numPages, setNumPages] = useState(null);

  // const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // function removeTextLayerOffset() {
  //   const textLayers = document.querySelectorAll(
  //     '.react-pdf__Page__textContent',
  //   );
  //   textLayers.forEach(layer => {
  //     const { style } = layer;

  //     style.top = '0';
  //     style.left = '0';
  //     style.transform = '';
  //   });
  // }

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)),url(${BackImg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'calc(100vh - 124px)',
        // overflowY: 'hidden',
        overflowX: 'hidden',
      }}
    >
      <Container
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // overflowY: 'hidden',
          overflowX: 'hidden',
        }}
      >
        <Document file="statut.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {/* <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} /> */}
          {Array(numPages)
            .fill()
            .map((el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                // onLoadSuccess={stylePage}
              />
            ))}
        </Document>

        {/* <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <Button
            style={{
              background: 'white',
              height: '40px',
              width: '100px',
              marginRight: '10px',
              borderRadius: '12px',
            }}
            onClick={() => {
              setPageNumber(pageNumber - 1);
            }}
          >
            Previous
          </Button>
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              fontSize: '16px',
              color: '#030303',
              background: '#ffffffde',
              width: '100px',
              padding: '10px',
              marginBottom: '10px',
              // boxShadow: '0px 4px 20px #d0d7de',
              borderRadius: '12px',
            }}
          >
            Page {pageNumber} of {numPages}
          </Typography>
          <Button
            style={{
              background: 'white',
              height: '40px',
              width: '100px',
              marginLeft: '10px',
              borderRadius: '12px',
            }}
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            Next
          </Button>
        </div> */}
      </Container>
    </Box>
  );
}
