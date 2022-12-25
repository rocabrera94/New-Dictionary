import React from "react";
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import CardContent from '@mui/material/CardContent'
import {styled} from '@mui/material/styles'


import "./Container.css";

let Container = ({data}) => { 
    //let meaning = data.meanings[0].definitions[0].definition;  
    
    const Root = styled('div')(({ theme }) => ({
       // padding: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
          width: 350,
          
        },
        [theme.breakpoints.up('md')]: {
          
          width:800,
        },
        [theme.breakpoints.up('lg')]: {
          
          
          width: 1000,
        },
      }));
    
      



     return ( 
        /*<div id='container' className="container">
            <p><span>word</span>: {data.word}</p>
            <p><span>phonetic</span>: {data.phonetic}</p>
            
            {aya.map((examples)=>{
                return (
                  <div key={examples.definitions[0].definition}>    
                    <p><span>definition</span>: {examples.definitions[0].definition}</p>
                  </div>)
            })}    
        </div>*/
        <div>
          {(data===undefined ? (<p>Word Not Found</p>):(<Root>
        <Card sx={{ textAlign: 'start'}} variant='outlined'>
            <CardContent >
              
            <Typography>
              <span style= {{fontWeight:'bold'}}>word</span>: {data.word}
            </Typography>
            <Typography>
              <span style= {{fontWeight:'bold'}}>phonetic</span>: {data.phonetic}
            </Typography>

            {data.meanings.map((examples)=>{
                return (
                  <Typography key={examples.definitions[0].definition}>    
                    <span style= {{fontWeight:'bold'}}>definition</span>: {examples.definitions[0].definition}
                  </Typography>)
            })} 
            </CardContent>
        </Card>
        </Root>))}

          
        
        
             </div>  ) 
           
           
          
        
        
        
    
}

export default Container;