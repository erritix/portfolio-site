import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

const misuhs = ['kontol', 'anjing', 'memek', 'bangsat', 'ngentot', 'ngentod', 'pepek', 'puki', 'patek', 'tempek', 'asu']

export const GET: RequestHandler = () => {
    const randomIndex = Math.floor(Math.random() * misuhs.length)

    return new Response(misuhs[randomIndex])
}
