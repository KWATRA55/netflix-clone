import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200){
                handleShow(true)
            }
            else{
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll", null)
        }
    }, [])
  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img alt='natflix-logo'className='nav-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png' />

        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAV1BMVEUNfoD///8Ad3kAe30AdHby+PgagoSAsbLW5eX7/f06iIqlx8i00NHR4uIAcnXe6elUmZt1qqvo8vJspaYsiIqcwsM7jY9KkZONuLm/2NldnZ7H2tuUvb7KrWB7AAABbUlEQVRoge2X25KDIAyGIQGqBTzVs77/cy6j1XZ2Kxa2N53Jd6nJT0hM0jJGEARBEATxrSAgAwj3A1DgXP02xZRyqdWJ2Z+QlJY8nQpvVFDyhUoFasvV7+ZRx5rfsSJEHOzmVx9fGZrNiLcBicFud2uOQ8+S3eoSUFS47G6eG0eKY/mOOOjdqotLiz6O6VHQJLKgvlJt2ZOeqr8MSr6TTFEkrolMeBMZ10TJeHJfBHVlMe3PrvVZ+xMEQcQArI6YSm5aYnY2lQD7Kh1i1G2adMIjj0LNy0wvgyfjuv6GQrweqghiNOm6Lvpw8Wn1zPva6T+7oxPGQlfbmpNhv6YWiXHfwLkuO5ZlYiHD9jZPcn8pGxaxL7DL+QMpk8EYM9hK8ufHs4r6WBhmo+VebCnipBd5aLU8Uk769p8LFCFrG/v7gDQ3JQr8wG5G97+gu80u3Xme28noslDg+/6DD3An7HwiYoIgCIIgCIIgvpwffSQLvrwq4wUAAAAASUVORK5CYII='
            alt = "avatar logo" className='nav-avatar' />
    </div>
  )
}

export default Nav