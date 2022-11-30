import React from "react"
import { Link } from "vtex.render-runtime"
import {Link as LinkProps} from "./BulletTypes"
import {useCssHandles} from "vtex.css-handles"
import "./styles.css"
type Props={
    src: string
    titleBullet: string
    link:LinkProps
}
const Bullet = ({src, titleBullet,link}:Props)=>{
    const CSS_HANDLES = [
    "bullet__item",
    "bullet__item--title",
    "bullet__item--image",
    "bullet__item--link"]
    console.log(src, titleBullet,link);
    const handles = useCssHandles(CSS_HANDLES)
    return <div className={handles.bullet__item}>
                <Link className={handles["bullet__item--link"]} to={link.url}>
                    <img className={handles["bullet__item--image"]} src={src} alt={titleBullet}/>
                    <p className={handles["bullet__item--title"]}>{titleBullet}</p>
                </Link>
            </div>
    
        
}
Bullet.schema={
    title:"Bullet",
    type:"objet",
    properties:{
        src:{
            title:"imagen de bullet",
            type:"string",
            widget:{
                "ui:widget":"image-uploader"
            }
        }
    }
}
export default Bullet