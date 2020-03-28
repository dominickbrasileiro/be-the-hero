import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import NumberFormat from 'react-number-format'

import api from '../../services/api'
import './styles.css'

import logoImage from '../../assets/logo.svg'

function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ong_id')

  const history = useHistory()

  async function handleNewIncident(event) {
    event.preventDefault()

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be the Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um héroi para te ajudar.</p>

        <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Início
        </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="Título do caso" maxLength={55} required />
          <textarea onChange={e => setDescription(e.target.value)} value={description} placeholder="Descrição" maxLength={200} required />
          <NumberFormat onValueChange={({value}) => setValue(value)} value={value} prefix="R$ " suffix=",00" thousandSeparator="." decimalSeparator="," placeholder="Valor em Reais" maxLength={25} required />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default NewIncident