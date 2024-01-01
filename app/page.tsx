import { Automate } from './_components/automate'
import { Control } from './_components/control'
import { Footer } from './_components/footer'
import { Header } from './_components/header'
import { Hero } from './_components/hero'
import { Journey } from './_components/journey'
import { OurPartners } from './_components/our-partners'
import { Review } from './_components/review'
import { Robust } from './_components/robust'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start">
      <Header />
      <Hero />
      <OurPartners />
      <Automate />
      <Journey />
      <Robust />
      <Control />
      <Review />
      <Footer />
    </main>
  )
}
