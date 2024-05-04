import { siteMapContent } from "../constants"
import { Link } from "react-router-dom"

export const SitePlan = () => {
  
  return (
    <section className="section-spacing">
      <section className="padding-y max-w-[500px] mx-auto">
        <ul>
          {siteMapContent.map((link) => (
            <li className="py-6  text-browney-cream text-xl list-disc hover:underline"><Link  to={link.path}>{link.link}</Link></li>
          ))}
        </ul>
      </section>
    </section>
  )
}
