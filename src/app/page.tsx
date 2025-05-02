import MainLayout from '@/components/layout/MainLayout'
import HeroSection from '@/components/home/HeroSection'
import SelectedWorks from '@/components/home/SelectedWorks'
import AboutMe from '@/components/home/AboutMe'
import FocusSection from '@/components/home/FocusSection'
import AwardsSection from '@/components/home/AwardsSection'
import BlogSection from '@/components/home/BlogSection'
import ClientsSection from '@/components/home/ClientsSection'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <SelectedWorks />
      <AboutMe />
      <FocusSection />
      <AwardsSection />
      <BlogSection />
      <ClientsSection />
    </MainLayout>
  )
}
