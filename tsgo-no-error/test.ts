import type { BlockApi as OutputBlock } from "./output/block";
import type { BlockApi as InputBlock } from "./input/block";

function getOutputBlocks(): OutputBlock[] {
  return [];
}

// This should be a type error: output ElementsUnion contains TruncationApi
// which is not assignable to any member of input ElementsUnion.
// tsc correctly reports this. tsgo misses it.
const blocks: InputBlock[] = getOutputBlocks();
