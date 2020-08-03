import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/54218793?s=400&u=3a39f3c2b748b1f442426c4231874c4690866b5d&v=4" alt="Alexsandro G Bezerra"/>
        <div>
          <strong>Alexsandro G Bezerra</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium, modi vero commodi ducimus nisi sequi quasi temporibus voluptatum a repellat adipisci nihil. Maxime molestias officia adipisci laboriosam reprehenderit magni!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entre em Contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
