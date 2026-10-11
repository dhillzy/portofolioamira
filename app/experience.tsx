"use client"
import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"

interface ExperienceItem {
  id: number
  company: string
  role: string
  date: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Lembaga Edukasi Karir",
    role: "Tester / Pemandu Tes Psikologi (Freelance/Part-time)",
    date: "Januari 2025 - Juli 2026",
    description: "Mengkondisikan, memandu, dan menginstruksikan pelaksanaan psikotes secara profesional, memastikan jalannya tes tertib dan sesuai prosedur.",
    skills: ["Psychological Testing", "Coordination", "Communication"],
  },
  {
    id: 2,
    company: "SMK Negeri 48 Jakarta",
    role: "Konselor Sekolah",
    date: "Agustus 2025 - Desember 2025",
    description: "Menyusun dan menganalisis need assessment (asesmen kebutuhan) siswa untuk memahami karakteristik serta kebutuhan pengembangan peserta didik.",
    skills: ["Counseling", "Need Assessment", "Data Analysis"],
  },
  {
    id: 3,
    company: "SMA Negeri 44 Jakarta",
    role: "Guru Magang Bimbingan dan Konseling (PPL)",
    date: "Juli 2024 - Desember 2024",
    description: "Melakukan bimbingan dan konseling individu untuk mengatasi hambatan mental peserta didik dengan pendekatan komunikasi dua arah yang empatik.",
    skills: ["Individual Counseling", "Active Listening", "Mental Health Support"],
  },
  {
    id: 4,
    company: "Bimbel Akademi Bumi Cendekia (ABC) Champ",
    role: "Tutor Akademik (SD & SMP)",
    date: "Juli 2024 - Desember 2024",
    description: "Mengajar dan membimbing siswa tingkat SD, mengidentifikasi kesulitan belajar serta stres akademik anak, serta mengomunikasikan perkembangan akademis dan emosional kepada orang tua.",
    skills: ["Teaching", "Academic Tutoring", "Parent Communication"],
  },
  {
    id: 5,
    company: "Mahasina Mart",
    role: "Kasir",
    date: "Juni 2020 - November 2021",
    description: "Melayani 50+ pelanggan per hari & memastikan kebutuhan pelanggan terpenuhi, melayani transaksi pembeli, melakukan pengecekan dan penataan stok barang, mengelola pembukuan transaksi harian, serta menjaga kebersihan area toko.",
    skills: ["Retail Operations", "Customer Service", "Cashier & Transactions", "Inventory Management"],
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll position of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  // Add a slight spring physics to the line growth for smoothness
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10" ref={containerRef}>
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Background</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Experience & Activity</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative group/list flex flex-col">
        {experiences.map((exp, index) => {
          return (
            <motion.div key={exp.id} initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: index * 0.1 }} className="group/item relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 -mx-6 md:-mx-8 rounded-2xl transition-all duration-500 hover:!opacity-100 hover:!blur-none group-hover/list:opacity-40 group-hover/list:blur-[2px] hover:bg-text-secondary/5 hover:shadow-lg border border-transparent hover:border-text-secondary/10">
              
              {/* Left Column: Date */}
              <div className="md:col-span-1 pt-1 md:pt-2">
                <span className="text-xs font-bold tracking-widest text-text-secondary uppercase">{exp.date}</span>
              </div>

              {/* Right Column: Details */}
              <div className="md:col-span-3 flex flex-col">
                <h4 className="text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover/item:text-text-primary transition-colors">{exp.role}</h4>
                <h5 className="text-sm font-bold text-text-secondary tracking-wide uppercase mb-6">{exp.company}</h5>

                <p className="text-base text-text-secondary font-medium leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs font-bold bg-background md:bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider group-hover/item:bg-background transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}