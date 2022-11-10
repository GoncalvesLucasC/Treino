import React from "react";
import { CardAvatar, CardUl, CardDiv, CardLi, CardDivAvatar } from "../../CSS/Pages/contactPage/cardPerfil"


function CardContact() {
    return (
        <>
            <CardDiv>
                <CardUl>
                    <CardDivAvatar>
                        <CardAvatar src="https://avatars.githubusercontent.com/u/109694228?v=4" alt="" />
                    </CardDivAvatar>
                    <CardLi>
                        <h3>LucasCaetanoG#7968</h3>
                        <br />
                        <tr>Olá, esse é meu discord.Se quiser dar uma ideia para algum projeto,
                            <br />
                            ou para me auxiliar entre em contato comigo! Obrigado!!!</tr>
                    </CardLi>
                </CardUl>
            </CardDiv>
        </>
    )
}
export default CardContact;