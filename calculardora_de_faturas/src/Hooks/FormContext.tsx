import { createContext, ReactNode, useContext } from "react";
import { IFormRegister } from "../Components/Formulário";


interface IFormProviderProps {
    children : ReactNode
}

interface IFormContext {
    calculatePayments(data: IFormRegister): void
}


const FormContext = createContext<IFormContext>({} as IFormContext);


export const FormProvider = ({children}: IFormProviderProps) => {
        async function calculatePayments(data: IFormRegister){}

        return (
        <FormContext.Provider value={{
            calculatePayments,
        
        }}>

            {children}
        </FormContext.Provider>
    )
}

export function useFormContext(): IFormContext {
    const context = useContext(FormContext);

    return context
}