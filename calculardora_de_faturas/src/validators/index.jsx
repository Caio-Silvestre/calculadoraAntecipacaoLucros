import * as yup from "yup"

export const formSchema = yup.object().shape({
    valorVenda: yup
      .number()
      .typeError("Insira um número válido")
      .required("Valor é Obrigatório")
      .min(100, "valor mínimo aceito R$100"),
      parcelas: yup
      .number()
      .typeError("Insira um número válido")
      .required("Valor é Obrigatório")
      .min(1, "Insira uma quatidade de meses válida")
      .max(12, "Quantidade máxima de 12 meses"),
      mdr: yup
      .number()
      .typeError("Insira um número válido")
      .min(1, "Insira uma quatidade válida")
      .required("Insira a porcentagem de mdr (Ex: 3)"),
  });