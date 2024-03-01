export default function formatData(data) {
  let formattedData = Math.abs(data);
  if (formattedData > 999999) formattedData = `${data / 1000000}M`;
  else if (formattedData > 9999) formattedData = `${data / 1000}k`;
  return formattedData;
}
