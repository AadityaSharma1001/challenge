import React, { useState } from 'react';
import axios from 'axios';

const Prime = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkPrime = async () => {
    if (!number || number.trim() === '') {
      setError('Please enter a number');
      return;
    }

    const num = parseInt(number);
    if (isNaN(num) || num < 1) {
      setError('Please enter a valid positive number');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/is_Prime`, {
        params: { number: num }
      });
      console.log('Response:', response.data);
      setResult(response.data);
      
    } catch (error) {
      console.error('Error checking prime:', error);
      if (error.response) {
        setError(`Server error: ${error.response.status}`);
      } else if (error.request) {
        setError('No response from server. Please check your connection.');
      } else {
        setError('Failed to check prime number. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    checkPrime();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkPrime();
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-500 min-h-screen flex items-center justify-center p-5 relative">
      {/* Back Button */}
      <button 
        className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/30 hover:shadow-lg border border-white/30"
        onClick={() => window.location.href = '/'}
      >
        ← Back
      </button>

      <div className="bg-white rounded-3xl p-10 shadow-2xl text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-6">
          🔢 Prime Checker
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Enter a number to check if it's prime
        </p>
        
        <div className="mb-8">
          <div className="flex flex-col gap-4">
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter a number..."
              className="w-full px-6 py-4 text-xl text-center border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors duration-300"
              min="1"
              disabled={loading}
            />
            
            <button 
              onClick={checkPrime}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-4 px-8 rounded-full text-lg uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              disabled={loading || !number}
            >
              {loading ? 'Checking...' : 'Check Prime'}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-2xl">
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}

        {/* Result Display */}
        <div className="min-h-24 flex items-center justify-center p-6 bg-gray-50 rounded-2xl">
          {loading ? (
            <div className="w-8 h-8 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
          ) : result ? (
            <div className="text-center">
              <p className="text-2xl font-bold mb-2">
                <span className="text-gray-700">{result.number}</span> is{' '}
                <span className={result.is_Prime ? 'text-green-600' : 'text-red-600'}>
                  {result.is_Prime ? 'PRIME' : 'NOT PRIME'}
                </span>
              </p>
              {result.is_Prime ? (
                <p className="text-green-600 text-lg">✅ This is a prime number!</p>
              ) : (
                <div className="text-red-600">
                  <p className="text-lg">❌ This is not a prime number</p>
                  {result.factors && (
                    <p className="text-sm mt-2">
                      Factors: {result.factors.join(', ')}
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500 text-lg italic">
              Enter a number above to check if it's prime
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prime;