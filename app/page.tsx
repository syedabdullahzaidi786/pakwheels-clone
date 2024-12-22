import { HeroSection } from '../components/ui/hero-section'
import { SellSection } from '../components/ui/sell-section'
import { BrowseSection } from '../components/ui/browse-section'
import { FeaturedListings } from '../components/ui/featured-listings'
import { PopularBrands } from '../components/ui/popular-brands'
import { AutoParts } from '../components/ui/auto-parts'
import { PopularBikes } from '../components/ui/popular-bikes'
import { NewsSection } from '../components/ui/news-section'
import { AppDownload } from '../components/ui/app-download'
import { Footer } from '../components/ui/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <SellSection />
        <BrowseSection />
        <FeaturedListings />
        <PopularBrands />
        <AutoParts />
        <PopularBikes />
        <NewsSection />
        <AppDownload />
      </main>
      <Footer />
    </div>
  )
}

