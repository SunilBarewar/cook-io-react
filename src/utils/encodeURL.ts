import { FilterQuery } from "../interfaces/filters";

export const encodeURL = (queries:FilterQuery[]) =>{
    const /** {String} */ query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "%20")
        .replace(/\+/g, "%2B");

        return query;
}