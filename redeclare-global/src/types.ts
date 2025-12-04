import type { Moment } from "moment";

declare module "moment" {
  export interface Locale extends MLocaleExt {}
}
export interface MLocaleExt {
  weekdays?: string[];
}
