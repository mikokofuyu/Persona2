import React, { ReactElement } from 'react'
import useStore from '../hooks/store'

interface ConfirmInputBannerProps {
  show: boolean
}

const ConfirmInputBanner: React.FC<ConfirmInputBannerProps> = ({ show }): ReactElement => {
  const fullName = useStore(state => state.fullName)
  const setShowConfirmBanner = useStore(state => state.setShowConfirmBanner)

  const onActionButtonKeyPress = (e: any, button: 'yes' | 'no') => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        document.getElementById(button === 'yes' ? 'noBTN' : 'yesBTN')?.focus()
        break
    }
  }

  const onPressNo = () => {
    document.getElementById('A')?.focus()
    setShowConfirmBanner(false)
  }

  if (show) {
    return (
      <div className="fixed bottom-0 right-0 w-full flex flex-col items-end text-2xl">
        <div className="w-1/5">
          <button
            id="yesBTN"
            className="w-full flex justify-start outline-none border-2 px-4 py-0.5 font-extrabold bg-is-maroon-opacity-85 border-black text-white focus:border-is-yellowgreen focus:animate-charHover focus:text-is-yellowgreen"
            onKeyDown={e => onActionButtonKeyPress(e, 'yes')}
            onKeyPress={e => (e.key === 'Enter' ? console.log('yay') : undefined)}
          >
            Yes
          </button>
          <button
            id="noBTN"
            className="w-full flex justify-start outline-none border-2 px-4 py-0.5 font-extrabold bg-is-maroon-opacity-85 border-black text-white focus:border-is-yellowgreen focus:animate-charHover focus:text-is-yellowgreen"
            onKeyDown={e => onActionButtonKeyPress(e, 'no')}
            onKeyPress={e => (e.key === 'Enter' ? onPressNo() : undefined)}
          >
            No
          </button>
        </div>
        <div className="bg-is-transparent-black text-white border-t-4 border-is-tomato flex flex-col justify-center px-16 py-4 w-full">
          <span>
            {'>'} Full name: <span className="text-is-yellowgreen">{fullName}</span>
          </span>
          <span>Is this correct?</span>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default ConfirmInputBanner
