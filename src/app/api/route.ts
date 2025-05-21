import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { name, email, phoneNumber, message } = body;
        const requiredFields = { name, email, phoneNumber, message };

        const missingFields = [];
        for (const [key, value] of Object.entries(requiredFields)) {
            if (value === undefined || value === null || value === "") {
                missingFields.push(key);
            }
        }

        if (missingFields.length > 0) {
            return NextResponse.json(
                { error: `Missing required fields: ${missingFields.join(", ")}` },
                { status: 400 }
            );
        }

        // Google Sheets auth
        const auth = await google.auth.getClient({
            credentials: {
                type: "service_account",
                project_id: process.env.GOOGLE_PROJECT_ID,
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "EduLaibary!A1",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        name, email, phoneNumber, message,
                    ],
                ],
            },
        });

        return NextResponse.json(
            { success: true, updatedRange: response.data.updates?.updatedRange },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error writing to Google Sheet:", error);
        const errorMessage = "Internal Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
