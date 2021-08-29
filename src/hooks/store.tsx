import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { insertItemAtIndex } from '../utils'

interface StoreProps {
  fullNameChars: string[]
  fullName: string
  currentChar: number
  compileFullName: () => void
  addCharTofullName: (char: string) => void
  removeCharFromFullName: () => void

  showConfirmBanner: boolean
  setShowConfirmBanner: (showConfirmBanner: boolean) => void
}

const useStore = create<StoreProps>(
  devtools(set => ({
    fullNameChars: [],
    fullName: '',
    currentChar: 1,
    compileFullName: () => set(state => ({ fullName: insertItemAtIndex(state.fullNameChars, 8, ' ').join('') })),
    addCharTofullName: (char: string) =>
      set(state => ({ fullNameChars: [...state.fullNameChars, char], currentChar: state.currentChar + 1 })),
    removeCharFromFullName: () =>
      set(state => ({ fullNameChars: state.fullNameChars.slice(0, -1), currentChar: state.currentChar - 1 })),
    showConfirmBanner: false,
    setShowConfirmBanner: (showConfirmBanner: boolean) => set(state => ({ showConfirmBanner })),
  })),
)

export default useStore
