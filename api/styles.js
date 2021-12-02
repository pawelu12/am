import { useSelector } from "react-redux"

export const colors = () => {
  const theme = 'light'

  if(theme === 'light')
    return (
      {
        backgroundColor: 'darkmagenta',
        color: 'white'
      }
    )
  else if(theme === 'dark')
    return (
      {
        backgroundColor: 'indigo',
        color: 'white'
      }
    )
}

export const navStyle = {
  header: {
      style: {
        backgroundColor: colors().backgroundColor
      },
      tintColor: '#fff',
      titleStyle: {
        fontWeight: 'bold'
      }
    },
    tab: {
      activeColor: 'white',
      inactiveColor: 'black',
      style: {
        backgroundColor: colors().backgroundColor
      }
    }
}