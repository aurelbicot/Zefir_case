import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { SellerDatabaseAnalysis } from './sections/SellerDatabaseAnalysis'
import { BuyerSwap } from './sections/BuyerSwap'

type MainTab = 'seller' | 'buyer'

export default function App() {
  const [mainTab, setMainTab] = useState<MainTab>('seller')

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)]">
      <Header mainTab={mainTab} onMainTabChange={setMainTab} />
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10 md:px-8">
        {mainTab === 'seller' && <SellerDatabaseAnalysis />}
        {mainTab === 'buyer' && <BuyerSwap />}
      </main>
      <Footer />
    </div>
  )
}
