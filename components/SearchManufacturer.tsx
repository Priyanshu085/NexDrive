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
      items.toLowerCase()
      .replace(/\s+/g, '')
      .includes(query.toLowerCase().replace(/\s+/g, "")
    )))


  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button>
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

          <Combobox.Options>
            {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) => `px-2 relative seacrch-manufacturer__option ${active ? 'bg-primary text-white' : 'text-gray-900'}  `} 
                  value={item}
                >
                  {item}
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