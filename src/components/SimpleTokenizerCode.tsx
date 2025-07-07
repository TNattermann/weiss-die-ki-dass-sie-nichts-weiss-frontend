import { Code as CodeIcon } from "lucide-react";
import {CopyButton} from "./CopyButton.tsx";

export default function SimpleTokenizerCode() {
    const pythonCode = `
import re

def get_token_text(text):
    tokens = re.split(r'([,.:;?_!"()\\']|--|\\s)', text)
    return [item.strip() for item in tokens if item.strip()]

def build_vocab_from_text(text: str):
    tokens = get_token_text(text)
    unique_tokens = sorted(set(tokens))
    vocab = {token: idx for idx, token in enumerate(unique_tokens)}
    return vocab

class SimpleTokenizerV2:
    def __init__(self, vocab):
        self.str_to_int = vocab
        self.int_to_str = {i: s for s, i in vocab.items()}

    def encode(self, text):
        tokens = get_token_text(text)
        tokens = [token if token in self.str_to_int else "<|unk|>" for token in tokens]
        return [self.str_to_int[token] for token in tokens]

    def decode(self, ids):
        text = " ".join([self.int_to_str[i] for i in ids])
        text = re.sub(r'\\s+([,.:;?!"()\\'])', r'\\1', text)
        return text
`.trim();

    const output = `
Tokens: ['Das', 'Wetter', 'wird', 'morgen', 'schön', '!']
Token IDs: [1, 2, 5, 3, 4, 0]
Decoded text: Das Wetter wird morgen schön!
`.trim();

    return (
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <div className="flex justify-center items-center gap-3">
                    <CodeIcon className="h-8 w-8 text-primary" />
                    <span>SimpleTokenizerV2 Implementation</span>
                </div>
            </h2>

            <p className="text-lg text-slate-600 mb-6">
                Hier ist eine vereinfachte Python-Implementation eines SimpleTokenizers,
                der grundlegende Tokenisierung durchführt:
            </p>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                        SimpleTokenizerV2 in Python
                    </h3>
                    <CopyButton value={pythonCode} />
                </div>

                {/* Code block */}
                <div className="code-block p-6 text-sm font-mono bg-gray-50 custom-scrollbar overflow-x-auto whitespace-pre-wrap">
                    <pre>{pythonCode}</pre>
                </div>

                {/* Output */}
                <div className="px-6 pb-6">
                    <h4 className="font-medium text-gray-800 mt-6 mb-2">Beispiel:</h4>
                    <div className="code-block p-4 text-sm bg-gray-100 rounded custom-scrollbar overflow-x-auto whitespace-pre-wrap">
                        <pre>{output}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
