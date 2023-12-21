import './inputSearch.css'
import Icon from '../icon/Icon'

export default function InputSearch({
  searchKey,
  initialList,
  placeholder,
  searchValue,
  setSearchValue,
  setResults,
}) {
  const handleChange = event => {
    setSearchValue(event.target.value)

    if (event.target.value === '') {
      setResults(initialList)
    }
    if (event.target.value.length >= 2) {
      const results = filterList(initialList, searchKey, event.target.value)
      setResults(results)
    }
  }
  const filterList = (list, searchKey, searchValue) => {
    return list.filter(item => {
      return item[searchKey].toLowerCase().includes(searchValue.toLowerCase())
    })
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
