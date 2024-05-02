export function maskCurrencyBR(value: string): string {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2"); // Adding decimal separator
    value = value.replace(/(?=(\d{3})+(\D))\B/g, "."); // Using dot as thousands separator
    return value; // Adding currency symbol
  }
export function maskBrazilianPhoneNumber(value: string): string {
  console.log(value);
    value = value.replace(/\D/g, ""); // Remove all non-digit characters
    value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, "+$1 ($2) $3-$4"); // Format as +55 (00) 0000-0000
    return value;
  }

 export function maskBrazilianPhoneNumber2(value: string): string {
    value = value.replace(/\D/g, ""); // Remove all non-digit characters
    
    if (value.length > 2) {
      value = `+${value.slice(0, 2)} (${value.slice(2)}`; // Add opening parenthesis  
    }
    if (value.length > 8) {
      value = `${value.slice(0, 7)}) ${value.slice(7)}`; // Add closing parenthesis
    }
    if (value.length > 13) {
      value = `${value.slice(0, 13)}-${value.slice(13)}`; // Add dash and limit to 4 digits
    }
    return value;
  }

  export function maskUSPhoneNumber2(value: string): string {
    value = value.replace(/\D/g, ""); // Remove all non-digit characters
  
    // Apply formatting based on the number of digits
    if (value.length > 0) {
      value = `+1 (${value.slice(0, 3)}`; // Add opening parenthesis
    }
    if (value.length > 3) {
      value += `) ${value.slice(3, 6)}`; // Add closing parenthesis
    }
    if (value.length > 6) {
      value += `-${value.slice(6, 10)}`; // Add dash
    }
  
    return value;
  }


export function maskCurrencyUS(value: string): string {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, " ");
    return value;
  }


export function maskUSPhoneNumber(value: string): string {
  value = value.replace(/\D/g, ""); // Remove all non-digit characters
  value = value.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3"); // Format as (000) 000-0000
  return value;
}



export function maskBirthday(value: string): string {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, "");

  // Apply formatting based on the number of digits
  let formattedValue = "";
  if (digits.length > 0) {
    formattedValue = `${digits.slice(0, 2)}`; // Add day
  }
  if (digits.length > 2) {
    formattedValue += `/${digits.slice(2, 4)}`; // Add month
  }
  if (digits.length > 4) {
    formattedValue += `/${digits.slice(4, 8)}`; // Add year
  }

  // Handle case where user deletes characters
  if (value.length < formattedValue.replace(/\D/g, "").length) {
    formattedValue = formattedValue.slice(0, value.length);
  }

  return formattedValue;
}




export function maskCPF(cpf: string): string {
  cpf = cpf.replace(/\D/g, "");    
  cpf = cpf.replace(/^(\d{3})/g, "$1.");
  cpf = cpf.replace(/(\d{3})(\d{3})/g, "$1.$2-");        
  return cpf;
}