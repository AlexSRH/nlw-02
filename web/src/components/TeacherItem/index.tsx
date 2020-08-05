import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export interface ITeacher {
  id: number
  subject: string
  cost: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
}

interface TeacherItemProps {
  teacher: ITeacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function handleCreateConnection () {
    api.post('connections', {
      user_id: teacher.id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          href={`https://wa.me/${teacher.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCreateConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entre em Contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
