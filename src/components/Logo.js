import { AspectRatio } from "@mui/joy"
import LittleLemon1 from "assets/Logo.svg"

const LogoAspectRatio = {
    objectFit : "contain",
    sx : {
        boxShadow : "lg",
        border : 1,
        borderRadius : "sm",
        px: 1,
        minWidth: "150px",
        maxHeight: "150px"
    }
}

export default function Logo(){
    return(
        <AspectRatio {...LogoAspectRatio} ><img src={LittleLemon1}/></AspectRatio>
    )
}