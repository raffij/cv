module.exports = {
  siteMetadata: {
    siteUrl: "https://giraffi.dev",
    title: "Giraffi",
    description: "Home of Raffi",
    image: "https://giraffi.dev/icons/icon-512x512.png",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-cname",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-generator",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true, // defaults to false
        jsxPragma: "jsx", // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@images": "src/images",
        },
        extensions: ["tsx", "ts", "svg"],
      },
    },
  ],
};
