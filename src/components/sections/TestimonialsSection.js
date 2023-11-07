import { Sheet, Stack, Typography } from "@mui/joy";
import TestimonialsCard from "components/TestimonialCard";

const TestimonialsStack = {
    direction : "row",
    justifyContent : "space-around",
    sx : {
    }
}

export default function TestimonialsSection(){
    return(
        <Sheet variant="soft">
            <Stack direction="row" justifyContent="space-between" sx={{ p: 2}}>
                <Typography level="title-lg">Testimonias:</Typography>
            </Stack>
            
            <Stack {...TestimonialsStack}>
                <TestimonialsCard tag="REVIEWER" author={"Josephine Blanton"} message={"Best meal since i was 6..."}/>
                <TestimonialsCard tag="REGULAR" author={"John Sakutaki"} message={"Well made salmon"}/>
                <TestimonialsCard tag="TOURIST" author={"Peter Jason"} message={"Desserts were amazing"}/>
            </Stack>
        </Sheet>
        
    )
}