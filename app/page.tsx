import { CarCard, CustomFilter, Hero } from '@/components'
import SearchBar from '@/components/SearchBar'
import { fetchCars } from '@/utils'

export default async function Home({ searchParams }:any) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 12,
    model: searchParams.model || ''
  }) ;

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main dark-theme='night' className='text-white overflow-hidden'>
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

        {!isDataEmpty ? (
          <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>

        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no results found</h2>
          <p>{allCars?.message}</p>
        </div>
        
        )}

      </div>
    </main>
  )
}
