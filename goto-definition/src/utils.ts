import { createAction as redexActCreateAction } from "redux-act";

export const createAction = (description: string) => {
	return redexActCreateAction(description);
};

export const otherThing = () => undefined;
