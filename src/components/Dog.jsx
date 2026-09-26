import React from 'react'
import { useState, useEffect } from 'react'
import InputDog from './InputDog'
import ButtonDog from './ButtonDog'
import SelectDog from './SelectDog'

const Dod = () => {
  const [state, setState] = useState(3)
  const [update, setUpdate] = useState(0)
  const [dogs, setDogs] = useState([])
  const [loading, setLoading] = useState(false)
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('all')

  const funcAll = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`)
      const data = await response.json()
      if (data.status === 'success') {
        setBreeds(Object.keys(data.message))
      }
    } catch (error) {
      console.log('Ошибка:', error)
    }
  }

  const func = async (count) => {
    try {
      setLoading(true)
      const url =
        selectedBreed === 'all'
          ? `https://dog.ceo/api/breeds/image/random/${count}`
          : `https://dog.ceo/api/breed/${selectedBreed}/images/random/${count}`

      const response = await fetch(url)
      const data = await response.json()
      if (data.status === 'success') {
        const dogId = data.message.map((item) => ({
          id: crypto.randomUUID(),
          url: item,
        }))
        setDogs(dogId)
      }
    } catch (error) {
      console.log('Ошибка:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    funcAll()
    func(3)
  }, [])

  useEffect(() => {
    if (update === 0) return
    if (!state || state < 1) {
      func(3)
      setState(3)
    } else {
      func(state)
    }
  }, [update])

  useEffect(() => {
    if (dogs.length === 0) return
    func(state || 3)
  }, [selectedBreed])

  const handleChange = (e) => {
    const val = e.target.value
    setState(val === '' ? '' : Number(val))
  }

  const handleClick = () => {
    setUpdate((prev) => prev + 1)
  }

  const handleChangeS = (breedName) => {
    setSelectedBreed(breedName)
  }
  return (
    <>
      <h1>Галерея собак</h1>
      <p>Картинки обновлена {update} раз(а)</p>
      <SelectDog breeds={breeds} onChangeS={handleChangeS} />
      <InputDog count={state} handleChange={handleChange} />
      <ButtonDog handleClick={handleClick} />
      {loading ? (
        <p>Загрузка</p>
      ) : (
        <div>
          {dogs.map((item) => (
            <img key={item.id} src={item.url} alt="Собака" />
          ))}
        </div>
      )}
    </>
  )
}

export default Dod
