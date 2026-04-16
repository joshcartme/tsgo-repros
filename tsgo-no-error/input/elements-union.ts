import type { BroadcastApi } from "./elements/broadcast";
import type { TextApi } from "./elements/text";
import type { WorkflowTokenApi } from "./elements/workflow-token";

export type ElementsUnion = (BroadcastApi | TextApi | WorkflowTokenApi)[];
