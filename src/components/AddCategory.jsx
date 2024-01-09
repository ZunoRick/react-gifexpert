import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onChangetext = ({ target }) =>{
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const value = inputValue.trim()
    if (value.length <= 1) return
    // setCategories( categories => [ ...categories, inputValue ] )
    onAddCategory(value)
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onChangetext }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}