import { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    message: '',
  })

  const handleClearList = () => {
    setList([])
    showAlert(true, 'success', 'List cleared')
  }

  const handleRemoveItem = (id) => {
    setList(list.filter((item) => item.id !== id))
    showAlert(true, 'danger', 'item deleted')
  }

  const handleEditItem = (id) => {
    setIsEditing(true)
    const editItem = list.find((item) => item.id === id)
    setEditID(id)
    setName(editItem.title)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'Empty input! Please enter value')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setEditID(null)
      setName('')
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
      showAlert(true, 'success', 'added')
    }
  }

  const showAlert = (show = false, type = '', message = '') => {
    setAlert({ show, type, message })
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  return (
    <section className='section-center'>
      <form className='grocery-from' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list={list} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className='grocery-container'>
          <List
            list={list}
            removeItem={handleRemoveItem}
            editItem={handleEditItem}
          />
          <button className='clear-btn' onClick={() => handleClearList()}>
            clear
          </button>
        </div>
      )}
    </section>
  )
}

export default App
