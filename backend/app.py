from flask import Flask
from flask_cors import CORS
from routes.routes import prime_bp
import os

def create_app():
    app = Flask(__name__)
    CORS(app, origins=["https://challenge-ten-chi.vercel.app"]) #Can be dynamically set using environment variables
    app.register_blueprint(prime_bp)
    return app

if __name__ == '__main__':
    app = create_app()
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
