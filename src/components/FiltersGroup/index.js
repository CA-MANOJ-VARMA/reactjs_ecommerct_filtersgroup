import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    categoryFilteredFunction,
    ratingFilteredFunction,
    clearFiltersFunction,
  } = props

  const categoryFunction = categoryId => {
    console.log(categoryId)
    categoryFilteredFunction(categoryId)
  }

  const ratingFunction = ratingId => {
    ratingFilteredFunction(ratingId)
  }

  const clearFilters = () => {
    clearFiltersFunction()
  }

  return (
    <div className="filters-group-container">
      <h1>Category</h1>
      <ul className="css-ul-category-container">
        {categoryOptions.map(eachItem => (
          <li key={eachItem.categoryId}>
            <button
              type="button"
              className="css-category-button-itself"
              onClick={() => categoryFunction(eachItem.categoryId)}
            >
              <p>{eachItem.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <ul className="css-ul-category-container">
        {ratingsList.map(eachItem => (
          <li key={eachItem.ratingId}>
            <button
              type="button"
              className="css-category-button-itself"
              onClick={() => ratingFunction(eachItem.ratingId)}
            >
              <img
                src={eachItem.imageUrl}
                alt={`rating ${eachItem.ratingId}`}
                className="css-ratinglist-image-itself"
              />
              <p>& up</p>
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="css-clearfilters-button-itself"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
      {/* Replace this element with your code */}
    </div>
  )
}
export default FiltersGroup
