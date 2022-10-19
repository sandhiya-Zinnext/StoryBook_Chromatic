import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const getColorClass = (color) => {
    return `znxt-text-color-${color}`;
};

const getPadding = (paddingTop, paddingBottom) => {
    return {
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
    };
};

const getClasses = (color) => {
    return [getColorClass(color), "znxt-text"].join(" ");
};

const getStyle = (bold, align, paddingTop, paddingBottom) => {
    return {
        ...getPadding(paddingTop, paddingBottom),
        textAlign: align,
        fontWeight: bold ? "500" : "normal",
    };
};

export default Text = ({
    type,
    color,
    bold,
    align,
    paddingTop,
    paddingBottom,
    children,
}) => {
    const style = getStyle(bold, align, paddingTop, paddingBottom);
    const classes = getClasses(color);

    switch (type) {
        case "h1":
            return (
                <h1 style={style} className={classes}>
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2 style={style} className={classes}>
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3 style={style} className={classes}>
                    {children}
                </h3>
            );
        default:
            return (
                <p style={style} className={classes}>
                    {children}
                </p>
            );
    }
};

Text.defaultProps = {
    bold: false,
    color: "primary",
    align: "left",
};

Text.propTypes = {
    type: PropTypes.oneOf(["h1", "h2", "h3", "p"]),
    align: PropTypes.oneOf(["left", "right", "center", "justify"]),
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "grey-1",
        "grey-2",
        "grey-3",
    ]),
    bold: PropTypes.bool,
};
