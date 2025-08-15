import { DateTime } from "luxon"; 

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
        
    return {
	markdownTemplateEngine: 'njk',
	dataTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
	dir: {
		input: 'src',
        output: "_site",
        includes: "_includes" 
	},
};
    return {
        dir: {
            input: "src",

        }
    }
}