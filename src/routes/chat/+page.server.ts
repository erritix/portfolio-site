import { requireDB } from "$lib/server/db";
import type { Actions, PageServerLoad } from "./$types";
import type { Message } from "$lib/types/db"
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async (e) => {
    const db = requireDB(e.platform?.env.testDB)
    const stmt = await db
        .prepare("SELECT * FROM msglog ")
        // ORDER BY rowid DESC LIMIT 10
        .run<Message>()

    return stmt
}

export const actions = {
    sendmessage: async (e) => {
        const db = requireDB(e.platform?.env.testDB)
        const data = await e.request.formData()

        // validation
        if (!(
            data.get('message')
            && data.get('username')
        )) {
            fail(400, 'message not provided')
        }

        const msgData: Message = {
            sender: String(data.get('username')) || "Anonymous",
            message: String(data.get('message')) || '',
            // optimize the timestamp from miliseconds to seconds
            // sience we didnt need to milisecond accuracy 
            timestamp: Math.floor(Date.now() / 1000)
        }

        db.prepare(`INSERT INTO msglog VALUES (?, ?, ?)`)
            .bind(
                msgData.sender,
                msgData.message,
                msgData.timestamp)
            .run()

        return { success: true }
    }
} satisfies Actions