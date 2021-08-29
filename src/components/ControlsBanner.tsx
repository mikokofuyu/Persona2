import React, { ReactElement } from 'react'
import { ArrowSquareDown, ArrowSquareLeft, ArrowSquareRight, ArrowSquareUp, Backspace, KeyReturn } from 'phosphor-react'

const ControlsBanner: React.FC = (): ReactElement => (
  <div className="flex w-full bg-is-redbrown h-14 items-center justify-between p-2">
    <h2 className="text-is-maroon text-5xl font-extrabold">Entry</h2>
    <div className="flex space-x-12">
      <div className="flex items-center space-x-2">
        <ArrowSquareLeft size={48} color="white" />
        <ArrowSquareUp size={48} color="white" />
        <ArrowSquareDown size={48} color="white" />
        <ArrowSquareRight size={48} color="white" />
        <span className="text-3xl font-bold text-is-maroon ">Position</span>
      </div>
      <div className="flex items-center space-x-2">
        <KeyReturn size={48} color="white" />
        <span className="text-3xl font-bold text-is-maroon ">Enter</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-8 w-24 border-2 border-white rounded-lg" />
        <span className="text-3xl font-bold text-is-maroon ">Space</span>
      </div>
      <div className="flex items-center space-x-2">
        <Backspace size={48} color="white" />
        <span className="text-3xl font-bold text-is-maroon ">Delete</span>
      </div>
    </div>
  </div>
)

export default ControlsBanner
