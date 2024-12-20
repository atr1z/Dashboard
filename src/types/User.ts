import Module from "module";

export type User = {
    name: string;
    lastName: string;
    email: string;
    modules: Module[];
};