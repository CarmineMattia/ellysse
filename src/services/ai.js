const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const SITE_URL = 'http://localhost:5173';
const SITE_NAME = 'Ellysse AI';

export const getAIResponse = async (messages, context) => {
    if (!API_KEY) {
        return "⚠️ API Key mancante. Configura il file .env.";
    }

    const systemPrompt = `
Sei Ellysse AI, un assistente virtuale utile e professionale per Ellysse, un'azienda specializzata in AI e Customer Care Omnicanale.
Il tuo obiettivo è rispondere alle domande degli utenti basandoti STRETTAMENTE sul seguente CONTESTO.
Se la risposta non si trova nel contesto, dì educatamente che non hai questa informazione e suggerisci di contattare il supporto o prenotare una demo.
Non inventare fatti.
Mantieni le risposte concise, professionali e in italiano (o nella lingua dell'utente se diversa).

CONTESTO:
${context}
`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "HTTP-Referer": SITE_URL,
                "X-Title": SITE_NAME,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": import.meta.env.VITE_AI_MODEL || "google/gemini-2.0-flash-exp:free",
                "messages": [
                    { "role": "system", "content": systemPrompt },
                    ...messages.map(m => ({ role: m.type === 'user' ? 'user' : 'assistant', content: m.text }))
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            if (response.status === 429) {
                return "⚠️ Troppe richieste. Il modello gratuito è attualmente occupato. Riprova tra qualche secondo.";
            }
            throw new Error(errorData.error?.message || 'API Error');
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("AI Service Error:", error);
        return "Mi dispiace, si è verificato un errore tecnico. Riprova più tardi.";
    }
};
