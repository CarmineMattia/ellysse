export const loadContext = async () => {
    try {
        const files = [
            '/assets/docs/brochu_1-elly.txt',
            '/assets/docs/brochu_2-contatta.txt'
        ];

        const texts = await Promise.all(files.map(async (file) => {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return await response.text();
        }));

        return texts.join('\n\n---\n\n');
    } catch (error) {
        console.error("Error loading context:", error);
        return "";
    }
};
