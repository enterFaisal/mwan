import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeDisplay = ({ url }) => {
  if (!url) return null;

  const qrCodeStyle = {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    zIndex: 1000,
    background: "white",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    // add coloered border
    border: "5px solid #009d4f",
  };

  return (
    <div style={qrCodeStyle}>
      <QRCodeCanvas value={url} size={128} />
    </div>
  );
};

export default QRCodeDisplay; 