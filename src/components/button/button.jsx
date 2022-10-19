import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export default function Button({
    primary,
    backgroundColor,
    size,
    label,
    onClick,
}) {
    const mode = primary ? "znxt-button-primary" : "znxt-button-secondary";
    // const onClickHandler = () => {
    //     return onClick;
    // };
    return (
        <button
            type="button"
            className={["znxt-button", `znxt-button-${size}`, mode].join(" ")}
            style={backgroundColor && { backgroundColor }}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

Button.propTypes = {
    /**
     * What type to use?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: "medium",
    onClick: undefined,
};
