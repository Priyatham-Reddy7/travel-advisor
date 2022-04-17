import {AppBar, Typograpghy, ToolBar, InputBase, Box, Autocomplete} from '@material-ui/core'
import SearchIcon, { CallMissedSharp } from '@material-ui/icons'

const Header = () => {
  return (
    <>
      <AppBar position='static'>
        <ToolBar className={classes.toolbar}>
          <Typograpghy variant='h5' className={classes.title}>
            Travel Advisor
          </Typograpghy>
          <Box display={flex}>
              <Typograpghy variant='h6' className={classes.title}>
                Explore new places
              </Typograpghy>
            <Autocomplete>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder='Search ...' classes={{root: classes.inputRoot, input: classes.inputInput}} />
              </div>
            </Autocomplete>
          </Box>
        </ToolBar>
      </AppBar>
    </>
  )
}

export default Header