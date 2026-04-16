# tsc
```
yarn tsc
test.ts:11:7 - error TS2322: Type 'import("~/development/tsgo-repros/tsgo-no-error/output/block").BlockApi[]' is not assignable to type 'import("~/development/tsgo-repros/tsgo-no-error/input/block").BlockApi[]'.
  Type 'import("~/development/tsgo-repros/tsgo-no-error/output/block").BlockApi' is not assignable to type 'import("~/development/tsgo-repros/tsgo-no-error/input/block").BlockApi'.
    Types of property 'elements' are incompatible.
      Type 'import("~/development/tsgo-repros/tsgo-no-error/output/section").SectionApi[]' is not assignable to type 'import("~/development/tsgo-repros/tsgo-no-error/input/section").SectionApi[]'.
        Type 'import("~/development/tsgo-repros/tsgo-no-error/output/section").SectionApi' is not assignable to type 'import("~/development/tsgo-repros/tsgo-no-error/input/section").SectionApi'.
          Types of property 'elements' are incompatible.
            Type 'import("~/development/tsgo-repros/tsgo-no-error/output/elements").Elements' is not assignable to type 'import("~/development/tsgo-repros/tsgo-no-error/input/elements").Elements'.
              Property 'id' is missing in type 'TruncationApi' but required in type 'WorkflowTokenApi'.

11 const blocks: InputBlock[] = getOutputBlocks();
         ~~~~~~

  input/components/workflow-token.ts:3:3
    3   id: string;
        ~~
    'id' is declared here.


Found 1 error in test.ts:11
```
# tsgo
```
yarn tsgo
```
(no output)