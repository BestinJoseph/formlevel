import { makeStyles } from "@mui/styles"

export default makeStyles((theme) => ({
    navContainer: {
        width: 'auto', 
        background: 'yellow', 
        padding: '1rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',

        '&$navMenus': {
            background: 'white',
            border: '1px solid red',
        }
    }
}))
