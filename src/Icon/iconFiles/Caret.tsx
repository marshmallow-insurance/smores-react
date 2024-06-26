import React from 'react'

const Caret = ({ className }: { className?: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19.66 8.248a1 1 0 00-1.412.095L12 15.482l-6.248-7.14a1 1 0 10-1.504 1.317l7 8a.995.995 0 001.504 0l7-8a1 1 0 00-.093-1.411z"
      fill="currentColor"
    />
  </svg>
)

export default Caret
