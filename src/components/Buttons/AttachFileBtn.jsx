import React, { useRef } from 'react';

import "../../styles/variables.css";

import { ReactComponent as ClipIcon } from '../../icons/clip.svg';

function AttachFileBtn({ text, variant = 0, onClick, type }) {
    const fileInputRef = useRef(null);

    const styles = [
        {
            width: "103px",
            height: "28px",
            color: "var(--color-yellow)",
            backgroundColor: "var(--color-white)",
            borderRadius: "var(--border-radius-20)",
            borderColor: "var(--color-yellow)",
            borderStyle: "solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "var(--font-size-18)",
            fontFamily: "var(--font-family-primary)",
        },
        {
            width: "103px",
            height: "28px",
            backgroundColor: "var(--color-yellow)",
            color: "var(--color-black)",
            borderRadius: "var(--border-radius-20)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "var(--font-size-18)",
            fontFamily: "var(--font-family-primary)",
        }
    ];

    const handleClick = (e) => {
        if (type === "file") {
            fileInputRef.current?.click();
        } else if (onClick) {
            onClick(e);
        }
    };

    return (
        <>
            <button style={styles[variant]} onClick={handleClick}>
                <ClipIcon style={{ width: "13px", height: "17px", marginRight: "5px" }} />
                {text}
            </button>
            {type === "file" && (
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={onClick}
                />
            )}
        </>
    );
}

export default AttachFileBtn;
