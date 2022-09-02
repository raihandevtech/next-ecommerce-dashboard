import Link from 'next/link'
import React from 'react'

interface props{
    txt: string;
    url: string;
    color?: "primary";
}


function Button({txt, url, color }: props ) {


  return (
    <Link href={url} >
        <a className={`_button ${color && "_primary"}`}>
            <span className="_txt">
               {txt}
            </span>
        </a>
    </Link>
  )
}

export default Button