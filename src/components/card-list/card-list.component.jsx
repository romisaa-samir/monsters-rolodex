import React from 'react'
import Card from '../card/card'
import "./card-list.stule.css"
export default function CardList(props) {
  return (
    <div className='card-list'>
        {props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster}/>
          ))}
    </div>
  )
}
