

export const BASE_URL = "http://localhost:8080";

export const serverAddress =()=>{
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return BASE_URL;
    } else {
        return BASE_URL
    }

}
export const basicAddress =()=>{
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return BASE_URL;
    } else {
        return BASE_URL
    }
}
export const webSoketAddress =()=>{
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return  'ws://localhost:8080/graphql'
    } else {
        return  'ws://localhost:8080/graphql'
    }
}

