import { AspectRatio, Box, Divider, Grid, Sheet, Stack, Typography } from "@mui/joy";
import '@fontsource/inter'
import { loremIpsum } from "lorem-ipsum";
import restaurant from "assets/restaurant.jpg"

const HeroSectionSheet = {
    variant : "soft",
    sx : {
        height: "50vh",
        width: "100%"
    }
}

const HeroSectionStack = {
    direction : "row",
    justifyContent : "flex-start",
    alignItems : "flex-end",
    sx : {
        height : "100%",
        width : "100%",
        border : 1
    }
}

const descriptionStack = {
    direction : "column",
    sx : {
        height: "100%",
        width: "50%",
        justifyContent : "end",
        p: 3
    }
}

const presentationStack = {
    sx : {
        height: "100%", 
        width: "50%", 
        display: "flex",
        justifyContent: "center",
        alignItems : "center"
    }
}

const presentationImg = {
    
    flex : "true",
    sx : {
        width: "100%"
    }
}

export default function HeroSection(){
    return(
        <Sheet {...HeroSectionSheet}>
            <Stack {...HeroSectionStack}>
                <Sheet sx={{ width: "100%" }}>
                    <Stack {...descriptionStack}>
                        <Typography level="h2">Little Lemon</Typography>
                        <Typography level="title-lg">Chicago</Typography>
                        <Typography level="body-md">{loremIpsum() + " " + loremIpsum()}</Typography>
                    </Stack>
                </Sheet>
                <Stack {...presentationStack}>
                    <AspectRatio {...presentationImg}><img src={restaurant}/></AspectRatio>
                </Stack>
            </Stack>
        </Sheet>
    )
} 