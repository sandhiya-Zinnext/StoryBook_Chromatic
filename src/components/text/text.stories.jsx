import React from "react";
import Text from "./text";

export default {
    title: "ZNXT/Common/Text",
    component: Text,
    argTypes: {
        type: {
            name: "Type",
            type: { name: "string" },
            description: "The type of the text",
            control: { type: "select" },
            options: ["h1", "h2", "h3", "p"],
        },
        align: {
            name: "Text Alignment",
            type: { name: "string" },
            description: "Text Alignment",
            control: { type: "select" },
            options: ["left", "right", "center", "justify"],
        },
        color: {
            name: "Color",
            type: { name: "string" },
            description: "The color of the text",
            control: { type: "select" },
            options: ["primary", "secondary", "grey-1", "grey-2", "grey-3"],
        },
        bold: {
            name: "Bold",
            type: { name: "boolean" },
            description: "Text is bold or not",
            control: { type: "boolean" },
        },
        paddingTop: {
            name: "Padding Top",
            type: { name: "number" },
            description: "Padding Top of the text",
            control: { type: "number" },
        },
        paddingBottom: {
            name: "Padding Bottom",
            type: { name: "number" },
            description: "Padding Bottom of the text",
            control: { type: "number" },
        },
    },
};

const Template = (args) => <Text {...args}>Zinext Text</Text>;

export const H1Heading = Template.bind({});
H1Heading.args = {
    type: "h1",
    color: "primary",
};

export const H2Heading = Template.bind({});
H2Heading.args = {
    type: "h2",
    color: "primary",
};

export const H3Heading = Template.bind({});
H3Heading.args = {
    type: "h3",
    color: "primary",
};

export const Paragraph = Template.bind({});
Paragraph.args = {
    type: "p",
    color: "primary",
};
