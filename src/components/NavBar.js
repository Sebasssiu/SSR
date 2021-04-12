import React from 'react'
import blizzard from '../images/blizzard.png'
import '../styles/style.css'

const NavBar = () => {
  const styles = {
    topHeader: {
      display: 'flex',
      minWidth: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(11,13,18)',
      height: '6.3vh',
      minHeight: '6.3vh',
    },
    imageItems: {
      display: 'flex',
      flexDirection: 'row',
    },
    logo: {
      width: '50px',
      objectFit: 'contain',
      marginLeft: '30%',
      marginRight: '-20px',
    },
    leftHeaderOptions: {
      display: 'flex',
      flexDirection: 'row',
      listStyleType: 'none',
      marginRight: '10%',
    },
    leftMenuItems: {
      margin: '0px 10px 0px 10px',
      color: 'rgba(255,255,255,0.7)',
      fontFamily: 'Helvetica,Arial,sans-serif',
    },
  }
  return (
    <>
      <div style={styles.topHeader}>
        <div style={styles.imageItems}>
          <img
            alt="Amazon logo"
            style={styles.logo}
            src={blizzard}
          />
          <ul style={styles.leftHeaderOptions}>
            <li>
              <a href="http://localhost:8080/">JUEGOS</a>
            </li>
            <li>
              <a href="http://localhost:8080/">TIENDA</a>
            </li>
            <li>
              <a href="http://localhost:8080/">NOTICIAS</a>
            </li>
            <li>
              <a href="http://localhost:8080/">ESPORTS</a>
            </li>
          </ul>
        </div>
        <ul style={styles.leftHeaderOptions}>
          <li>
            <a href="http://localhost:8080/">Asistencia</a>
          </li>
          <li>
            <a href="http://localhost:8080/">Mi cuenta</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
