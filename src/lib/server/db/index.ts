import { error } from "@sveltejs/kit";

export function requireDB(db: D1Database | undefined) {
    if (!db) {
        throw error(500, `DB not found <br>contact Endmin for more`)
    }

    return db
}