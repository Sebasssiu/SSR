import React from 'react'

const LoginCard = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    dividerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    divider: {
      bottonBorder: '4px solid grey',
    },
  }
  return (
    <div style={styles.container}>
      <input
        placeholder="Nombre"
        type="text"
      />
      <input
        placeholder="Contraseña"
        type="password"
      />
      <button type="button">Iniciar sesión</button>
      <div style={styles.dividerContainer}>
        <div style={styles.divider} />
        <h5>O</h5>
        <div style={styles.divider} />
      </div>
      <a href="localhost:8080">Iniciar sesión con Facebook</a>
      <a href="localhost:8080">¿Olvidaste tu contraseña?</a>
    </div>
  )
}
export default LoginCard
