export async function sendEmail(from: string, to: string, subject: string, message: string) {
    const response = await fetch("/api/maileroo/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            from: from,
            to: to,
            subject: subject,
            message: message,
        }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
        throw new Error(`Failed to fetch: ${response.status}, ${result.error}`);
    }

    return result;
}