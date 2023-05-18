'use client'

import { CssBaseline } from '@mui/material'

interface Props {
    children: React.ReactNode
}

const CssBaselineProvider = ({ children }: Props) => {
    return <CssBaseline>{children}</CssBaseline>
}

export default CssBaselineProvider
