import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const OpaqueContainer = ({ children, className }: Props) => {
  return (
    <div className={`bg-black bg-opacity-50 p-4 rounded-lg ${className}`}>
      {children}
    </div>
  )
}

export default OpaqueContainer
