import { Backdrop as MuiBackDrop, Typography } from "@mui/material"
import Spinner from "components/Spinner"


const Backdrop = ({ loading, label }) => {
    return (
        <MuiBackDrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, opacity: "25%" }}
            style={{ display: 'flex', flexDirection: 'column' }}
            open={loading}
        >
            <div>
                <Spinner />
            </div>
            <div>
                <Typography ml={2} variant='body1'>{label || 'Loading...'}</Typography>
            </div>
        </MuiBackDrop>
    )

}

export default Backdrop


