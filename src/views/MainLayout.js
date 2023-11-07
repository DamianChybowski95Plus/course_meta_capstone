import { Box, Button, CssVarsProvider, Drawer, Grid, Sheet, Stack, Divider } from "@mui/joy"
import '@fontsource/inter'

import ThemeSwitch from "components/ThemeSwitch"
import { Outlet, useLocation } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import HeaderSection from "components/sections/HeaderSection";
import Home from "./MainLayout/Home";
import FooterSection from "components/sections/FooterSection";
import { StateManager } from "Contexts";

const Wrapper = {
    variant : "soft",
    sx : {
        width : "80vw",
        margin : "0 auto",
        boxShadow : "xl",
        borderRadius: 2,

    }
}

const Main = {
    component : "main",
    variant : "soft",
    spacing : 1,

    sx : {

    }
}

export default function MainLayout(){

    const { ordersDrawer, setOrdersDrawer } = useContext(StateManager)
    const toggleDrawer = () => {
        setOrdersDrawer( !ordersDrawer )
    }

    const [ adminDrawer, setAdminDrawer ] = useState(false)
    const toggleAdminDrawer = () => {
        setAdminDrawer( !adminDrawer )
    }

    const location = useLocation()
    const AdminSession = true

    return(
        <CssVarsProvider>
            <Drawer open={ordersDrawer} anchor="right" onClose={setOrdersDrawer(false)}></Drawer>
            <Button onClick={toggleDrawer}>State Manager wydaje się nie działać tak samo gdy jest używany jak useState; działa jakoś inaczej</Button>

            <Sheet {...Wrapper}>
                <HeaderSection/>
                <Divider variant="soft" sx={{margin : 1}}>Welcome to Little Lemon</Divider>

                <Sheet variant="soft">
                    <Stack {...Main} >
                        {location.pathname == "/" && <Home/>}
                        <Outlet/>
                    </Stack>
                </Sheet>

                <Divider variant="soft" sx={{margin : 1}}>Contact Little Lemon</Divider>
                <FooterSection/>

                { AdminSession && <>
                    <Drawer open={adminDrawer} anchor="top" onClose={toggleAdminDrawer}>Admin</Drawer>
                    <ThemeSwitch/>
                    <Button onClick={toggleAdminDrawer}>Admin Drawer</Button>
                </>}
            </Sheet>
        </CssVarsProvider>
    )
}