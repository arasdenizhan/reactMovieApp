import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    status: {
        danger: '#ffa84d',
    },
    palette: {
        background: {
            default: '#ffa84d'
        },
        primary: {
            main: '#ff6500',
            darker: '#ff5200',
            contrastText: '#ffffff'
        },
        neutral: {
            main: '#ffbda6',
            contrastText: '#ffffff',
        },
    }
});