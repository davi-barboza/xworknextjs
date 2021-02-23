import { useState } from 'react';

export function ExperienceBar(){
    const [countXp, setCountXp] = useState(1);

    function increment(){
        const zeroFill = (n: number) => {
            return ('0' + n).slice(-2);
        }

        // Cria intervalo
        const interval = setInterval(() => {
            // Pega o horário atual
            const now = new Date();

            // Formata a data conforme dd/mm/aaaa hh:ii:ss
            const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

            // Exibe na tela usando a div#data-hora
    
            setCountXp(countXp + 1);
        }, 10000);
    }
    increment();

    return (
        <header className="experience-bar">
            <span>{countXp}</span>
            <div>
                <div style={{width: `${countXp + '%'}` }}></div>

                <span className="current-experience" style={{left: `${countXp + '%'}`}}>
                    {countXp}
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}