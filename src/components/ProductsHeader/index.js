import {BsFilterRight, BsSearch} from 'react-icons/bs'

import './index.css'

const ProductsHeader = props => {
  const onChangeSortby = event => {
    const {changeSortby} = props
    changeSortby(event.target.value)
  }

  const {sortbyOptions, activeOptionId} = props

  const onChangeFunction = event => {
    const {searchValueFunction} = props
    searchValueFunction(event)
  }

  return (
    <>
      <div className="products-header">
        <div className="css-input-container">
          <input
            type="search"
            className="css-input-itself"
            placeholder="Search"
            onKeyDown={onChangeFunction}
          />
          <BsSearch />
        </div>
        <h1 className="products-list-heading">All Products</h1>
        <div className="sort-by-container">
          <BsFilterRight className="sort-by-icon" />
          <p className="sort-by">Sort by</p>
          <select
            className="sort-by-select"
            value={activeOptionId}
            onChange={onChangeSortby}
          >
            {sortbyOptions.map(eachOption => (
              <option
                key={eachOption.optionId}
                value={eachOption.optionId}
                className="select-option"
              >
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default ProductsHeader
