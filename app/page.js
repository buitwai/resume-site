import Resume from './components/Resume'
import { FloatingElements } from './components/BackgroundSVGs'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingElements className="fixed inset-0" />
      <div className="relative z-10">
        <Resume />
      </div>
    </main>
  )
}