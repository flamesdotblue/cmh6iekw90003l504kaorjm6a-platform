export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1a2b]/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} LuxEstate. All rights reserved.</p>
        <div className="text-xs text-white/55">Privacy • Terms • Careers</div>
      </div>
    </footer>
  )
}
