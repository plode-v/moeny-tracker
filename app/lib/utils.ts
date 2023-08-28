
// FIXME: Make change currentcy to dynamic currency
export const currencyFormat = (amount: number) => {
    const formatter = Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency"
    });

    return formatter.format(amount);
}