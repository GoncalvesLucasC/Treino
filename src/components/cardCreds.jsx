// import '../CSS/cardStyles.css'
import { Card } from "../css/Functions/cardStyles"

export function Cadastro({ name, lastName, email, phone, github, time }) {
    return (
        <Card className='cadsCard'>
            <strong> {name} </strong>
            <strong> {lastName} </strong>
            <strong> {email} </strong>
            <strong> {phone} </strong>
            <strong> {github}</strong>
            <small> {time} </small>
            {/* 
            <div className='coment'>

            </div> */}
        </Card>
    )
}
