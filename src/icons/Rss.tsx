import * as React from 'react'

function SvgComponent(props: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 11-2 0 8 8 0 00-8-8 1 1 0 010-2m0 4a6 6 0 016 6 1 1 0 11-2 0 4 4 0 00-4-4 1 1 0 010-2m.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3" />
    </svg>
  )
}

export default SvgComponent
