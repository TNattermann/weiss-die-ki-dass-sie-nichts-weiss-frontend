import { BASE_URL } from './config';

export async function getVersion(): Promise<{ version: string }> {
    const response = await fetch(`${BASE_URL}/version`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
    }

    return response.json();
}
