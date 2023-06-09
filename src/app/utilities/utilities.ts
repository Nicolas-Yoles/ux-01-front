export function parseAPIErrors(response:any): string[]{
    const result: string[] = [];
    if (response.error){
        if (typeof response.error === 'string'){
            result.push(response.error);
        } else{
            const mapErrors = response.error.errors;
            const tickets = Object.entries(mapErrors);
            tickets.forEach((array: any[])=>{
                const field = array[0];
                array[1].forEach(errorMessage =>{
                    result.push(`${field}: ${errorMessage}`);
                });
            })
        }
    }
     return result;
}