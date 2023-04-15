import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { getuserAnalytics } from '../utils/Api';
function UserAnalytics() {
    const [totalUser, setTotalUsers] = useState();
    const [loading, setLoading] = useState(false);

    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => { });
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress > 30) {
                setProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 30;
                const diff2 = Math.random() * 300;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 50);

        return () => {
            clearInterval(timer);
        };
    }, []);


    async function fetchAnalytics() {
        setLoading(true)
        const data = await getuserAnalytics();
        setTotalUsers(data)
        setLoading(false);
    }

    useEffect(() => {
        fetchAnalytics();
    }, [])

    return (
        <Box width={{ xs: "90%", sm: "90%", md: "70%", lg: "60%", xl: "50%" }} margin={'auto'}>
            <Typography textAlign={'center'} fontSize={'20px'}> Total Users - {totalUser?.length}</Typography>
            {
                !loading ?

                    <TableContainer component={Paper} >
                        <Table aria-label="a dense table">
                            <TableHead  >
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Total number of post</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {totalUser?.map((ele) => (
                                    <> {ele?.user?.name ? <TableRow
                                        key={ele?.user?.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {ele?.user?.name}
                                        </TableCell>
                                        <TableCell align="right">{ele?.user?.email}</TableCell>
                                        <TableCell align="right">{ele?.totalPosts}</TableCell>

                                    </TableRow> : ""}</>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <LinearProgress sx={{ width: '100%', height: "25px" }} variant="buffer" value={progress} valueBuffer={buffer} />

            }


        </Box>
    );
}

export default UserAnalytics;