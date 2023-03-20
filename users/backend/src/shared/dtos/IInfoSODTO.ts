export interface ip {
    name: string;
    address: string[];
}

export interface IInfoSODTO {
    process:string;
    memory: number;
    memory_free:number;
    disk: string[];
    ips: ip[];
}


