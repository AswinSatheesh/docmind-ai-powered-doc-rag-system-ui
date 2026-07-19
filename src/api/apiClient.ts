const BASE_URL = import.meta.env.BASE_URL || 'http://localhost:8080';

interface RequestOptions extends RequestInit{
    body?: any;
}

export const apiClient = async(endpoint : string,options: RequestOptions ={})=>{
    const url = `${BASE_URL}${endpoint}`;

    //build headers dynamically
    const headers =new Headers(options.headers);
    // Only set application/json if we are NOT sending Multipart FormData (for uploads)
    if(options.body && !(options.body instanceof FormData)){
        headers.set('Content-type','application/json');
        options.body = JSON.stringify(options.body);
    }

    const config: RequestInit = {
        ...options,
        headers,
    }

    const response = await fetch(url, config);

    // ⚠️ Fetch Quick: Check explicitly for HTTP error statuses (4xx, 5xx)
    if(!response.ok){
        const errorText = await response.text();
        throw new Error(errorText || `HTTP Error! Status: ${response.status}`);
    }

    // Handle plain text responses (like our AI answers/summaries) securely
    const contentType = response.headers.get('content-type');
    if(contentType && contentType.includes('application/json')){
        return response.json();
    }
    return response.text();
}