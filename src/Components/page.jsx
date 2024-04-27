import { useState } from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import InputAdornment from '@mui/material/InputAdornment';


  const initialPriciple = 100000;
  const initialPeriod = 1;
  const initialRateOInt = 7;

const Txt = styled(TextField)`
    margin : 0px 10px 10px 10px;
    display: inline-flex;
    flexDirection: column;
    color : black;
    width : 330px

    // justifyContent: 'flex',
    // align-items: center;
    // text-align: center;
    
`

const Pie = styled(PieChart)`
    // margin: 200px 200px 500px 1000px;
    // display: inline;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    // min-height: 100vh;
    // position : absolute;
    // left : 200px;
`

const Typo = styled(Typography)`
    margin : 15px 8px 8px 8px;
    // display : flex;
    // flexDirection: row;   
    // font-family: ;
    font-weight: 500;
`



const Con1 = styled(Container)`
    // margin : 30px 10px 10px 10px;
    display : flex;
    flexDirection: column;
    // @media (max-width: 500px) {
    //     flexDirection: column;
    // }
    // maxWidth : false; 
`

function Page() {
    const [principle, setprinciple] = useState(initialPriciple);
    const [period, setperiod] = useState(initialPeriod);
    const [rate, setRate] = useState(initialRateOInt);

    let data = [
        { id: 0, value: 100000, label: 'Principle' },
        { id: 1, value: 7185, label: 'Interest' },
    ];


    const onValueChange = (e) => {
        if(e.target.name === 'principle'){
            setprinciple(e.target.value);
            
        }

        else if(e.target.name === 'period'){
            setperiod(e.target.value);
        }

        if(e.target.name === 'rate'){
            setRate(e.target.value);
        }
        
    }


    const final_amount = Math.trunc(principle*( Math.pow(1+ ((rate*(0.01))/(4)), 4*(period) ) ));
    data[0].value = principle;
    data[1].value = final_amount-principle;

    function InrFormat(userinput){
        let x= userinput;
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers !== ''){
            lastThree = ',' + lastThree;
        }
        let inrformat = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return inrformat;
    }

    let principleinr = InrFormat(principle);
    let interestinr = InrFormat(data[1].value);
 
    let totalinr = InrFormat(final_amount);
    
 

    return (
        <Container maxWidth = 'false'
        sx={{
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.25s ease-in-out',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
        >

            <Con1
            sx={{
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.25s ease-in-out',
                justifyContent: 'center',
                
                '@media (max-width: 750px)': {
                    flexDirection: 'column', // change flex direction on smaller screens
                },

                bgcolor: 'background.default',
                color: 'text.primary',
                p: 1,
              }}

            >

                <Box 
                maxWidth = 'xl'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease-in-out',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    p: 1,
                  }}

                >
                    <Typo > Total Investment </Typo>
                    <Txt id="filled-basic" InputProps={{
                        inputProps: { min: 0 },
                        startAdornment: (
                            <InputAdornment position="start">
                                <CurrencyRupeeIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    }} label='Rupees' type="number" variant="filled" name='principle' value={principle} onChange={onValueChange} />


                    <Typo  > Time Period </Typo >
                    <Txt InputProps={{
                        inputProps: { min: 1 },
                        startAdornment: (
                            <InputAdornment position="start">
                                <HourglassTopIcon fontSize="small" />
                            </InputAdornment>
                        ),}}
                        id="filled-basic" label="Years" type="number" variant="filled" name='period' value={period} onChange={onValueChange} 
                        
                    />
                    
                    <Typo> Rate of Interest (P.A) </Typo>
                    <Txt         
                    InputProps={{inputProps: { min: 0 }}}
                    id="filled-basic" label="%" type="number" variant="filled" name='rate' value={rate} onChange={onValueChange} />

                    <Typo
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            transition: 'all 0.25s ease-in-out',
                            bgcolor: 'background.paper',
                          }}
                    > Invested Amount  <Typo sx={{margin : 0,}}> <CurrencyRupeeIcon fontSize="small"/>{principleinr} </Typo>  </Typo>
                    <Typo
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            transition: 'all 0.25s ease-in-out',
                            bgcolor: 'background.paper',
                          }}
                    > Estimated Returns  <Typo sx={{margin : 0,}}> <CurrencyRupeeIcon fontSize="small" /> {interestinr} </Typo>  </Typo>
                    <Typo
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            transition: 'all 0.25s ease-in-out',
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                          }}
                    > Total Value  <Typo sx={{margin : 0,display: 'flex',}}> <CurrencyRupeeIcon sx={{ fontSize: 16 }} fontSize="small"/> {totalinr} </Typo>   </Typo>
                </Box>


                <Pie
                    colors={[ '#689f38', 'green']}
                    series={[
                        {   arcLabel: (item) => `${item.label}`,
                            arcLabelMinAngle: 50,
                            data,
                            innerRadius: 20,
                            paddingAngle: 1,
                            cornerRadius: 5,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            // cx: 250,
                            // cy: 100,
                        },
                    ]}  
                    // width={500}
                    height={200}
                    slotProps={{
                        legend: { hidden: false },
                    }}
                />
                
            </Con1>
            
        </Container>
    )
}

export default Page;


// export default function ToggleColorMode() {
//     const [mode, setMode] = React.useState('light');
//     const colorMode = React.useMemo(
//       () => ({
//         toggleColorMode: () => {
//           setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//         },
//       }),
//       [],
//     );
  
//     const theme = React.useMemo(
//       () =>
//         createTheme({
//           palette: {
//             mode,
//             ...(mode === 'light'
//         ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: grey,
//           divider: grey[900],
//           background: {
//             default: grey[800],
//             paper: grey[500],
//           },
//           text: {
//             primary: '#fff',
//             secondary: grey[500],
//           },
//         }),
//           },
//         }),
//       [mode],
//     );
  
//     return (
//       <ColorModeContext.Provider value={colorMode}>
//         <ThemeProvider theme={theme}>
//           <Page />
//         </ThemeProvider>
//       </ColorModeContext.Provider>
//     );
//   }