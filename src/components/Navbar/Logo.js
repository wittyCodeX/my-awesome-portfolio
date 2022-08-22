import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-scroll'
import LogoImg from '../../assets/images/logo.png'

const Logo = ({ setHomeIsActive, ...rest }) => {
  const classes = useStyles()
  return (
    <Link
      spy
      smooth
      duration={500}
      offset={-70}
      to="home"
      onSetActive={() => setHomeIsActive(true)}
      onSetInactive={() => setHomeIsActive(false)}
      className={classes.root}
    >
      <img src={LogoImg} alt="Jonathan Brown" className={classes.logoImg} />
    </Link>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
  },
  logoImg: {
    width: '270px',
    height: '50px',
  },
}))

export default Logo
