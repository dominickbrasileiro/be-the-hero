import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImage from '../../assets/logo.svg'
import  heroesImage from '../../assets/heroes.png'

function Logon() {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin(event) {
    event.preventDefault()
    
    try {
      const response = await api.post('/sessions', { id })

      localStorage.setItem('ong_id', id)
      localStorage.setItem('ong_name', response.data.name)

      history.push('/profile')
    } catch (error) {
      alert('Falha no login, tente novamente')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Be the Hero"/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input value={id} onChange={e => setId(e.target.value)} type="text" placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes" />
    </div>
  )
}

export default Logon