from flask import Flask
from flask_cors import CORS
from routes.routes import prime_bp

def create_app():
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:5173"]) #Can be dynamically set using environment variables
    app.register_blueprint(prime_bp)
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
