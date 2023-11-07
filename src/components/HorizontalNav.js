import { Tabs, Tab, TabList, Link } from "@mui/joy"
import { Link as RouterLink } from "react-router-dom";
import { tabClasses } from '@mui/joy/Tab';
import { useContext, useState } from "react";
import { StateManager } from "Contexts";

const MainNavList = {
    sx : {
        height: "100%",
        p: 0.5,
        gap: 0.5,
        borderRadius: 'xl',
        bgcolor: 'background.level3',
        [`& .${tabClasses.root}[aria-selected="true"]`]: {
            height: "100%",
            boxShadow: 'md',
            bgcolor: 'background.surface',
        },
    }
}

export default function HorizontalNav(){
    const { mainNavigation ,setMainNavigation } = useContext(StateManager)

    return(
        <Tabs underlinePlacement={mainNavigation} 
              onChange={(e, newValue) => { setMainNavigation( newValue ) }}
              aria-label="tabs" defaultValue={0} 
              sx={{ bgcolor: 'transparent', height: "90%" }}>
            <TabList disableUnderline {...MainNavList}>                
                <Link component={RouterLink} to="/"><Tab disableIndicator value="home">Home</Tab></Link>
                <Link component={RouterLink} to="/about"><Tab disableIndicator value="about">About</Tab></Link>
                <Link component={RouterLink} to="/menu"><Tab disableIndicator value="menu">Menu</Tab></Link>
                <Link component={RouterLink} to="/reservations"><Tab disableIndicator value="reservations">Reservations</Tab></Link>
                <Link component={RouterLink} to="/orderOnline"><Tab disableIndicator value="orders">Order Online</Tab></Link>
                <Link component={RouterLink} to="/login"><Tab disableIndicator value="login">Login</Tab></Link>
            </TabList>
            
        </Tabs>
        
    )
}

