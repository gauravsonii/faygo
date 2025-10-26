import {
	type Person,
	type WebSite,
	type WithContext,
} from "schema-dts";
import avatar from "../assets/avatar.png";

export const mainWebsite: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: import.meta.env.SITE,
	name: "Akhil Rawat",
	description: "Akhil Rawat's personal portfolio website",
	inLanguage: "en_US",
};

export const personSchema: WithContext<Person> = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Akhil Rawat",
	url: `${import.meta.env.SITE}`,
	image: `${import.meta.env.SITE}${avatar.src}`,
	sameAs: [
		"https://www.twitter.com/faygo78akhil",
		"https://www.instagram.com/ok_.akhil/",
		"https://www.linkedin.com/in/akhilrawat1/",
	],
};
