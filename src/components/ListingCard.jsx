import { motion } from 'framer-motion'

export default function ListingCard({ item, onQuickView }) {
  return (
    <article className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2b] via-transparent to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-semibold drop-shadow">{item.title}</h3>
        <div className="text-[#D4AF37] font-semibold">{item.price}</div>
        <div className="text-white/80 text-sm">{item.location} • {item.beds} bd • {item.baths} ba • {item.size}</div>
      </div>
      <div className="p-4 border-t border-white/10 flex items-center justify-between bg-white/5">
        <motion.button whileTap={{ scale: 0.98 }} onClick={() => onQuickView(item)} className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15">
          Quick View
        </motion.button>
        <span className="text-xs text-white/60">ID #{item.id.toString().padStart(4, '0')}</span>
      </div>
    </article>
  )
}
