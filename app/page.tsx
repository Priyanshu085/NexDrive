import Image from 'next/image'
import { Hero } from '@/components'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'

export default function Home() {
  return (
    <main>
      <Hero />

      <div className='mt-12 padding-x paddinng-y max-width' id='discover'>
        <div className="home__container">
          <h1 className='text-4xl font-extrabold text-primary'>Car Catalogue</h1>
          <p>Explore your dream 🚗 cars</p>
        </div>

        <div className='home__filters'>
          <SearchBar/>

          <div className='home__filter-container'>
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

      </div>

    </main>
  )
}
