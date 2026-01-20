import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-emerald-400">Deal</span>Drop Dubai
        </div>
        <Link
          href="https://t.me/DealDropDubai"
          className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-medium transition"
        >
          Join Channel
        </Link>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Dubai Property Deals
          <br />
          <span className="text-emerald-400">Before Anyone Else</span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          AI-powered scanner finds undervalued properties by comparing listings
          against official Dubai Land Department transaction data.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="https://t.me/DealDropDubai"
            className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg transition flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.154.234.169.357.015.124.034.357.019.551z" />
            </svg>
            Free Channel
          </Link>
          <Link
            href="https://t.me/DealDropDubaiBot"
            className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-xl font-semibold text-lg transition border border-slate-600"
          >
            Start Bot
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Scan Listings</h3>
            <p className="text-slate-400">
              We scan PropertyFinder & Bayut daily for new Dubai properties
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Compare Prices</h3>
            <p className="text-slate-400">
              Each listing is compared against DLD transaction history
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Alerts</h3>
            <p className="text-slate-400">
              Receive deals rated by discount % vs market value
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-4xl font-bold mb-6">
              AED 0<span className="text-lg text-slate-400">/month</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                1 deal per day
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Public channel access
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Basic deal info
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                4-hour delay
              </li>
            </ul>
            <Link
              href="https://t.me/DealDropDubai"
              className="block text-center bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Join Free Channel
            </Link>
          </div>

          {/* Pro */}
          <div className="bg-gradient-to-b from-emerald-900/50 to-slate-800/50 p-8 rounded-2xl border border-emerald-500/50 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-sm px-3 py-1 rounded-full font-medium">
              RECOMMENDED
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-4xl font-bold mb-6">
              AED 99<span className="text-lg text-slate-400">/month</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <strong>All deals</strong> - unlimited
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <strong>Instant alerts</strong> - no delay
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                DLD comparable transactions
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Building price history
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                24 currency options
              </li>
            </ul>
            <Link
              href="https://t.me/DealDropDubaiBot?start=pro"
              className="block text-center bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              Upgrade to Pro
            </Link>
            <p className="text-center text-sm text-slate-400 mt-3">
              Pay with card or crypto (USDT/USDC)
            </p>
          </div>
        </div>
      </section>

      {/* Deal Example */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Sample Deal Alert</h2>
        <div className="max-w-xl mx-auto bg-slate-800 rounded-2xl p-6 border border-slate-700 font-mono text-sm">
          <p className="text-emerald-400 font-bold mb-2">⭐ GREAT DEAL - 18% Below Market</p>
          <p className="font-bold text-lg mb-3">2BR in Marina Gate Tower 1</p>
          <div className="space-y-2 text-slate-300">
            <p>📍 Dubai Marina</p>
            <p>🏠 1,450 sqft (135 m²) | 2 bed | 3 bath</p>

            <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
              <p className="text-slate-400 text-xs mb-1">💰 Price</p>
              <p className="text-white font-bold text-xl">AED 2,100,000</p>
              <p className="text-slate-400">$571,680 | €527,100</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="p-3 bg-slate-900/50 rounded-lg">
                <p className="text-slate-400 text-xs mb-1">📐 Price/unit</p>
                <p className="text-white">AED 1,448/sqft</p>
                <p className="text-slate-500 text-xs">AED 15,586/m²</p>
                <p className="text-slate-500 text-xs">$394/sqft | $4,244/m²</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-lg">
                <p className="text-slate-400 text-xs mb-1">📊 Market avg</p>
                <p className="text-white">AED 1,766/sqft</p>
                <p className="text-slate-500 text-xs">AED 19,010/m²</p>
                <p className="text-slate-500 text-xs">$481/sqft | $5,175/m²</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-emerald-900/30 rounded-lg border border-emerald-500/30">
              <p className="text-emerald-400 font-semibold">💵 Potential savings</p>
              <p className="text-emerald-300">AED 461,000 ($125,500 | €115,730)</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between items-center">
            <p className="text-blue-400">🔗 View Listing →</p>
            <p className="text-slate-500 text-xs">Score: 82/100</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="font-semibold mb-2">Where does the data come from?</h3>
            <p className="text-slate-400">
              Listings from PropertyFinder and Bayut. Market prices from official Dubai Land Department (DLD) transaction records via Dubai Pulse.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="font-semibold mb-2">How often are deals posted?</h3>
            <p className="text-slate-400">
              We scan listings every 30 minutes. Pro members get instant alerts within minutes of a deal appearing. Free channel gets 1 curated deal daily at 6 AM UAE time.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="font-semibold mb-2">Can I pay with crypto?</h3>
            <p className="text-slate-400">
              Yes! We accept USDT and USDC on the TRC20 network. Use /pro in the bot to get payment options.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="font-semibold mb-2">What areas do you cover?</h3>
            <p className="text-slate-400">
              Dubai Marina, Downtown Dubai, Business Bay, JVC, Palm Jumeirah, Dubai Hills Estate, and JLT. More areas coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400">
            © 2026 DealDrop Dubai. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="https://t.me/DealDropDubai" className="text-slate-400 hover:text-white transition">
              Channel
            </Link>
            <Link href="https://t.me/DealDropDubaiBot" className="text-slate-400 hover:text-white transition">
              Bot
            </Link>
            <Link href="mailto:support@dealdropdubai.com" className="text-slate-400 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
