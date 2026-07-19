export interface Document{
    id: string;
    name: string;
    uploadDate: string;
    fileSize: string;
    summary: string;
    status: 'Processed' | 'Processing' | 'Failed';
}