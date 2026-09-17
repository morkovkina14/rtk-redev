import React from 'react'
import StatusBadge from './StatusBadge'
import Card from './Card'

function UserCard({ name, role, experience, location, isAvailable }) {
  return (
    <>
    <Card>
      <p>
        {name}-{role}, опыт работы : {experience} года, {location.city}
      </p>
    </Card>
     <StatusBadge isAvailable={isAvailable} />
     </>
  )
}

export default UserCard
