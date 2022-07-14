import React from 'react'

const List = ({ list, removeItem, editItem }) => {
  return (
    <div>
      {list.map((item) => {
        const { id, title } = item
        return (
          <article key={id} className='grocery-item'>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                edit
              </button>
              <button
                type='button'
                className='remove-btn'
                onClick={() => {
                  removeItem(id)
                }}
              >
                delete
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
