
module.exports = function (args) {
    return {
        mode: "development",
        devtool: "sourcemap",
        watch: true,
        clear: true,
        entry: {
            app: './src/index.js',
            product: './src/product.js',
            about: './src/about.js',
            news: './src/news.js'
        }
    };
}