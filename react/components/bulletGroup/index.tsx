import React, { PropsWithChildren }from "react"
import {BulletsSchema} from "./BulletTypes"
import {getBulletsAsTSXList} from "./modules/bulletsAsList"
import {useListContext, ListContextProvider} from "vtex.list-context"
import { useDevice } from "vtex.device-detector"

export interface BulletGroupProps{
    bullet: BulletsSchema
}
const BulletGroup =({bullet,children}: PropsWithChildren<BulletGroupProps>)=>{
    const {isMobile}=useDevice();
    const { list }= useListContext() || []
    
    console.log(bullet)

    const bulletsContent = getBulletsAsTSXList(bullet)
    const newListContextValue= list.concat(bulletsContent)
    if (false){
        console.log(children, list);
        
    }
    return(
        <ListContextProvider list={newListContextValue}>
           { isMobile ? 
            children : 
            <div>{bulletsContent}</div>
            }
        </ListContextProvider>
    )
}
export default BulletGroup