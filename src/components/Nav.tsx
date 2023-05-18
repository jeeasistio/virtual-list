'use client'

import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import UserDropdown from './UserDropdown'

interface Props {
    links: {
        label: string
        href: string
    }[]
}

const Nav = ({ links }: Props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                    {links.map((link) => (
                        <Typography
                            key={link.label}
                            component={Link}
                            href={link.href}
                            variant="h6"
                            sx={{
                                textDecoration: 'none',
                                color: (theme) => theme.palette.common.white,
                                '&:hover': {
                                    color: (theme) => theme.palette.grey[400],
                                },
                            }}
                        >
                            {link.label}
                        </Typography>
                    ))}

                    <UserDropdown />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Nav
