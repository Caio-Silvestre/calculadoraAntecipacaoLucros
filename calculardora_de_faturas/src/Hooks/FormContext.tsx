import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IFormRegister } from "../Components/Formulário";
import { api } from "../service/api";


interface IFormProviderProps {
    children : ReactNode
}
interface IFormContext {
    calculatePayments(data: IFormRegister): Promise<void>
    valuesApi: object
}


const FormContext = createContext<IFormContext>({} as IFormContext);

export const FormProvider = ({children}: IFormProviderProps) => {
    const [valuesApi, setValuesApi] = useState([]);
    
    /// Função de cálculo, requisição para API
    async function calculatePayments(data: IFormRegister){
        // Redefinindo os valores da data, pois a Requisição tem que ser feita em EN e o formulário está em PT-BR
        
        // Padrão da requisição ==> handleData
        const handleData = {
            amount: (data.valorVenda*100),
	        installments: (data.parcelas),
	        mdr: (data.mdr)
        }
        
        await api
        .post("",handleData)
        .then((response) =>{
            // Armazenamento no seu respectivo state ==Usado=em==> src/Components/Resultados
            setValuesApi(response.data);
            toast.success("Resultados disponíveis");
        })
        .catch((error) => {
            console.log(error)
            toast.error(`Algo deu errado, tente novamente` );
        })
            }




        return (
        <FormContext.Provider value={{
            calculatePayments,
            valuesApi,
        }}>

            {children}
        </FormContext.Provider>
    )
}

export function useFormContext(): IFormContext {
    const context = useContext(FormContext);

    return context
}