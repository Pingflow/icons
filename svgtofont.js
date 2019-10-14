const svgToFont = require('svgtofont');
const path = require('path');
const pkg = require('./package.json');

svgToFont({
    src: path.resolve(process.cwd(), 'assets'),
    dist: path.resolve(process.cwd(), 'dist'),
    fontName: "pingflow",
    css: true,
    emptyDist: true,
    clssaNamePrefix: "pf",
    website: {
        title: "PingFlow - Icons",
        description: "PingFlow font icons",
        logo: path.resolve(process.cwd(), "icons", "logo.svg"),
        version: pkg.version,
        meta: {
            description: "PingFlow font icons.",
            keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG",
            favicon: "./pingflow.svg"
        },
        links: [
            {
                title: "GitLab",
                url: "https://pingcode.io/pingflow/libraries/icons"
            },
            {
                title: "Feedback",
                url: "https://pingcode.io/pingflow/libraries/icons/issues"
            }
        ],
        footerInfo: `PingFlow`
    }
})
    .then(() => {
        console.log('done !');
    });
