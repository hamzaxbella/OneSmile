import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../App'

export const Button = ({ className,  primary , label , path , nav , forBanner}) => {

  const [selectedLanguage , setSelectedLanguage] = useContext(Context)
  const font = selectedLanguage === 'FR ' ? 'font-Inter' : 'font-Cairo'
  let content = label[selectedLanguage]
  
  return (
    <Link to={path && path} ><button className={` transition-colors duration-300 ${primary ? 'bg-primary hover:bg-browney-cream text-white-smoke' : 'bg-transparent border broder-3 border-black text-black  hover:bg-white-smoke'} ${forBanner && 'border-white-smoke text-white-smoke hover:text-black'} py-2 px-6 font-light ${font} ${nav && '!bg-browney-cream !w-full'} ${className}`}  >{content}</button></Link>
  )
}
