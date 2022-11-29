import React, { PropsWithChildren }from "react"
import {BulletsSchema} from "./BulletTypes"
import { useDevice } from "vtex.device-detector"

export interface BulletGroupProps{
    bullet: BulletsSchema
}
const BulletGroup =({bullet,children}: PropsWithChildren<BulletGroupProps>)=>{
    const {isMobile}=useDevice();
    
    console.log(bullet)
    if (false){
        children
    }
    return(
        isMobile ? 
        <div>Mobile</div> : 
        <div>Desktop</div>
    )
}
export default BulletGroup