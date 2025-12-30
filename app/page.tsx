"use client"

import { Button } from "@/components/ui/button"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { LogoCloud } from "@/components/ui/logo-cloud-3"
import { SecuritySection } from "@/components/ui/security-section"
import { TestimonialSection } from "@/components/ui/testimonial-section"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { cn } from "@/lib/utils"
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30" style={{ transform: 'translateZ(0)' }}>
      
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-3xl font-bold tracking-tighter text-white">DOSA</div>
        </div>

        {/* Navigation - Glass UI */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md" style={{ transform: 'translateZ(0)' }}>
          <a
            href="#platform"
            className="text-white/90 hover:text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Platform
          </a>
          <a
            href="#solutions"
            className="text-white/90 hover:text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Solutions
          </a>
          <a
            href="#security"
            className="text-white/90 hover:text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Security
          </a>
          <a
            href="#customers"
            className="text-white/90 hover:text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Customers
          </a>
        </nav>

        {/* Login & Liquid Button */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="h-10 w-32">
            <LiquidButton className="w-full h-full text-white font-medium">
              Get Demo
            </LiquidButton>
          </div>
        </div>
        {/* Mobile Menu Button Placeholder */}
        <div className="md:hidden text-white">
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section with Container Scroll Animation */}
      <div className="bg-black">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-[4rem] font-bold mt-1 leading-none text-white">
                Built for Modern Underwriters
              </h1>
              <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl mx-auto">
              AI-powered tools to help you streamline intake, verification, and analysis across your full underwriting workflow.
              </p>
              <button className="mt-8 mb-12 px-8 py-3 rounded-lg bg-white text-black font-medium text-sm md:text-base transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                Request a Demo
              </button>
            </>
          }
        >
          <video
            src="https://jayonlxijgrduoztkmgz.supabase.co/storage/v1/object/public/landing-page/test_demo.mp4"
            controls
            preload="metadata"
            className="mx-auto rounded-2xl object-cover h-full w-full"
            style={{
              objectPosition: 'left top',
            }}
          >
            Your browser does not support the video tag.
          </video>
        </ContainerScroll>
      </div>

      {/* Trusted By Section */}
      <section className="py-16 bg-black border-b border-gray-800/50 relative">
        <div
          aria-hidden="true"
          className={cn(
            "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
            "bg-[radial-gradient(ellipse_at_center,var(--color-foreground)/.05,transparent_50%)]",
            "blur-[30px]"
          )}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="relative mx-auto max-w-5xl">
            <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
              {/* <span className="text-gray-400">Trusted by experts.</span>
              <br />
              <span className="font-semibold text-white">Used by the leaders.</span> */}
              <span className="font-semibold text-white">Made by experts from</span>
            </h2>
            <div className="mx-auto my-5 h-px max-w-sm bg-gray-700/50 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
            <LogoCloud logos={logos} className="py-8" />
            <div className="mt-5 h-px bg-gray-700/50 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
          </div>
        </div>
      </section>

      {/* Vision/Philosophy Section */}
      <section className="bg-black text-white py-32 border-t border-white/10">
        <div className="container mx-auto px-6">
            <div className="max-w-5xl">
                <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl">
                    DOSA adapts to your workflow, unlocking team and machine collaboration at scale.
                </p>
                <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none">
                    DOSA meets professionals <br />
                    <span className="text-gray-500">where they are.</span>
                </h2>
            </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Security Section */}
      <SecuritySection />

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Built for high-stakes decisions.
            </h2>
            <p className="text-lg text-gray-400">
              Specialized tools designed for the unique demands of underwriting and deal execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {[
              {
                title: "Underwriting",
                description: "Risk assessment and pricing."
              },
              {
                title: "Private Equity",
                description: "Deal review and investment memos."
              },
              {
                title: "Risk Analysis",
                description: "Complex factor analysis."
              },
              {
                title: "Deal Execution",
                description: "Strategy and deadline management."
              }
            ].map((solution, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/5 bg-black hover:border-white/20 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">{solution.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{solution.description}</p>
                </div>
                <div className="mt-8">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-50" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to realize your full potential?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Discover how DOSA can put time back in your hands.
          </p>
          <button className="px-10 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-all cursor-pointer">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="text-xl font-bold mb-4">DOSA</div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Professional-grade AI for underwriters and private equity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Platform</h4>
              <ul className="space-y-2 text-xs text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Solutions</h4>
              <ul className="space-y-2 text-xs text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Underwriting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Private Equity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Risk Analysis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-xs text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-600">
            <p>© 2025 DOSA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const logos = [
  {
    src: "/hsbc.svg",
    alt: "HSBC",
  },
  {
    src: "/microsoft.svg",
    alt: "Microsoft",
  },
  {
    src: "/lloyds.svg",
    alt: "Lloyds Banking Group",
  },
  {
    src: "/santander.svg",
    alt: "Santander",
  },
  {
    src: "/meta.svg",
    alt: "Meta",
  },
  {
    src: "/aia.svg",
    alt: "AIA",
  },
  {
    src: "/georgia.svg",
    alt: "Georgia Institute of Technology",
  },
  {
    src: "/penn.svg",
    alt: "University of Pennsylvania",
  },
]
