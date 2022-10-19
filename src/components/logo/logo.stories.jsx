import React from "react";
import Logo from "./logo";

export default {
    title: "ZNXT/Common/Logo",
    component: Logo,
    argTypes: {
        full: {
            name: "Full",
            //type: { name: 'bool' },
            description: "Show the logo in full with text or without",
            control: { type: "boolean" },
        },
    },
};

const Template = (args) => <Logo {...args} />;

export const FullLogo = Template.bind({});
FullLogo.args = {
    full: true,
};

export const OnlyIconLogo = Template.bind({});
OnlyIconLogo.args = {
    full: false,
};
