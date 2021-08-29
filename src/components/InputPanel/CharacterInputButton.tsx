import React, { ReactElement } from 'react'
import useSound from 'use-sound'
import MenuNav from '../../assets/audio/MenuNav.wav'
import MenuSelect from '../../assets/audio/MenuSelect.wav'
import MenuDelete from '../../assets/audio/DeleteChar.wav'
import useStore from '../../hooks/store'
import KeyboardNavItems from './KeyboardNavItesm'

interface CharacterInputButtonProps {
  label: string
  setIsRowActive: (isActive: boolean) => void
}

const CharacterInputButton: React.FC<CharacterInputButtonProps> = ({ label, setIsRowActive }): ReactElement => {
  const addCharTofullName = useStore(state => state.addCharTofullName)
  const removeCharFromFullName = useStore(state => state.removeCharFromFullName)
  const currentChar = useStore(state => state.currentChar)
  const setShowConfirmBanner = useStore(state => state.setShowConfirmBanner)

  const [playMenuNav] = useSound(MenuNav, { volume: 0.5 })
  const [playMenuSelect] = useSound(MenuSelect, { volume: 0.5 })
  const [playMenuDelete] = useSound(MenuDelete, { volume: 0.5 })

  const onButtonFocus = () => {
    setIsRowActive(true)
    playMenuNav()
  }

  const onButtonBlur = () => {
    if (document.activeElement !== document.getElementById(label)) {
      setIsRowActive(false)
    }
  }

  const onDeleteChar = () => {
    playMenuDelete()
    removeCharFromFullName()
  }

  const onKeyBoardNav = (e: any, focusedInput: string) => {
    switch (e.key) {
      case 'ArrowRight':
        document.getElementById(KeyboardNavItems[focusedInput].right)?.focus()
        break
      case 'ArrowLeft':
        document.getElementById(KeyboardNavItems[focusedInput].left)?.focus()
        break
      case 'ArrowDown':
        document.getElementById(KeyboardNavItems[focusedInput].down)?.focus()
        break
      case 'ArrowUp':
        document.getElementById(KeyboardNavItems[focusedInput].up)?.focus()
        break
      case 'Backspace':
        if (currentChar > 1) {
          onDeleteChar()
        }
        break
      case ' ':
        if (currentChar <= 16) {
          playMenuSelect()
          addCharTofullName('')
        }
        break
    }
  }

  const onEnterKey = (char: string) => {
    if (currentChar <= 16) {
      playMenuSelect()
      addCharTofullName(char)
    } else {
      setShowConfirmBanner(true)
      setTimeout(() => document.getElementById('yesBTN')?.focus(), 300)
    }
  }

  return (
    <button
      className="focus:bg-black focus:text-is-yellowgreen focus:animate-charHover outline-none p-0.5 my-0.5 w-10 h-10"
      onKeyDown={e => onKeyBoardNav(e, label)}
      onKeyPress={e => e.key === 'Enter' && onEnterKey(label)}
      id={label}
      onFocus={onButtonFocus}
      onBlur={onButtonBlur}
    >
      {label}
    </button>
  )
}

export default CharacterInputButton
