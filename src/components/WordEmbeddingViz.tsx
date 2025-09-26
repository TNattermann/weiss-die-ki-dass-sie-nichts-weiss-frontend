import React, { useState } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LabelList } from "recharts";

type Embeddings = Record<string, [number, number]>;

interface WordEmbeddingVizProps {
  embeddings: Embeddings;
  groups: Record<string, string[]>;
  initialWords?: string[];
}

const WordEmbeddingViz: React.FC<WordEmbeddingVizProps> = ({ embeddings, groups, initialWords }) => {
  const [selectedWords, setSelectedWords] = useState<string[]>(initialWords ?? [Object.keys(groups)[0]]);

  // Funktion zum Hinzufügen oder Entfernen einer Wortgruppe
  const handleButtonClick = (group: string) => {
  setSelectedWords([group]); // Nur die ausgewählte Gruppe wird gesetzt
};

  const reducedData = Object.keys(embeddings).map((word) => ({
    word,
    x: embeddings[word][0],
    y: embeddings[word][1],
  }));

  const allWordsToDisplay = new Set<string>();
  selectedWords.forEach(word => {
    allWordsToDisplay.add(word);
    groups[word]?.forEach(relatedWord => allWordsToDisplay.add(relatedWord));
  });

  const displayData = reducedData.filter(d => allWordsToDisplay.has(d.word));


  const CustomLabel = (props: any) => {
    const { x, y, value } = props;
    return (
      <text
        x={x + 8}
        y={y - 6}
        fill="#162456"
        fontSize="11"
        fontWeight={selectedWords.includes(value) ? "bold" : "normal"}
        textAnchor="start"
        dominantBaseline="middle"
        className="sm:text-xs lg:text-sm"
      >
        {value}
      </text>
    );
  };

  return (
    <div className="rounded-xl p-4 sm:p-6 lg:p-8">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-lg font-semibold text-primary text-center mb-3 sm:mb-4">Wortgruppen auswählen:</h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 justify-center">
          {Object.keys(groups).map((group) => (
            <button
              key={group}
              onClick={() => handleButtonClick(group)}
              className={`rounded-full px-4 py-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-lg
                ${
                  selectedWords.includes(group)
                    ? 'bg-primary-container-selected text-on-primary-container-selected scale-103'
                    : 'bg-primary-container text-on-primary-container'
                }`}
            >
              {group}
            </button>
          ))}
        </div>
        
      </div>

      <div className="bg-secondary-container p-3 mb-6 sm:p-4 lg:p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-on-secondary-container mb-4 text-center">
          Worteinbettungen für ausgewählte Gruppen
        </h3>
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart
            margin={{
              top: 20,
              right: 40,
              bottom: 20,
              left: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Dimension 1"
              stroke="#162456"
              fontSize={12}
              tickLine={{ stroke: '#162456' }}
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="Dimension 2"
              stroke="#162456"
              fontSize={12}
              tickLine={{ stroke: '#162456' }}
            />
            <Scatter 
              name="Wörter" 
              data={displayData}
              fill="#3B82F6"
            >
              {displayData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="#ecfcca"
                  stroke="#162456"
                  strokeWidth={1}
                  r={selectedWords.includes(entry.word) ? 10 : 6}
                />
              ))}
              <LabelList 
                dataKey="word" 
                content={<CustomLabel />}
              />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WordEmbeddingViz;
