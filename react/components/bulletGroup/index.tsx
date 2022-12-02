import React, { PropsWithChildren }from "react"
import {BulletsSchema} from "./BulletTypes"
import {getBulletsAsTSXList} from "./modules/bulletsAsList"
import {useListContext, ListContextProvider} from "vtex.list-context"
import {useCssHandles} from "vtex.css-handles"
import { useDevice } from "vtex.device-detector"

export interface BulletGroupProps{
    bullet: BulletsSchema
}
const BulletGroup =({bullet,children}: PropsWithChildren<BulletGroupProps>)=>{
    const {isMobile}=useDevice();
    const { list }= useListContext() || []
    

    const bulletsContent = getBulletsAsTSXList(bullet)
    const newListContextValue= list.concat(bulletsContent)
    
    const CSS_HANDLES =["bullet__container"]
    const handles = useCssHandles(CSS_HANDLES)

    return(
        <ListContextProvider list={newListContextValue}>
           { isMobile ? 
            <div className={handles.bullet__container}>{bulletsContent}</div>
            : 
            children
            }
        </ListContextProvider>
    )
}
export default BulletGroup