

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
        // return 'wss://3.37.198.102:8080/graphql'
        return 'wss://ec2.hangbal.net/graphql' //이전까지 잘 사용
        // return 'ws://3.37.198.102:8080/graphql'
    }
}

