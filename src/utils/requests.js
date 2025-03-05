export async function fetchRequest(requestURL) {
  const response = await fetch(requestURL);
  const responseJSON = await response.json();
  return responseJSON;
}