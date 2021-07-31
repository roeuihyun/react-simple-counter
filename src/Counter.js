import React, { Component } from "react";
import { Box, Button } from "@material-ui/core";

class Counter extends Component{
    //
    render(){
        //
        return (
            <div>
                <Button variant={"contained"} color={"primary"} size={"large"}> + </Button>
                <Box component={"span"} margin={"5 "}> 0 </Box>
                <Button variant={"contained"} color={"primary"} size={"large"}> - </Button>
            </div>
        );
    }
}
export default Counter;