import React from 'react';

function StatusBadge({ isAvailable }) {
  return (
    <span>
      {isAvailable ? 'Доступен для проекта' : 'Сейчас занят'}
    </span>
  );
}

export default StatusBadge;
