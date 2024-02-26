import { Button, TextField, Box, Container } from '@mui/material';
import styles from '../css/Login.module.css';

import logo from '../assets/logo.png';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AlertDialog from '../components/AlertDialog';
import { useTheme } from '@mui/material/styles';

export default function Login() {
    const baseUrl = "http://localhost:8080";
    const theme = useTheme();
    
    const [userId, setUserId] = useState('');
    const [userPw, setuserPw] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const msg = useRef('')
    

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + '/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, userPw }),
            });

            if (response.ok) {
                const data = await response.json();
                navigate('/', { state: { userId: userId, ...data } });
            } else {
                msg.current = '아이디 또는 비밀번호가 일치하지 않습니다.'
                setOpenDialog(true);
            }
        } catch (error) {
            msg.current = '서버에서 응답이 없습니다. 잠시 후 다시 시도해주세요.'
            setOpenDialog(true);
        }
    };

    return(
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', backgroundColor: theme.palette.background.default }}>
            <Container component="main" maxWidth="xs" className={styles.loginContainer}>
                <Box>
                    <img src={logo} alt='Logo' className={styles.mainLogo}/>
                </Box>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="아이디"
                        name="id"
                        autoComplete='off'
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        value={userPw}
                        onChange={(e) => setuserPw(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{
                            backgroundColor: 'black',
                            color : "white",
                            fontWeight: "bold", 
                            height: "56px",
                            fontSize: "1rem"
                        }}
                    >
                        로그인
                    </Button>
                </Box>
            </Container>
            <AlertDialog
                open={openDialog}
                onClose={handleDialogClose}
                title="로그인 실패"
                message= {msg.current}
            />
        </div>
    );
}