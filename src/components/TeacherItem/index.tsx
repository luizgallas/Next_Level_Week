import React from 'react';

import WppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string,
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return (
        <main>
            <article className="teacher-item">
                <header>
                    <img src={teacher.avatar} alt={teacher.name} />
                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span>
                    </div>
                </header>

                <p>
                    {teacher.bio};
                </p>
                <footer>
                    <p>
                        Preço/Hora:
                            <strong>{teacher.cost}</strong>
                    </p>
                    <a onClick={createNewConection} href={`http://wa.me/${teacher.whatsapp}`}>
                        <img src={WppIcon} alt="Whatsapp" />
                            Entrar em contato
                    </a>
                </footer>
            </article>
        </main>
    )
}

export default TeacherItem;