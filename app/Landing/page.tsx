"use client"
import React, { useState } from 'react';
import Navigation from '../Home-Coponent/Navigation';
const BettingDashboard = () => {
  
  const bets = [
    {
      team: 'Barcelona',
      sport: 'Football',
      odds: '2.10',
      outcome: 'Won',
      amount: '$150.00',
      outcomeStyle: 'bg-green-100 text-green-700'
    },
    {
      team: 'Liverpool',
      opponent: 'Manchester City',
      sport: '',
      odds: '3.80',
      outcome: 'Lost',
      amount: '$75.00',
      outcomeStyle: 'bg-red-100 text-red-700'
    },
    {
      team: 'Nuggets',
      sport: 'Basketball',
      odds: 'Today',
      outcome: 'Pending',
      amount: '$100.00',
      outcomeStyle: 'bg-orange-100 text-orange-700'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation/>
      {/* Main Content */}
      <div className="px-8 py-6">
        <h1 className="text-5xl font-bold mb-8">My Bets</h1>
        
        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-8">
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors">
            Date
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors">
            Sport
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors">
            Outcome
          </button>
        </div>

        {/* Bets List */}
        <div className="bg-white rounded-2xl overflow-hidden">
          {bets.map((bet, index) => (
            <div key={index} className="flex items-center justify-between p-6 text-black border-b border-gray-200 last:border-b-0">
              {/* Team/Match Info */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-1">{bet.team}</h3>
                <p className="text-gray-600 text-lg">
                  {bet.opponent || bet.sport}
                </p>
              </div>
              
              {/* Odds */}
              <div className="px-4 py-2 bg-gray-100 rounded-lg">
                <span className="text-lg font-bold text-black">{bet.odds}</span>
              </div>
              
              {/* Outcome */}
              <div className={`px-4 py-2 rounded-lg ${bet.outcomeStyle}`}>
                <span className="font-bold">{bet.outcome}</span>
              </div>
              
              {/* Amount */}
              <div className="text-right">
                <span className="text-2xl font-bold text-black">{bet.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BettingDashboard;