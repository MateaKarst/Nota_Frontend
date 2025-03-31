import React from 'react';
import { ReactComponent as ClipIcon } from '../../icons/clip.svg'; // Imports SVG file as React component
import "../../styles/variables.css";

function AttachFileBtn({ text, variant = 0 }) {
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

    return (
        <button style={styles[variant]} onClick={() => { }}>
            <ClipIcon style={{ width: "13px", height: "17px", marginRight: "5px" }} />
            {text}
        </button>
    );
}

export default AttachFileBtn;
