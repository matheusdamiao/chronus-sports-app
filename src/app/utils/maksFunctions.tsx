export function maskCurrencyBR(value: string): string {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2"); // Adding decimal separator
    value = value.replace(/(?=(\d{3})+(\D))\B/g, "."); // Using dot as thousands separator
    return value; // Adding currency symbol
  }
export function maskBrazilianPhoneNumber(value: string): string {
    value = value.replace(/\D/g, ""); // Remove all non-digit characters
    value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, "+$1 ($2) $3-$4"); // Format as +55 (00) 0000-0000
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