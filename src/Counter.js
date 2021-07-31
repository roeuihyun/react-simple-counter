import React, { Component } from "react";
import { Box, Button } from "@material-ui/core";

class Counter extends Component{
    //
    constructor(){
        super();
        this.state = {
            count : 5,
        }
    }
    //
    render(){
        //
        return (
            <div>
                <Button variant={"contained"} color={"primary"} size={"large"}> + </Button>
                <Box component={"span"} margin={"5"}> {this.state.count} </Box>
                <Button variant={"contained"} color={"primary"} size={"large"}> - </Button>
            </div>
        )
    }
}
export default Counter;