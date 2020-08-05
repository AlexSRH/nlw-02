import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'

import api from '../../services/api'

import './styles.css'
import TeacherItem, { ITeacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

function TeacherListPage () {
  const [ subject, setSubject ] = useState('')
  const [ week_day, setWeekDay ] = useState('')
  const [ time, setTime ] = useState('')

  const [ teachers, setTeachers ] = useState([])

  async function searchTeachers(event: FormEvent) {
    event.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os Proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Física', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' }
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-Feira' },
              { value: '2', label: 'Terça-Feira' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '6', label: 'Sábado' }
            ]}
          />
          <Input
            type="time"
            label="time"
            name="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {
          teachers.map((teacher: ITeacher) =>
            <TeacherItem key={teacher.id} teacher={teacher} />
          )
        }
      </main>
    </div>
  )
}

export default TeacherListPage
