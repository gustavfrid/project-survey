import React from 'react'
import DownArrow from 'assets/icons/down-arrow.svg'
import UpArrow from 'assets/icons/up-arrow.svg'
import EditIcon from 'assets/icons/edit.png'
import 'components/button.css'

export const Button = ({ disabled, onClick, text, type, customStyle }) => {
  const handleKeyDown = e => {
    if (type === 'down' && (e.key === 'Enter' || e.keyCode === '39')) {
      onClick()
    }
  }
  return (
    <button className={customStyle ? customStyle : 'button'} disabled={disabled} onClick={onClick}>
      {type === 'down' && (
        <img
          className={customStyle ? customStyle + '-icon' : 'button-icon'}
          src={DownArrow}
          alt='down-arrow'
          onKeyDown={handleKeyDown}
        />
      )}
      {type === 'up' && (
        <img
          className={customStyle ? customStyle + '-icon' : 'button-icon'}
          src={UpArrow}
          alt='up-arrow'
        />
      )}
      {type === 'edit' && (
        <img
          className={customStyle ? customStyle + '-icon' : 'button-icon'}
          src={EditIcon}
          alt='edit icon'
        />
      )}

      {text}
    </button>
  )
}
