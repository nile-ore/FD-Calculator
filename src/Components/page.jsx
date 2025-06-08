import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, Paper, useTheme } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import InputAdornment from '@mui/material/InputAdornment';
import PercentIcon from '@mui/icons-material/Percent';
import { motion } from 'framer-motion';

const initialPriciple = 100000;
const initialPeriod = 1;
const initialRateOInt = 7;

const Txt = styled(TextField)(({ theme }) => ({
    margin: '0px 10px 16px 10px',
    display: 'inline-flex',
    flexDirection: 'column',
    width: '330px',
    '& .MuiFilledInput-root': {
        backgroundColor: alpha(theme.palette.primary.main, 0.05),
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
        },
        '&.Mui-focused': {
            backgroundColor: alpha(theme.palette.primary.main, 0.15),
            boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
        },
    },
    '& .MuiInputLabel-root': {
        color: theme.palette.text.secondary,
    },
    '& .MuiFilledInput-input': {
        fontSize: '1.1rem',
        padding: '16px 12px',
    },
}));

const Pie = styled(PieChart)(({ theme }) => ({
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const Typo = styled(Typography)(({ theme }) => ({
    margin: '15px 8px 8px 8px',
    fontWeight: 500,
    color: theme.palette.text.primary,
    fontSize: '1.1rem',
}));

const ResultTypo = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    margin: '8px 0',
    borderRadius: '12px',
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
    backdropFilter: 'blur(10px)',
    boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 6px 24px ${alpha(theme.palette.common.black, 0.08)}`,
    },
}));

const Con1 = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    gap: theme.spacing(2),
    '@media (max-width: 750px)': {
        flexDirection: 'column',
    },
}));

const CalculatorCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: '24px',
    backgroundColor: alpha(theme.palette.background.paper, 0.9),
    backdropFilter: 'blur(10px)',
    boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
    transition: 'all 0.3s ease',
    '&:hover': {
        boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.12)}`,
    },
}));

function Page() {
    const theme = useTheme();
    const [principle, setprinciple] = useState(initialPriciple);
    const [period, setperiod] = useState(initialPeriod);
    const [rate, setRate] = useState(initialRateOInt);

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

    // Calculate values
    const final_amount = Math.trunc(principle * (Math.pow(1 + ((rate * (0.01)) / (4)), 4 * (period))));
    const interest = final_amount - principle;
    const isProfit = interest >= 0;

    // Format values
    let principleinr = InrFormat(principle);
    let interestinr = InrFormat(Math.abs(interest));
    let totalinr = InrFormat(final_amount);

    // Pie chart colors
    const principleColor = theme.palette.mode === 'light' ? '#1976d2' : '#bdbdbd'; // Blue for light, light grey for dark
    const interestColor = isProfit ? '#43a047' : '#e53935'; // Green for profit, red for loss

    // Prepare chart data
    let data = [
        { id: 0, value: principle, label: 'Principle', color: principleColor },
        { id: 1, value: Math.max(0, interest), label: isProfit ? 'Profit' : 'Loss', color: interestColor },
    ];

    return (
        <Container
            maxWidth={false}
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: theme.palette.mode === 'light'
                    ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`
                    : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                py: 4,
            }}
        >
            <CalculatorCard elevation={0}>
                <Con1>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            maxWidth: 'xl',
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 600,
                                mb: 3,
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Fixed Deposit Calculator
                        </Typography>

                        <Typo>Total Investment</Typo>
                        <Txt 
                            InputProps={{
                                inputProps: { min: 0 },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CurrencyRupeeIcon sx={{ color: theme.palette.primary.main }} />
                                    </InputAdornment>
                                ),
                            }}
                            label="Rupees"
                            type="number"
                            variant="filled"
                            name="principle"
                            value={principle}
                            onChange={onValueChange}
                        />

                        <Typo>Time Period</Typo>
                        <Txt 
                            InputProps={{
                                inputProps: { min: 1 },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HourglassTopIcon sx={{ color: theme.palette.primary.main }} />
                                    </InputAdornment>
                                ),
                            }}
                            label="Years"
                            type="number"
                            variant="filled"
                            name="period"
                            value={period}
                            onChange={onValueChange}
                        />

                        <Typo>Rate of Interest (P.A)</Typo>
                        <Txt 
                            InputProps={{
                                inputProps: { min: 0 },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PercentIcon sx={{ color: theme.palette.primary.main }} />
                                    </InputAdornment>
                                ),
                            }}
                            label="%"
                            type="number"
                            variant="filled"
                            name="rate"
                            value={rate}
                            onChange={onValueChange}
                        />

                        <Box sx={{ mt: 3 }}>
                            <ResultTypo>
                                Invested Amount
                                <Typography sx={{ fontWeight: 600, color: principleColor }}>
                                    <CurrencyRupeeIcon fontSize="small" sx={{ mr: 0.5 }} />
                                    {principleinr}
                                </Typography>
                            </ResultTypo>

                            <ResultTypo>
                                {isProfit ? 'Interest Earned' : 'Interest Lost'}
                                <Typography 
                                    sx={{ 
                                        fontWeight: 600,
                                        color: interestColor,
                                    }}
                                >
                                    <CurrencyRupeeIcon fontSize="small" sx={{ mr: 0.5 }} />
                                    {interestinr}
                                    {!isProfit && ' (Loss)'}
                                </Typography>
                            </ResultTypo>

                            <ResultTypo>
                                Maturity Amount
                                <Typography 
                                    sx={{ 
                                        fontWeight: 700,
                                        color: isProfit ? interestColor : theme.palette.loss.main,
                                    }}
                                >
                                    <CurrencyRupeeIcon fontSize="small" sx={{ mr: 0.5 }} />
                                    {totalinr}
                                </Typography>
                            </ResultTypo>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mt: 4,
                        }}
                    >
                        <Pie
                            series={[
                                {
                                data,
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -10 },
                                innerRadius: 60,
                                paddingAngle: 2,
                                cornerRadius: 4,
                                },
                            ]}
                            height={260}
                            width={400}
                            margin={{ top: 20, bottom: 20, left: 20, right: 80 }} // right space for legend
                            slotProps={{
                                legend: {
                                direction: 'column',
                                position: { vertical: 'middle', horizontal: 'right' },
                                padding: 20,
                                itemGap: 16, // spacing between legend items
                                itemMarkWidth: 18,
                                itemMarkHeight: 18,
                                labelStyle: {
                                    marginLeft: 8,
                                    fontSize: 14,
                                },
                                },
                            }}
                            colors={[principleColor, interestColor]}
                        />

                        <Box sx={{ height: 32 }} /> {/* Spacer to ensure legend doesn't overlap */}
                    </Box>
                    <Box sx={{ mt: 3, textAlign: 'center', width: '100%' }}>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: 14 }}>
                            Made with <span role="img" aria-label="love">❤️</span> in India
                        </Typography>
                    </Box>
                </Con1>
            </CalculatorCard>
        </Container>
    );
}

export default Page;