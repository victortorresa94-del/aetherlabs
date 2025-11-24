import { NextResponse } from 'next/server';

export const maxDuration = 60;

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Construct the payload EXACTLY as requested by the external API
        // Mapping frontend fields to external API fields
        const payload = {
            gender: body.gender,
            ethnicity: body.ethnicity,
            body: body.bodyType, // Frontend sends 'bodyType', API expects 'body'
            style: body.style,
            background: body.background,
            count: Number(body.numImages) // Frontend sends 'numImages', API expects 'count'
        };

        console.log('[Create Influencer] Proxying to external app with payload:', JSON.stringify(payload, null, 2));

        const externalUrl = 'https://creador-de-influencers-v1-159705655877.us-west1.run.app/generate';

        const response = await fetch(externalUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('[Create Influencer] External API Error:', response.status, errorText);
            return NextResponse.json(
                { success: false, error: `External API Error: ${response.status}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('[Create Influencer] Internal Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
