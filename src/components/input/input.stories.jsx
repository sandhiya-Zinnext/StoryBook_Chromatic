import React from "react";
import Input from "./input";

export default {
    title: "ZNXT/Common/Input",
    component: Input,
    argTypes: {
        backgroundcolor: { control: "color" },
        type: {
            type: "select",
            options: ["text", "password"],
            placeholder: "Enter Text",
        },
        mode: {
            type: "select",
            options: ["single", "group"],
            placeholder: "Enter Name",
        },
    },
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    type: "text",
    placeholder: "Enter Name",
};

export const Password = Template.bind({});
Password.args = {
    type: "password",
    placeholder: "Enter Password",
};

export const InputGroup = Template.bind({});
InputGroup.args = {
    type: "text",
    mode: "group",
    label: "Name",
    placeholder: "Enter Name",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    placeholder: "Enter Name",
};

export const Medium = Template.bind({});
Medium.args = {
    size: "medium",
    placeholder: "Enter Name",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    placeholder: "Enter Name",
};
