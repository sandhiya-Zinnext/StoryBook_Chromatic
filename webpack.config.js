const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        publicPath: "auto",
    },

    resolve: {
        extensions: [".jsx", ".js", ".json"],
    },

    devServer: {
        port: 6061,
        open: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "sbui",
            filename: "index.js",
            remotes: {},
            exposes: {
                "./button": "./src/components/button/button.jsx",
                "./input": "./src/components/input/input.jsx",
                "./logo": "./src/components/logo/logo.jsx",
                "./text": "./src/components/text/text.jsx",
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: false,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: false,
                },
                antd: {
                    singleton: true,
                    requiredVersion: false
                },
                "prop-types": {
                    singleton: true,
                    requiredVersion: false
                }
            },
        })
    ],
};
