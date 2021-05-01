import React from 'react'

function Header() {
    return (
        <div>
            <div class="navName">
                <h1>Kevin Rayo Meza <a>Contact</a></h1>
            <h2>
                <li>(602)-505-3722</li>
                <li>01rayo2015@gmail.com</li>
            </h2>
            </div>

            {/* <!-- links --> */}
            <div>
                <nav>
                <a href="https://github.com/007krm">
                    <h2>Github Profile</h2>{" "}
                </a>
                </nav>
                <a href="https://www.linkedin.com/in/kevin-rayo-meza-15994a206/">
                <h2>linked in</h2>
                </a>
            </div>       
        </div>
    )
}

export default Header
