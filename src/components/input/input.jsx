import React from "react";
import PropTypes from "prop-types";
import "./input.scss";
import Text from "../text/text";

/**
 * Primary UI component for user interaction
 */
export default function Input({
    type,
    backgroundcolor,
    size,
    placeholder,
    label,
    mode,
    ...props
}) {
    //   const mode = primary ? 'znxt-button-primary' : 'znxt-button-secondary';
    return (
        <div className="znxt-inp-con">
            {mode === "group" ? (
                <Text paddingTop={6} paddingBottom={6}>
                    {label}
                </Text>
            ) : (
                ""
            )}
            <input
                type={type}
                className={["znxt-input", `znxt-input-${size}`].join(" ")}
                style={backgroundcolor && { backgroundcolor }}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}

Input.propTypes = {
    /**
     * What input type to use?
     */
    type: PropTypes.string.isRequired,
    /**
     * if mode is group what label to use?
     */
    label: PropTypes.string,
    /**
     * What mode (group/signle) to use?
     */
    mode: PropTypes.string.isRequired,
    /**
     * What background color to use?
     */
    backgroundcolor: PropTypes.string,
    /**
     * How large should the input be?
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * What input placeholder to use?
     */
    placeholder: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Input.defaultProps = {
    type: "text",
    mode: "single",
    label: null,
    backgroundcolor: null,
    size: "medium",
    onClick: undefined,
};
