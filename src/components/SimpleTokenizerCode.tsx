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
            <h2 className="text-3xl font-bold text-textDark mb-8">
                <div className="flex justify-center items-center gap-3">
                    <CodeIcon className="h-12 w-12 text-primary" />
                    <span className="text-5xl font-bold text-center text-primary">SimpleTokenizerV2 Implementation</span>

                </div>
            </h2>

            <p className="text-lg text-text-normal mb-6">
                Hier ist eine vereinfachte Python-Implementation eines SimpleTokenizers,
                der grundlegende Tokenisierung durchführt:
            </p>

            <div className="shadow-xl rounded-2xl p-8 mb-12">
                <div className="text-outline-dark flex justify-between items-center border-b px-6 py-4 mb-5">
                    <h3 className="text-lg font-semibold text-primary">
                        SimpleTokenizerV2 in Python
                    </h3>
                    <CopyButton value={pythonCode} />
                </div>

                {/* Code block */}
                <div className="text-text-normal bg-primary/5 code-block p-6 text-sm font-mono custom-scrollbar overflow-x-auto whitespace-pre-wrap rounded-2xl">
                    <pre>{pythonCode}</pre>
                </div>

                {/* Output */}
                <div className="mt-6">
                    <h4 className="font-medium text-primary mb-2 px-6">Beispiel:</h4>
                    <div className="text-text-normal bg-primary/5 code-block p-6 text-sm font-mono custom-scrollbar overflow-x-auto whitespace-pre-wrap rounded-2xl">
                        <pre>{output}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
