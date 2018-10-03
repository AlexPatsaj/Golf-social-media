
 export class Vlog {
     id: number;
     name: string;
     title: string;
     content: string;
     like: boolean;
     viewed: boolean;
     postUrl: string;
     sourceUrl1: string;
     sourceUrl2: string;
     tracks: Array<Track>;
 }
 export class Track{
     url: string;
     label: string;
     kind: string;
     srclang: string;
 }
 