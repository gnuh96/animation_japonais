import './inputSearch.css'
import Icon from '../icon/Icon'

export default function InputSearch({
  placeholder,
  searchValue,
  setSearchValue,
  setResults,
}) {
  const handleChange = event => {
    setSearchValue(event.target.value)

    if (event.target.value === '') {
      setResults([])
    }
  }

  return (
    <div className='inputSearchContainer'>
      <div className='inputSearchWrapper'>
        <input
          type='text'
          value={searchValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <Icon type='search' size='2rem' />
      </div>
    </div>
  )
}
