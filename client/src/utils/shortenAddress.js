export const shortenAddress = (address) => {
  return `${address.slice(0, 4)}...${address.slice(-5)}`;
};
