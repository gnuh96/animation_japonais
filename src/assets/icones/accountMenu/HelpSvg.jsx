export default function HelpSvg({size, color}) {
  return (
    <svg
      width={size}
      height={size}
      color={color}
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M26.1837 15.0752C26.1837 21.2394 21.1867 26.2364 15.0225 26.2364C8.85836 26.2364 3.86133 21.2394 3.86133 15.0752C3.86133 8.91109 8.85836 3.91406 15.0225 3.91406C21.1867 3.91406 26.1837 8.91109 26.1837 15.0752Z'
        stroke={color}
        strokeWidth='2.48026'
      />
      <path
        d='M13.1624 10.9549C13.6169 10.44 14.2818 10.1152 15.0225 10.1152C16.3924 10.1152 17.5028 11.2257 17.5028 12.5955C17.5028 13.7534 16.7092 14.726 15.6363 14.9992C15.3044 15.0837 15.0225 15.3534 15.0225 15.6958V16.3159'
        stroke={color}
        strokeWidth='2.48026'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.0226 20.0352H15.0345'
        stroke={color}
        strokeWidth='2.48026'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
