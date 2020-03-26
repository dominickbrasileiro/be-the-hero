import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImage from '../../assets/logo.svg'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()
  
  async function handleRegister(event) {
    event.preventDefault()

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('ongs', data)
      alert(`Seu ID de acesso: ${response.data.id}`)
      history.push('/')
    } catch (error) {
      alert('Erro no cadastro, tente novamente')
    }

  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be the Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

        <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Já sou cadastrado
        </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Nome da ONG" />
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="E-mail" />
          <input onChange={e => setWhatsapp(e.target.value)} value={whatsapp} type="tel" placeholder="WhatsApp"/>

          <div className="input-group">
            <input onChange={e => setCity(e.target.value)} value={city} type="text" placeholder="Cidade" />
            <input onChange={e => setUf(e.target.value)} value={uf} type="text" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Register