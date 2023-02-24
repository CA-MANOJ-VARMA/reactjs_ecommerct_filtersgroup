import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList} = props

  return (
    <div className="filters-group-container">
      <h1>Category</h1>
      <ul className="css-ul-category-container">
        {categoryOptions.map(eachItem => (
          <li key={eachItem.id}>
            <button type="button" className="css-category-button-itself">
              {eachItem.name}
            </button>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <ul className="css-ul-category-container">
        {ratingsList.map(eachItem => (
          <li key={eachItem.id}>
            <button type="button" className="css-category-button-itself">
              <img
                src={eachItem.imageUrl}
                alt={eachItem.ratingId}
                className="css-ratinglist-image-itself"
              />
              <p>& up</p>
            </button>
          </li>
        ))}
      </ul>
      {/* Replace this element with your code */}
    </div>
  )
}
export default FiltersGroup
