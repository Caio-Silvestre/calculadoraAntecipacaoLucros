import { ResultsStyled } from "./styled"
import { useFormContext } from "../../Hooks/FormContext"


export const Resultados =()=> {
    /// Traz resultados do formulário ==Vem=de==> src/Hooks/FormContext
    const {valuesApi} = useFormContext()

    // Tratativa do objeto gerado pela API
    // Se ele for undefined o falor se mantém em "", não aparecendo para o usuário.
    // E diferencia o 0 do undefined.

    const dia01 = (Object.values(valuesApi)[0]) !== undefined? 
    Object.values(valuesApi)[0] : "";
    const dia15 = (Object.values(valuesApi)[1]) !== undefined?
     Object.values(valuesApi)[1] : "";
    const dia30 = (Object.values(valuesApi)[2]) !== undefined?
     Object.values(valuesApi)[2] : "";
    const dia90 = (Object.values(valuesApi)[3]) !== undefined?
     Object.values(valuesApi)[3] : "";
        
    return (
        <ResultsStyled>
        <div>

        <h1>VOCÊ RECEBERÁ:</h1>
    
        <h2>Amanhã: {`R$` + (dia01/100)}</h2>
        <h2>Em 15 dias: {`R$` +(dia15/100)} </h2>
        <h2>Em 30 dias: {`R$` + (dia30/100)}</h2>
        <h2>Em 90 dias: {`R$` + (dia90/100)}</h2>
        </div>
      
        </ResultsStyled>
    )
}