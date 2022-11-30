import React from "react"
import {BulletsSchema} from "../BulletTypes"
import Bullet from "../Bullet"


export const getBulletsAsTSXList = (
    bullet: BulletsSchema
)=>{
    return (
            bullet.map((bullets:any, index)=>{
                return <Bullet
                    key={index}
                    src={bullets.image}
                    titleBullet={bullets.titleBullet}
                    link={
                        bullets.link ? bullets.link : {
                            url:"",
                            attributeNoFollow: false,
                            attributeTitle: "",
                            openNewTab: false,
                            newTab:false
                        }
                    }
                />
            })
        )
}
