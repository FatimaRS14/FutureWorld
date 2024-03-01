/** @type {import('next').NextConfig} */

const path = require('path')


const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        prependData: `@import "variable.sass"`,
    },
};

module.exports = nextConfig