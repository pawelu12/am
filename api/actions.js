export const fetchData = async link => {
  const response = await fetch(`nazwahostaserwera/${link}`, {
    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
    mode: 'cors'
  })
  return response.json()
}

export const postData = async (link, body) => {
  const response = await fetch(`nazwahostaserwera/${link}`, {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(body)
  })
}

export const putData = async (link, body) => {
  const response = await fetch(`nazwahostaserwera/${link}`, {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
    mode: 'cors',
    method: 'PUT',
    body: JSON.stringify(body)
  })
}