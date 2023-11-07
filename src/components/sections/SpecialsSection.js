import { AspectRatio, Button, Link, Card, Sheet, Stack, Typography, CardContent } from "@mui/joy";
import meal1 from "assets/bruchetta.svg";
import { Link as RouterLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import SpecialCard from "components/SpecialsCard";

const SpecialsStack = {
    direction : "row",
    justifyContent : "space-around",
    sx : {
    }
}

export default function SpecialsSection(){
    return(
        <Sheet variant="soft">
            <Stack direction="row" justifyContent="space-between" sx={{ p: 2}}>
                <Typography level="title-lg">Our specials:</Typography>
                <Link component={RouterLink} to="/menu"><Typography level="title-sm">Menu</Typography></Link>
            </Stack>

            <Stack {...SpecialsStack}>
                <SpecialCard name="Salad" description="Olives, Fresh Cheese and Salmon" img={meal1} price={50} />
                <SpecialCard name="Salad" description="Olives, Fresh Cheese and Salmon" img={meal1} price={50} />
                <SpecialCard name="Salad" description="Olives, Fresh Cheese and Salmon" img={meal1} price={50} />
            </Stack>
        </Sheet>
        
    )
}