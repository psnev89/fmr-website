import { DateTime } from "luxon";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "./src/assets/images": "./assets/images",
        "./src/assets/docs": "./assets/docs",
    });

    eleventyConfig.addFilter("limit", (array, limit) => {
        return array.slice(0, limit);
    });

    eleventyConfig.addFilter("readableDate", (dateObj) => {
        const timeZone = "Europe/Lisbon";

        return DateTime.fromJSDate(dateObj, { zone: timeZone }).setLocale('pt').toLocaleString(DateTime.DATE_FULL);
    });

    eleventyConfig.addFilter("now", (_, format) => {
        const now = DateTime.now().setZone("Europe/Lisbon");
        return format ? now.toFormat(format) : now;
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
