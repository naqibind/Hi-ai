from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API Key
openai.api_key = "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"

@app.route("/api/generate", methods=["POST"])
def generate_response():
    data = request.json
    prompt = data.get("prompt", "")
    
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=150
        )
        result = response.choices[0].text.strip()
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
