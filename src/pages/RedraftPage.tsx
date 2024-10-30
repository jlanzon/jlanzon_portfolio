import { useEffect, useState } from "react";
import axios from "axios";

function RedraftPage() {
  const [inputText, setInputText] = useState("");
  const [prompt, setPrompt] = useState(
    "Please redraft the following email to improve its clarity and tone"
  );
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem("openaiApiKey") || "";
  });
  useEffect(() => {
    localStorage.setItem("openaiApiKey", apiKey);
  }, [apiKey]);

  const handleRedraft = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            {
              role: "user",
              content: `${prompt}:\n\n${inputText}`,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const redraftedText = response.data.choices[0].message.content.trim();
      setOutputText(redraftedText);
    } catch (error) {
      console.error(error);
      setOutputText("An error occurred while processing your request.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-[90vh]">
      <div className="w-full md:w-1/2 p-4 flex flex-col">
        <div className="mb-4">
          <textarea
            className="w-full h-32 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your OpenAI API key here..."
          />
        </div>
        <textarea
          className="w-full h-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste your email here..."
        />
      </div>

      <div className="w-full md:w-1/2 p-4 flex flex-col">
        <button
          className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          onClick={handleRedraft}
          disabled={loading || !inputText || !apiKey}
        >
          {loading ? "Processing..." : "Redraft Email"}
        </button>

        <div className="w-full h-full p-2 border rounded overflow-auto whitespace-pre-wrap">
          {outputText || (
            <div className="text-gray-500">
              Your redrafted email will appear here.
            </div>
          )}
        </div>

        <div className="mt-4">
          <input
            type="password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your OpenAI API key here..."
          />
        </div>
      </div>
    </div>
  );
}

export default RedraftPage;
