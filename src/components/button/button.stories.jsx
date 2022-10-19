import React from "react";

import Button from "./button";

export default {
    title: "ZNXT/Common/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Large",
};

export const Medium = Template.bind({});
Medium.args = {
    size: "medium",
    label: "Medium",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Small",
};
