import { AppBar, Link, Toolbar } from "@mui/material"

export function Header() {
  return (
    <AppBar color={"default"} position={"fixed"} elevation={0}>
      <Toolbar>
        <Link href={"/"} underline="none" variant="h3" color={"black"}>
          TODOアプリ
        </Link>
      </Toolbar>
    </AppBar>
  )
}