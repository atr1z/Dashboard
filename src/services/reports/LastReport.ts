export type LastReport = {
    id: number;
    name: string;
    lastName: string;
    email: string;
    lastIssue:{
        id: number;
        received: string;
        latitude: number;
        longitude: number;
    };
}