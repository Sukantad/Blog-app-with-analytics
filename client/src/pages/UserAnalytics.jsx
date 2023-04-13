import React, { useEffect, useState } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { getuserAnalytics } from '../utils/Api';
function UserAnalytics() {
    const [totalUser, setTotalUsers] = useState();
    async function fetchAnalytics() {
        const data = await getuserAnalytics();
        setTotalUsers(data)
    }

    useEffect(() => {
        fetchAnalytics();
    }, [])

    return (
        <Box width={{ xs: "90%", sm: "90%", md: "70%", lg: "60%", xl: "50%" }} margin={'auto'}>
            <Typography textAlign={'center'} fontSize={'20px'}> Total Users - {totalUser?.length}</Typography>

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

        </Box>
    );
}

export default UserAnalytics;