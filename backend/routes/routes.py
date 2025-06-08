from flask import Blueprint, request, jsonify
from utils import is_prime

prime_bp = Blueprint('prime', __name__)

@prime_bp.route('/', methods=['GET'])
def index():
    return jsonify({"message": "Welcome to the Prime Number API!"}), 200

@prime_bp.route('/is_Prime', methods=['GET'])
def check_prime():
    number_param = request.args.get('number')

    if number_param is None:
        return jsonify({"error": "Missing required query parameter 'number'"}), 400

    try:
        number = int(number_param)
    except ValueError:
        return jsonify({"error": "Query parameter 'number' must be an integer"}), 400

    result = is_prime(number)
    return jsonify({"number": number, "is_Prime": result}), 200
