export interface Module {
    id: number;
    code: string;
    name: string;
    description: string;
    parent: string;
    path: string;
    icon: string;
    version: number;
    isActive: boolean;
}