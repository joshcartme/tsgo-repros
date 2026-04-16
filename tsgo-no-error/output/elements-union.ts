import type { BroadcastApi } from "./elements/broadcast";
import type { TextApi } from "./elements/text";
import type { TruncationApi } from "./elements/truncation";

export type ElementsUnion = (BroadcastApi | TextApi | TruncationApi)[];
