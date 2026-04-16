import type { SectionApi } from "./section";
/* if you uncomment this, and comment out the line above, tsgo reports the error */
// import type { Elements } from "./elements";

// export interface SectionApi {
//   type: "section";
//   elements: Elements;
// }

export interface BlockApi {
	type: "rich_text";
	elements: SectionApi[];
}
