import { BASE_URL } from './config';

interface TokensResponse {
    tokens: string[];
}

interface TokenIdsResponse {
    token_ids: number[];
}

/**
 * Fetches tokens for a given text and tokenizer.
 * @param text The input text to tokenize.
 * @param tokenizer The type of tokenizer to use ('simple' or 'gpt2').
 * @returns A promise that resolves to an object containing an array of tokens.
 */
export async function getTokens(text: string, tokenizer: "simple" | "gpt2"): Promise<TokensResponse> {
    const response = await fetch(`${BASE_URL}/tokens`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text,
            tokenizer,
        }),
    });

    if (!response.ok) {
        throw new Error(`API Fehler: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Fetches token IDs for a given text and tokenizer.
 * @param text The input text to tokenize.
 * @param tokenizer The type of tokenizer to use ('simple' or 'gpt2').
 * @returns A promise that resolves to an object containing an array of token IDs.
 */
export async function getTokenIds(text: string, tokenizer: "simple" | "gpt2"): Promise<TokenIdsResponse> {
    const response = await fetch(`${BASE_URL}/token_ids`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text,
            tokenizer,
        }),
    });

    if (!response.ok) {
        throw new Error(`API Fehler: ${response.statusText}`);
    }

    return response.json();
}