import { Button } from "@mui/material"

const OutlinedButton = ({onClick,sx,children}:{onClick?:any,sx:any,children:any}) => {
  return (
    <Button
    variant="outlined"
    onClick={onClick}
    sx={{
      width: "max-content",
      textTransform: "none",
      borderRadius: "48px",
      padding: "0 18px",
      border:"2px solid #fff",
      ...sx,
    }}
  >
    {children}
  </Button>
  )
}

export default OutlinedButton
