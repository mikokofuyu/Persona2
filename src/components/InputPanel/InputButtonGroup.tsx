import React, { ReactElement, useState } from 'react'
import CharacterInputButton from './CharacterInputButton'
import classNames from 'classnames'

interface InputButtonGroupProps {
  chars: string[]
}

const InputButtonGroup: React.FC<InputButtonGroupProps> = ({ chars }): ReactElement => {
  const [isRowActive, setIsRowActive] = useState(false)

  const rowClass = classNames(
    'flex px-2 border-2 border-black space-x-2 text-2xl justify-between',
    isRowActive ? 'text-black bg-is-yellowgreen' : '',
  )

  return (
    <div className={rowClass} style={{ width: '264px' }}>
      {chars.map(char => (
        <CharacterInputButton key={char} label={char} setIsRowActive={setIsRowActive} />
      ))}
    </div>
  )
}

export default InputButtonGroup
