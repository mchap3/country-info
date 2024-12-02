/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchResult from './components/SearchResult'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data.map(c => c.name.common))
      })
  }, [])

  return (
    <div>
      Find countries: {}
      <input 
        value={search} 
        onChange={e => setSearch(e.target.value)}
      />
      <SearchResult 
        search={search}
        setSearch={setSearch}
        countries={countries}
      />
    </div>
  )
}

export default App
