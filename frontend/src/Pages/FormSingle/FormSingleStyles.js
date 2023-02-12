import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    approvalSections: {
        display: 'grid', 
        gridTemplateColumns: '3px 1fr', 
        gridColumnGap:'1.5rem',

        '&:nth-last-Child(1)': {
            position: 'relative',

            '&::after': {
                content: '""',
                width:'10px',
                height: '10px',
                background: 'blue',
                position: 'absolute',
                bottom: '-2px',
                left: '-8.55px',
                transform: 'translateX(50%)',
                borderRadius: '50%',
            }
        },
    }
}))