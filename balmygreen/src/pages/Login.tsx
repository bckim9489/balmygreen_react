import { Button, TextField, Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from '../css/Login.module.css';
import logo from '../assets/logo.png';

export default function Login() {
    const theme = useTheme();

    return(
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', backgroundColor: theme.palette.secondary.main }}>
            <Container component="main" maxWidth="xs" className={styles.loginContainer}>
                <img src={logo} alt='Logo' className='logo' />
                <Box>
                    dasfdsafd
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="아이디"
                        name="id"
                    />
                </Box>
            </Container>
        </div>
    );
}