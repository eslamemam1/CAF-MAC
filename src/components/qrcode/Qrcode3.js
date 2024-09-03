import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import url from "./Cushion Data Sheet.pdf"

const QRCodeComponent = ({ fileUrl }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center'>
      <h2 className='mt-4 font-normal text-xl'>Cushion</h2>
      <QRCodeCanvas value={fileUrl} className="w-28 my-2" /> {/* QR Code */}
    </div>
  );
};

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading the file:', error));
  };

  return (
    <div className='w-full flex flex-col items-center justify-center text-center'>
      <button className='b font-normal text-xs sm:text-xl rounded-border p-2 mt-2' onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

const App = () => {
  const fileUrl = 'https://caf-sports.com/static/media/Cushion.85dd869146b10d5d088e.pdf';
  const fileName = 'Cushion.pdf';
  return (
    <div>
      <QRCodeComponent fileUrl={fileUrl} />
      <DownloadButton fileUrl={url} fileName={fileName} />
    </div>
  );
};

export default App;
