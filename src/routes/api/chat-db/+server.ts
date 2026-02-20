import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import type { Message } from "$lib/types/db";
import { requireDB } from "$lib/server/db";

export const GET: RequestHandler = async (e) => {

    // securements
    return error(401, 'DAWGGGG')

    const db = requireDB(e.platform?.env.testDB)
    const query = await db.prepare("SELECT * FROM msglog").run()

    return Response.json(query)
}