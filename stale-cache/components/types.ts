import type { BaseType } from "@lib/types";

interface BaseFooRow {
	key: string;
}

export interface Foo extends BaseFooRow {
	bar: string;
	sectionChannelIndex: number;
	channelSection: BaseType;
}
