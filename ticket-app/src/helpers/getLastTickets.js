export const getLastTickets = async () => {
  const resp = await fetch("http://localhost:8080/last");
  const data = await resp.json();
  console.log(data.lastTickets);
  return data.lastTickets;
};
