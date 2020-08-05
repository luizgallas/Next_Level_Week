import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import WarningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/Textarea';

import './styles.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);


    function addNewScheduleItem() {
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso')
            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro')
        })

    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const newArray = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        })

        setScheduleItems(newArray);
    };

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="name"
                            label="Nome Completo"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            onChange={(e) => {
                                setAvatar(e.target.value);
                            }}
                        />
                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            onChange={(e) => {
                                setWhatsapp(e.target.value);
                            }}
                        />
                        <TextArea
                            name="bio"
                            label="Biografia"
                            onChange={(e) => {
                                setBio(e.target.value);
                            }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                            options={[
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Inglês', label: 'Inglês' },
                                { value: 'Redação', label: 'Redação' },
                                { value: 'Literatura', label: 'Literatura' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                            ]}
                        />

                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            onChange={(e) => {
                                setCost(e.target.value);
                            }} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week-day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => {
                                            setScheduleItemValue(index, 'week_day', e.target.value);
                                        }}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input
                                        onChange={e => {
                                            setScheduleItemValue(index, 'from', e.target.value);
                                        }}
                                        value= {scheduleItem.from}
                                        name="from"
                                        label="Das"
                                        type="time"
                                    />
                                    <Input
                                        onChange={e => {
                                            setScheduleItemValue(index, 'to', e.target.value);
                                        }}
                                        value= {scheduleItem.to}
                                        name="to"
                                        label="Até"
                                        type="time"
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={WarningIcon} alt="Ícone de aviso" />
                            <p>Importante! Preencha todos os dados.</p>
                        </p>

                        <button type='submit' >Salvar Cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;