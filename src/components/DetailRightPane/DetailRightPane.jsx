import React, {useState} from 'react'
import s from './style.module.css'

export function DetailRightPane({state, onItemClick}) {
  //console.log(state)
  return (
    <div className={s.detailRightPane}>
      <div className={s.buttonGroup}>
        <button
          className={state === 'STUDY' ? s.selected : s.notSelected}
          onClick={() => onItemClick('STUDY')}>
          STUDY
        </button>
        <br />
        <button
          className={state === 'GENGA' ? s.selected : s.notSelected}
          onClick={() => onItemClick('GENGA')}>
          GENGA
        </button>
        <br />
        <button
          className={state === 'FINAL' ? s.selected : s.notSelected}
          onClick={() => onItemClick('FINAL')}>
          FINAL
        </button>
      </div>
    </div>
  )
}
