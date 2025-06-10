import React, { useState } from "react";
import "../styles/components/smallpopups.css";
import { ReactComponent as DeleteIcon } from '../assets/icons/delete-icon.svg';
import { ReactComponent as DownloadIcon } from '../assets/icons/download-icon.svg';
import { ReactComponent as ShareIcon } from '../assets/icons/share-icon.svg';
import { ReactComponent as ReportIcon } from '../assets/icons/report-icon.svg';

const PopupMenu = ({ type = "report", storage_path }) => {
  const [showShareToast, setShowShareToast] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3001);
    } catch (err) {
      console.error("Oops... Can't copy the link:", err);
    }
  };

  const menuVariants = {
    delete: [
      {
        label: "Download",
        element: (storage_path) => (
          <a
            href={`/audio/track27.mp3`}
            download={`/audio/track27.mp3`}
            className="popup-item"
          >
            <DownloadIcon />
            <span>Download</span>
          </a>
        ),
      },
      {
        label: "Share",
        icon: <ShareIcon />,
        onClick: handleShare,
      },
      {
        label: "Delete song",
        icon: <DeleteIcon />,
        onClick: () => console.log("Deleting..."),
      },
    ],
    report: [
      {
        label: "Download",
        element: (storage_path) => (
          <a
            href={`/audio/${storage_path}`}
            download={storage_path}
            className="popup-item"
          >
            <DownloadIcon />
            <span>Download</span>
          </a>
        ),
      },
      {
        label: "Share",
        icon: <ShareIcon />,
        onClick: handleShare,
      },
      {
        label: "Report",
        icon: <ReportIcon />,
        onClick: () => console.log("Reporting..."),
      },
    ],
    minimal: [
      {
        label: "Share",
        icon: <ShareIcon />,
        onClick: handleShare,
      },
      {
        label: "Report",
        icon: <ReportIcon />,
        onClick: () => console.log("Reporting..."),
      },
    ],
  };

  const options = menuVariants[type] || [];

  return (
    <div className="popup-menu">
      {options.map((option, index) => {
        if (option.element) {
          return (
            <React.Fragment key={index}>
              {option.element(storage_path)}
            </React.Fragment>
          );
        }

        return (
          <div
            key={index}
            className="popup-item"
            onClick={option.onClick}
          >
            {option.icon}
            <span>{option.label}</span>
          </div>
        );
      })}

      {showShareToast && (
        <div className="share-toast">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
