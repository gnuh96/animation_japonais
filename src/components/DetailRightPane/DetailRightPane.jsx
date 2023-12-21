import React, {useState} from 'react'
import s from './style.module.css'

export function DetailRightPane({}) {
  const [selectedState, setSelectedState] = useState('STUDY')

  const handleSelectState = selectedState => {
    setSelectedState(selectedState)
  }

  return (
    <div className={s.detailRightPane}>
      <div className={s.buttonGroup}>
        <button
          className={selectedState === 'STUDY' ? s.selected : s.notSelected}
          onClick={() => handleSelectState('STUDY')}>
          STUDY
        </button>
        <br />
        <button
          className={selectedState === 'GENGA' ? s.selected : s.notSelected}
          onClick={() => handleSelectState('GENGA')}>
          GENGA
        </button>
        <br />
        <button
          className={selectedState === 'FINAL' ? s.selected : s.notSelected}
          onClick={() => handleSelectState('FINAL')}>
          FINAL
        </button>
      </div>
    </div>
  )
}
