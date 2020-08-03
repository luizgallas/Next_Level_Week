import React from 'react';

import WppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <main>
            <article className="teacher-item">
                <header>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFNRKXitq6ogA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=sXy48Gmwauk1NjYLDENzUXsIWPX42b4rgH_5t0Ev994" alt="Luiz Gallas" />
                    <div>
                        <strong>Luiz Gallas</strong>
                        <span>Java</span>
                    </div>
                </header>

                <p>
                    Entusiasta no desenvolvimento de aplicações back-end usando a linguagem de programação Java.
                    </p>
                <footer>
                    <p>
                        Preço/Hora
                            <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={WppIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                </footer>
            </article>
        </main>
    )
}

export default TeacherItem;