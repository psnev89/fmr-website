export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "./src/admin/config.yml": "./admin/config.yml",
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            layouts: "_includes/layouts",
            output: "_site",
        },
    };
}
