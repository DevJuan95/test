const fetchData = async (query: string, limit:number, offset:number) => {
    const encodedQuery = encodeParams(query, limit,offset);
    const response = await fetch(encodedQuery, { method: 'GET'});
    if (response.ok) {
        const data = response.json();
        return data;
    } else {
        throw new Error(`Respuesta invalida desde el servidor: ${response.status}`)
    }

}
const encodeParams = (query: string, limit:number, offset:number): string => `/api/search?q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`;

export default fetchData;