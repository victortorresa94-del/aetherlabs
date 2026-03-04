import { NextRequest, NextResponse } from 'next/server';
import { DeepSeekService } from '@/lib/fluby/DeepSeekService';

export async function POST(req: NextRequest) {
    try {
        const { messages, route, context } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Invalid messages' }, { status: 400 });
        }

        const response = await DeepSeekService.chat(messages, route, context);

        return NextResponse.json({ message: response });
    } catch (error) {
        console.error('FLUBY Chat Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
