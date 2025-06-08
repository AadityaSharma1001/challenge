import React from 'react'
import { useState, useEffect } from 'react';

const Home = () => {
  const [fact, setFact] = useState('Click the button above to get a random cat fact!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    setError(false);

    try {
      console.log(import.meta.env.VITE_API_URL);
      const response = await fetch('https://catfact.ninja/fact');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setFact(data.fact);
      
    } catch (error) {
      console.error('Error fetching cat fact:', error);
      setFact('Oops! Something went wrong. Please try again.');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex items-center justify-center p-5 relative">
      <button 
        className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/30 hover:shadow-lg border border-white/30"
        onClick={() => window.location.href = '/prime'}
      >
        Prime Number✨
      </button>
      
      <div className="bg-white rounded-3xl p-10 shadow-2xl text-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          🐱 Random Cat Facts
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Discover amazing facts about our feline friends!
        </p>
        
        <button 
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full text-lg uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none mb-8"
          onClick={fetchCatFact}
          disabled={loading}
        >
          Get Random Cat Fact
        </button>
        
        <div className="min-h-24 flex items-center justify-center p-6 bg-gray-50 rounded-2xl">
          {loading ? (
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          ) : (
            <p className={`text-xl leading-relaxed italic ${error ? 'text-red-500 font-semibold' : 'text-gray-700'}`}>
              "{fact}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home
