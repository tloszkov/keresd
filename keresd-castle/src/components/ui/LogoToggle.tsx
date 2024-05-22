"use client"

import * as React from "react"
import { useTheme } from "next-themes"



export function LogoToggle() {

    if (useTheme().theme==='light'){
        return (
            <div>
                {useTheme().theme}
            </div>
        )
    }else{
        return (
            <div>{useTheme().theme}</div>
        )
    }

}
