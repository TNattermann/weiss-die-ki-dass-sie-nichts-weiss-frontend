function TokenInfo() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-blue-400 mb-4">Was ist ein Tokenizer?</h1>
            <p className="text-lg text-gray-700">
                Test
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-400">Beispiel:</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
                Input: "Das ist cool!"{'\n'}
                Tokens: ["Das", "ist", "cool", "!"]
            </pre>
        </div>
    )
}

export default TokenInfo