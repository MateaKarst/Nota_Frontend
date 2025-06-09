import React, { useState, useRef, useEffect } from "react";
import "../styles/components/smallpopups.css";
import { ReactComponent as DeleteIcon } from '../assets/icons/delete-icon.svg';
import { ReactComponent as DownloadIcon } from '../assets/icons/download-icon.svg';
import { ReactComponent as ShareIcon } from '../assets/icons/share-icon.svg';
import { ReactComponent as ReportIcon } from '../assets/icons/report-icon.svg';

const PopupMenu = ({ type = "report" , storage_path }) => {
  const [showShareToast, setShowShareToast] = useState(false);
  const handleDownload = () => {
    if (!storage_path) {
      console.error("No audio URL provided");
      return;
    }

    const link = document.createElement("a");
    link.href = storage_path;
    link.download = ""; // Можна задати назву, якщо хочеш
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error("Oops... Can't copy the link:", err);
    }
  };

  const menuVariants = {
    delete: [
      { label: "Download", icon: <DownloadIcon />, onClick: handleDownload  },
      { label: "Share", icon: <ShareIcon />, onClick: handleShare },
      { label: "Delete song", icon: <DeleteIcon />, onClick: () => console.log("Deleting...") },
    ],
    report: [
      { label: "Download", icon: <DownloadIcon />, onClick: () => console.log("Downloading...") },
      { label: "Share", icon: <ShareIcon />, onClick: handleShare },
      { label: "Report", icon: <ReportIcon />, onClick: () => console.log("Reporting...") },
    ],
    minimal: [
      { label: "Share", icon: <ShareIcon />, onClick: handleShare },
      { label: "Report", icon: <ReportIcon />, onClick: () => console.log("Reporting...") },
    ],
  };

  const options = menuVariants[type] || [];

  return (
    <div className="popup-menu">
      {options.map((option, index) => (
        <div
          key={index}
          className="popup-item"
          onClick={option.onClick}
        >
          <span className="popup-icon">{option.icon}</span>
          <span>{option.label}</span>
        </div>
      ))}

      {showShareToast && (
        <div className="share-toast">
          <ShareIcon /> Link copied to clipboard
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
