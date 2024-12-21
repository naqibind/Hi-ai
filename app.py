from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API Key
openai.api_key = "your-openai-api-key"

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
