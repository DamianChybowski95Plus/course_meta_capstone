import {Sheet, Stack, Box } from "@mui/joy"
import HorizontalNav from "components/HorizontalNav"
import Logo from "components/Logo"

const HeaderSheet = {
    variant : "soft",
    sx : {
        overflow : "hidden"
    }
}

const HeaderStack = {
    component : "header",
    direction : "row",
    alignItems : "center",
    spacing : 1,
    sx : {
        padding: 1
    }
}

export default function HeaderSection(){
    return(
        <Sheet {...HeaderSheet}>            
            <Stack {...HeaderStack} >
                <Logo/>
                <HorizontalNav/>
            </Stack>
        </Sheet>
    )
}