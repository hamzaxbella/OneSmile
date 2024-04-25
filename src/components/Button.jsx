import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../App'

export const Button = ({primary , label , path , nav}) => {

  const [selectedLanguage , setSelectedLanguage] = useContext(Context)
  const font = selectedLanguage === 'FR ' ? 'font-Inter' : 'font-Cairo'
  let content = label[selectedLanguage]
  
  return (
    <Link to={path && path} ><button className={` ${primary ? 'bg-primary text-white-smoke' : 'bg-transparent border broder-3 border-black text-black  hover:bg-white-smoke'} py-2 px-6 font-light ${font} ${nav && '!bg-browney-cream !w-full'}`}  >{content}</button></Link>
  )
}
