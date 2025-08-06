Using the typescript-native preview extension `0.20250806.1` in VSCode:

With tsgo disabled (so using strada), ctrl/cmd clicking or right clicking and selecting go to definition on `someAction()` (line 3 of index.ts) correctly shows the definition in a pop-out.

With tsgo enabled, doing the same takes you to the type definition in `node_modules/redux-act/types.d.ts`.

vs

Using either tsc or tsgo ctrl/cmd clicking `otherThing` (line 5 of index.ts) correctly goes to the definition.
