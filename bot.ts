export async function sendTelegramMessage(message) {
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const body = {
        chat_id: chatId,
        text: message,
    };

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        throw new Error('Failed to send message via Telegram');
    }

    return await res.json();
}
