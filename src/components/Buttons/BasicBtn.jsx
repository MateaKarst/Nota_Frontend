import { useState } from "react";

import "../../styles/variables.css";

const buttonStyles = {
    viewAll: {
        width: "79px",
        height: "27px",
        color: "#FFFFFF",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        fontSize: "var(--font-size-16)",
        fontWeight: "--font-weight-semibold",
        fontFamily: "var(--font-family-primary)",
    },
    tiny: {
        width: "fit-content",
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
    },
    tinyOutline: {
        width: "103px",
        height: "28px",
        backgroundColor: "transparent",
        color: "var(--color-yellow)",
        borderRadius: "var(--border-radius-20)",
        borderColor: "var(--color-yellow)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "var(--font-size-18)",
        fontFamily: "var(--font-family-primary)",
    },
    mediumOutline: {
        width: "140px",
        height: "28px",
        backgroundColor: "transparent",
        color: "var(--color-yellow)",
        borderRadius: "var(--border-radius-20)",
        borderColor: "var(--color-yellow)",
        borderWidth: "1px",
        borderStyle: "solid", 
        boxShadow: "none", 
        outline: "none", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "var(--font-size-14)",
        fontFamily: "var(--font-family-primary)",
        fontWeight: "400",
    },
    small: {
        width: "140px",
        height: "28px",
        backgroundColor: "var(--color-yellow)",
        color: "var(--color-black)",
        borderRadius: "var(--border-radius-20)",
        border: "none",
        fontSize: "var(--font-size-16)",
        fontFamily: "var(--font-family-primary)",
    },
    medium: {
        width: "153px",
        height: "28px",
        backgroundColor: "var(--color-yellow)",
        color: "var(--color-black)",
        borderRadius: "var(--border-radius-20)",
        border: "none",
        fontSize: "var(--font-size-16)",
        fontFamily: "var(--font-family-primary)",
    },
    default: {
        width: "302px",
        height: "44px",
        backgroundColor: "var(--color-yellow)",
        color: "var(--color-black)",
        borderRadius: "var(--border-radius-20)",
        border: "none",
        fontSize: "var(--font-size-22)",
        fontFamily: "var(--font-family-primary)",
    },
    main: {
        width: "302px",
        height: "40px",
        backgroundColor: "var(--color-purple)",
        color: "var(--color-white)",
        borderRadius: "var(--border-radius-20)",
        border: "none",
        fontSize: "var(--font-size-24)",
        fontFamily: "var(--font-family-secondary)",
        letterSpacing: "2px",

    },
};

function Buttons({ type = "default", text, icon: Icon, onClick }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
<button
  style={buttonStyles[type]}
  onClick={onClick}
>
  {Icon && <Icon style={{ marginRight: "5px" }} />} {text && <span>{text}</span>}
</button>

    );
}

export default Buttons;
