
import { RenderPage, RenderPageProps, Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '@react-pdf-viewer/core/lib/styles/index.css';

const ModalExample = ({ fileUrl }) => {

    const [shown, setShown] = useState(false);


    const renderPage = (props) => (
        <>
            {props.canvasLayer.children}
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                }}
            >
                <div
                    style={{
                        color: 'rgba(0, 0, 0, 0.2)',
                        fontSize: `${8 * props.scale}rem`,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        transform: 'rotate(-45deg)',
                        userSelect: 'none',
                    }}
                >
                    Sinon Lyn
                </div>
            </div>
            {props.annotationLayer.children}
            {props.textLayer.children}
        </>
    )
    const modalBody = () => (

        <div
            style={{
                backgroundColor: '#fff',
                flexDirection: 'column',
      

                /* Fixed position */
                left: 0,
                position: 'fixed',
                top: 0,

                /* Take full size */
                height: '100%',
                width: '100%',

                /* Displayed on top of other elements */
                zIndex: 99,
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    padding: '.5rem',
                }}
            >
                <div style={{ marginRight: 'auto' }}>sample-file-name.pdf</div>
                <button
                    style={{
                        backgroundColor: '#357edd',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        padding: '8px',
                    }}
                    onClick={() => setShown(false)}
                >
                    Close
                </button>
            </div>
            <div
                style={{
                    flexGrow: 1,
                    height: '100%',
                }}
            >
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={fileUrl} renderPage={renderPage} defaultScale={SpecialZoomLevel.PageFit} />;
                </Worker>

            </div>
        </div>
    );

    return (
        <>
            <button
                style={{
                    backgroundColor: '#00449e',
                    border: 'none',
                    borderRadius: '.25rem',
                    color: '#fff',
                    cursor: 'pointer',
                    padding: '.5rem',
                }}
                onClick={() => setShown(true)}
            >
                Open modal
            </button>
            {shown && ReactDOM.createPortal(modalBody(), document.body)}
        </>
    );
};

export default ModalExample;