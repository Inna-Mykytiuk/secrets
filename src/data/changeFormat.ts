export const reformatPhoneNumber = (phoneNumber: string): string => {
  const numericOnly = phoneNumber.replace(/\D/g, "");

  const country = numericOnly.slice(0, 2);
  const operator = numericOnly.slice(2, 5);
  const rest = numericOnly.slice(5);

  const formattedNumber = `+${country} (${operator}) ${rest.slice(
    0,
    2
  )} ${rest.slice(2, 4)} ${rest.slice(4)}`;

  return formattedNumber;
};
