import type { SectionApi } from "./section";

export interface BlockApi {
  type: "rich_text";
  elements: SectionApi[];
}
