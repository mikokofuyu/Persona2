import classNames from 'classnames'
import React, { ReactElement } from 'react'
import useStore from '../hooks/store'

const InputDisplay: React.FC = (): ReactElement => {
  const currentChar = useStore(state => state.currentChar)
  const fullNameChars = useStore(state => state.fullNameChars)
  return (
    <div className="flex px-8 justify-center pt-4 pb-2 space-x-2 bg-black h-14 mb-16 text-white">
      {[...Array(8)].map((_item, index) => {
        const inputCharClass = classNames(
          currentChar === index + 1 ? 'border-double border-b-4 border-is-yellowgreen animate-bounce' : ' border-b ',
          'p-2 flex items-center justify-center w-8 border-white text-2xl text-is-tomato',
        )
        return (
          <div key={index} className={inputCharClass}>
            <span>{fullNameChars[index]}</span>
          </div>
        )
      })}
      <div className="w-16 h-8" />
      {[...Array(8)].map((_item, index) => {
        const inputCharClass = classNames(
          currentChar === index + 9 ? 'border-double border-b-4 border-is-yellowgreen animate-bounce' : ' border-b ',
          'p-2 flex items-center justify-center w-8 border-white text-2xl text-is-tomato',
        )
        return (
          <div key={index + 8} className={inputCharClass}>
            <span>{fullNameChars[index + 8]}</span>
          </div>
        )
      })}
    </div>
  )
}

export default InputDisplay
