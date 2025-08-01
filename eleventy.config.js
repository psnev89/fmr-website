import { DateTime } from "luxon";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "./src/admin/config.yml": "./admin/config.yml",
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
