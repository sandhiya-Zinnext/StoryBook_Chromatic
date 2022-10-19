import React from "react";
import PropTypes from "prop-types";
import "./logo.scss";
import Icon from "./logo.svg";

export default function Logo({ full }) {
    return (
        <div className="znxt-logo">
            <Icon />
            {full ? <div className="znxt-logo-text">zinnext</div> : ""}
        </div>
    );
}

Logo.propTypes = {
    full: PropTypes.bool,
};
