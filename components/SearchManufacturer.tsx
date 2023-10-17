"use client"

import { SearchManuFacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { manufacturers } from '@/constants'

const SearchManufacturer = ({manufacturer, setManuFacturer}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = 
    query === ""
     ? manufacturers
     : manufacturers.filter((items) => (
      items
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, "")
    )))


  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image 
              src="/car-logo.svg"
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input 
            className="search-manufacturer__input"
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition 
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >

            <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
            {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) => `px-2 relative seacrch-manufacturer__option 
                  ${active ? 'bg-primary text-white' : 'text-gray-900'}  `} 
                  value={item}
                >
                  {({ selected, active}) => (
                    <>
                    <span className={`blcok truncate ${selected} ? 'font-medium' : 'font-normal'`}>
                      {item}
                    </span>
                    {selected ? (
                      <span className={`absolute inset-y-0 left-0 items-center flex pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                      </span>
                    ): null}
                    </>
                  )}
                </Combobox.Option>
              )
            )}
          </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer