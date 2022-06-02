export async function fetchJson<Response = any>(url: string, init?: RequestInit): Promise<Response> {
    const response = await fetch(
      `https://swapi.dev/api/${url}/`,
      {
        ...init ?? {},
        mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
      })
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
  
    return response.json()
  }
  