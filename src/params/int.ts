import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => {
    console.log('param', param);
    console.log('+param', +param);
    return Number.isInteger(+param) && +param > 0;
};