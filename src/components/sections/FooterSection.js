import { Sheet, Box, Divider, Stack, AspectRatio, Typography, Link } from "@mui/joy"
import FooterImg from "assets/restauranfood.jpg"
import { Contacts, NavigationLinks, SocialMedia } from "Data"
import { Link as RouterLink } from "react-router-dom"

const FooterSheet = {
    variant : "soft",
    component : "footer",
    sx : {
        height : "30vh",
        width : "100%",
        display : "flex",
        alignItems : "center"
    }
}

const FooterContainer = {
    direction : "row",
    sx : {
        justifyContent : "space-evenly",
        height : "95%",
        width : "100%",
    }
}

const FooterItem = {
    variant : "outlined",
    sx : {
        width : "20%",
        height : "100%",
    }
}

const TextBox = {
    sx : {
        width : "80%",
        margin: "10%"
    }
}

const FooterStack = {
    direction : "column",
    sx : {
        display: "flex",
        justifyContent : "center",
        width : "100%"
    }
}


export default function FooterSection(){
    return (
        <Sheet {...FooterSheet}>
            {/* <Divider sx={{ display: "absolute"}}>Footer</Divider>  */}
            <Stack {...FooterContainer}>
                <Sheet {...FooterItem } variant="soft"><Stack {...FooterStack}><AspectRatio sx={{height:"100%", width:"100%"}}><img src={FooterImg}/></AspectRatio></Stack></Sheet>
                
                <Sheet {...FooterItem}>
                    <Box {...TextBox} >
                        <Stack {...FooterStack}>
                            <Typography level="title-md">Navigation</Typography>
                            { NavigationLinks.map((item)=><Link component={RouterLink} to={item.path}>{item.name}</Link>)}
                        </Stack>
                    </Box>    
                </Sheet>
                
                <Sheet {...FooterItem}>
                    <Box {...TextBox}>
                        <Stack {...FooterStack}>                        
                            <Typography level="title-md">Contacts:</Typography>
                            { Object.keys(Contacts).map((item)=><Typography level="body-md">{item} : {Contacts[item]}</Typography>)}
                        </Stack>   
                    </Box>                                        
                </Sheet>
                
                <Sheet {...FooterItem}>
                    <Box {...TextBox}>
                    <Stack {...FooterStack}>
                        <Typography level="title-md">Social Media</Typography>
                        { SocialMedia.map((item)=><Typography level="body-md">{item.platform} : {item.link}</Typography>)}
                    </Stack>    
                    </Box>                    
                </Sheet>
            </Stack>    
        </Sheet>
    )
}               