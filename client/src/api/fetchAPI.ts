const fetchData = async (query: string) => {
    const encodedQuery = encodeParams(query);
    const response = await fetch(encodedQuery, { method: 'GET', });
    if (response.ok) {
        const data = response.json();
        return data;
    } else {
        throw new Error(`Respuesta invalida: ${response.status}`)
    }

}
const encodeParams = (query: string): string => `/api/search?q=${encodeURIComponent(query)}`;

export default fetchData;