"use client"

import { useEffect, useState } from 'react';
import { CryptoIcon } from "@/components/crypto-icon"
import { TRADING_PAIRS } from "@/lib/binance"
import {  SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import axios from 'axios';
import CandlestickChart from "@/app/components/Candlesticks";
import * as Select from '@radix-ui/react-select';
interface Kline {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export default function TradingView() {
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [interval, setInterval] = useState('1d');
  const [data, setData] = useState<Kline[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [wsInstance, setWsInstance] = useState<WebSocket | null>(null);


  /**
   * here we fetch the historically data so that the chart will not be empty
   * we can extract this into api hook
   */
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=1000`
      );
      
      const formattedData = response.data.map((d: any[]): Kline => ({
        time: d[0] / 1000, // Convert milliseconds to seconds
        open: parseFloat(d[1]),
        high: parseFloat(d[2]),
        low: parseFloat(d[3]),
        close: parseFloat(d[4]),
      }))
      .sort((a: Kline, b: Kline) => a.time - b.time);


      setData(formattedData);
      setError('');
    } catch (err) {
      setError('Failed to fetch market data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [symbol, interval]);

   

  /**
   * here we connect to the websocket so that we can get the live data
   */
  useEffect(() => {
    let ws: WebSocket | null = null;
    let reconnectTimeout: NodeJS.Timeout;
  
    const connectWebSocket = () => {
      
        ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`);
  
        ws.onopen = () => {
          console.log('WebSocket connected');
          setError('');
        };
  
        ws.onmessage = (event) => {
          const message = JSON.parse(event.data);
          const kline = message.k;
          const newKline: Kline = {
            time: kline.t / 1000,
            open: parseFloat(kline.o),
            high: parseFloat(kline.h),
            low: parseFloat(kline.l),
            close: parseFloat(kline.c),
          };
  
          setData(prev => {
           /**
            * here we merge the historical data with the live data
            */
            let newData = [...prev];
            const existingIndex = newData.findIndex(d => d.time === newKline.time);
            
            if (existingIndex > -1) {
              newData[existingIndex] = newKline;
            } else {
              newData = [...prev, newKline]
              .sort((a, b) => a.time - b.time);
            }
            
            return newData.slice(-1000); 
          });
        };

        
        ws.onerror = (error) => {
          console.error('WebSocket error:', error);
        };
  
        ws.onclose = (event) => {
          if (event.wasClean) {
            console.log(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
          } else {
            console.error('Connection abruptly closed');
            
            reconnectTimeout = setTimeout(connectWebSocket, 3000);
            
          }
        };
      }
      
      
    setLoading(false)
    connectWebSocket();
  
    return () => {
      if (ws) {
        ws.close();
        ws = null;
      }
      clearTimeout(reconnectTimeout);
    }
  }, [symbol, interval ]);

  return (
    <div className="p-4 bg-black/50 backdrop-blur-lg rounded-lg shadow-md mt-5 relative overflow-hidden">
    <div className="flex items-center gap-4 mb-4 relative z-10">
      <div className="flex items-center gap-2">
        <Select.Root value={symbol} onValueChange={setSymbol}>
          <Select.Trigger className="w-[180px] bg-gray-800/50 hover:bg-gray-700/50 text-white px-3 py-2 rounded-md transition-colors">
            <div className="flex items-center gap-2">
              <CryptoIcon symbol={symbol} className="w-6 h-6" />
              <Select.Value placeholder="Select pair" />
            </div>
          </Select.Trigger>
          
          <Select.Portal>
            <Select.Content className="bg-gray-900/95 backdrop-blur-sm rounded-md shadow-xl border border-gray-800">
              <Select.ScrollUpButton className="text-gray-400 flex items-center justify-center h-6" />
              <Select.Viewport className="p-1">
                {TRADING_PAIRS.map((pair) => (
                  <Select.Item 
                    key={pair} 
                    value={pair}
                    className="px-3 py-2 text-sm text-gray-100 hover:bg-gray-800 rounded-md cursor-pointer outline-none transition-colors"
                  >
                    <Select.ItemText>{pair}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
              <Select.ScrollDownButton className="text-gray-400 flex items-center justify-center h-6" />
              <Select.Arrow className="fill-gray-800" />
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      
      <Select.Root value={interval} onValueChange={setInterval}>
        <Select.Trigger className="w-[100px] bg-gray-800/50 hover:bg-gray-700/50 text-white px-3 py-2 rounded-md transition-colors">
          <Select.Value placeholder="Interval" />
        </Select.Trigger>
        
        <Select.Portal>
          <Select.Content className="bg-gray-900/95 backdrop-blur-sm rounded-md shadow-xl border border-gray-800">
            <Select.ScrollUpButton className="text-gray-400 flex items-center justify-center h-6" />
            <Select.Viewport className="p-1">
              {['1s', '1m', '5m', '15m', '1h', '4h', '1d', '1w'].map((int) => (
                <Select.Item 
                  key={int} 
                  value={int}
                  className="px-3 py-2 text-sm text-gray-100 hover:bg-gray-800 rounded-md cursor-pointer outline-none transition-colors"
                >
                  <Select.ItemText>{int}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className="text-gray-400 flex items-center justify-center h-6" />
            <Select.Arrow className="fill-gray-800" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>

    <div className="relative z-0">
      {loading ? (
        <div className="h-96 flex items-center justify-center text-gray-400">Loading chart...</div>
      ) : error ? (
        <div className="h-96 flex items-center justify-center text-red-400">{error}</div>
      ) : (
        <div className="m-5">
          <CandlestickChart data={data} colors={{
            backgroundColor: 'rgba(17, 24, 39, 0.5)',
            upColor: '#10b981',
            downColor: '#ef4444',
            wickUpColor: '#10b981',
            wickDownColor: '#ef4444'
          }} />
        </div>
      )}
    </div>
  </div>
  );
}

