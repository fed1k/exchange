"use client"

import Link from "next/link"
import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  ArrowDownToLine,
  ArrowUpFromLine,
  History,
  Users,
  ShieldCheck,
  Settings,
  LogOut,
} from "lucide-react"
import { Suspense } from "react"
import { MarketsList } from "../markets/markets-list"
import { Skeleton } from "@/components/ui/skeleton"
import { getBinancePrices } from "@/lib/binance"

const userNavigation = [
  { name: "Обзор", href: "/dashboard", icon: LayoutDashboard },
  { name: "Депозит", href: "/deposit", icon: ArrowDownToLine },
  { name: "Вывод", href: "/withdraw", icon: ArrowUpFromLine },
  { name: "История", href: "/history", icon: History },
  { name: "Реферальная программа", href: "/referral", icon: Users },
  { name: "Верификация", href: "/verification", icon: ShieldCheck },
  { name: "Настройки", href: "/settings", icon: Settings },
  { name: "Сменить аккаунт", href: "/", icon: LogOut },
]

const SYMBOLS = [
  "BTCUSDT",
  "ETHUSDT",
  "SOLUSDT",
  "XRPUSDT",
  "DOTUSDT",
  "DOGEUSDT",
  "LINKUSDT",
  "ADAUSDT",
  "MATICUSDT",
  "AVAXUSDT",
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Обзор")
  const [marketData, setMarketData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMarketData() {
      try {
        const data = await getBinancePrices(SYMBOLS)
        setMarketData(data)
      } catch (error) {
        console.error("Error fetching market data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMarketData()
  }, [])

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 min-h-screen text-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1 py-2 mb-4">
            {userNavigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-zinc-800 ${
                    activeTab === item.name ? "bg-zinc-800" : ""
                  }`}
                  onClick={() => setActiveTab(item.name)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Balance Section */}
        <div className="mb-8">
          <div className="text-sm text-zinc-400">Основной баланс:</div>
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold">0.00 $</div>
            <Link href="/deposit">
            <Button className="text-white">Пополнить</Button>
            </Link>
          </div>
        </div>

        {/* Additional Balances */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-zinc-400">Маржинальный депозит:</div>
            <div>0.00 USDT</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-zinc-400">Депозит финансирования:</div>
            <div>0.00 USDT</div>
          </div>
        </div>

        {/* Crypto Table */}
        <div className="overflow-x-auto">
          {loading ? (
            <Skeleton className="h-[500px] w-full" />
          ) : (
            <Suspense fallback={<Skeleton className="h-[500px] w-full" />}>
              <MarketsList initialData={marketData} />
            </Suspense>
          )}
        </div>
      </main>
    </div>
  )
}
