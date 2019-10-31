
export interface Customer {
    id: number;
    name: string;
    contact: string;
    telephone: string;
    location: string;
    employees: number;
    hasRains?: boolean;
}

export interface BartChartData {
    name: string;
    value: number;
    location?: string;
}
