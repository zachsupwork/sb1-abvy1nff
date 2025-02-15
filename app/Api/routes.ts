import { createSupabaseClient } from "@app/utils/supabase/supabaseClient";
import { NextResponse } from "next/server";

const supabase = createSupabaseClient();

export async function POST(request: Request) {
    try {
        const payload = await request.json();
        if (payload.event !== "call_analyzed" || payload.call_type !== "phone_call") {
            return NextResponse.json({ error: "Invalid event for phone calls" }, { status: 200 });
        }

        const callData = {
            id: payload.call_id,
            summary: payload.call.call_analysis?.call_summary || null,
            transcript: payload.call.transcript || null,
            recording_url: payload.call.recording_url,
            start_time: new Date(payload.call.start_timestamp),
            end_time: new Date(payload.call.end_timestamp),
            duration: Math.round((payload.call.end_timestamp - payload.call.start_timestamp) / 1000),
        };

        await supabase.from("calls").insert(callData);
        return NextResponse.json({ message: "Call data stored successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
