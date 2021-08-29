import React, { useEffect } from 'react'
import useSound from 'use-sound'
import TitleTheme from '../assets/audio/TitleTheme.mp3'
import InputButtonGroup from '../components/InputPanel/InputButtonGroup'
import useStore from '../hooks/store'
import InputDisplay from '../components/InputDisplay'
import ControlsBanner from '../components/ControlsBanner'
import ConfirmInputBanner from '../components/ConfirmInputBanner'

const TitleScreen = () => {
  const [play, { stop, pause }] = useSound(TitleTheme, { volume: 0.45 })
  useEffect(() => {
    document.getElementById('A')?.focus()
  }, [])

  const compileFullName = useStore(state => state.compileFullName)
  const currentChar = useStore(state => state.currentChar)
  const showConfirmBanner = useStore(state => state.showConfirmBanner)
  const setShowConfirmBanner = useStore(state => state.setShowConfirmBanner)

  useEffect(() => {
    if (currentChar === 17) {
      compileFullName()
      setShowConfirmBanner(true)
      setTimeout(() => document.getElementById('yesBTN')?.focus(), 300)
    }
  }, [currentChar])

  document.body.addEventListener('mousedown', event => {
    event.preventDefault()
    event.stopPropagation()
  })

  return (
    <div className="overflow-hidden">
      <ControlsBanner />
      <div className="flex flex-col overflow-hidden bg-save-bg bg-cover h-screen-excluding-header w-screen justify-center items-center">
        <ConfirmInputBanner show={currentChar === 17 && showConfirmBanner} />
        <div className="bg-black border-t-4 border-b-4 border-is-maroon text-is-tomato font-extrabold text-3xl flex w-1/5 items-center justify-center py-2 mb-16">
          <span>{currentChar <= 8 ? 'First name:' : 'Last name:'}</span>
        </div>
        <InputDisplay />

        <div className="flex flex-col bg-is-maroon-opacity-85 border-8 border-black">
          <div className="flex text-is-tomato font-extrabold">
            <InputButtonGroup chars={['A', 'B', 'C', 'D', 'E']} />
            <InputButtonGroup chars={['F', 'G', 'H', 'I', 'J']} />
            <InputButtonGroup chars={['K', 'L', 'M', 'N', 'O']} />
            <InputButtonGroup chars={['P', 'Q', 'R', 'S', 'T']} />
          </div>
          <div className="flex text-is-tomato font-extrabold">
            <InputButtonGroup chars={['U', 'V', 'W', 'X', 'Y']} />
            <InputButtonGroup chars={['Z']} />
            <InputButtonGroup chars={[]} />
            <InputButtonGroup chars={[]} />
          </div>
          <div className="flex text-is-tomato font-extrabold">
            <InputButtonGroup chars={['a', 'b', 'c', 'd', 'e']} />
            <InputButtonGroup chars={['f', 'g', 'h', 'i', 'j']} />
            <InputButtonGroup chars={['k', 'l', 'm', 'n', 'o']} />
            <InputButtonGroup chars={['p', 'q', 'r', 's', 't']} />
          </div>
          <div className="flex text-is-tomato font-extrabold">
            <InputButtonGroup chars={['u', 'v', 'w', 'x', 'y']} />
            <InputButtonGroup chars={['z']} />
            <InputButtonGroup chars={[]} />
            <InputButtonGroup chars={[]} />
          </div>
          <div className="flex text-is-tomato font-extrabold">
            <InputButtonGroup chars={['0', '1', '2', '3', '4']} />
            <InputButtonGroup chars={['5', '6', '7', '8', '9']} />
            <InputButtonGroup chars={[]} />
            <InputButtonGroup chars={[]} />
          </div>
          <div className="flex text-is-tomato font-extrabold">
            <InputButtonGroup chars={['_', '~', '%', '&', '*']} />
            <InputButtonGroup chars={['+', '-', '×', '÷', '=']} />
            <InputButtonGroup chars={['•', ';', ':', '?', '!']} />
            <InputButtonGroup chars={[]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleScreen
