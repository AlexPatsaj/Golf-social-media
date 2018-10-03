export class Friend {
    friendsAbatarUrl: string;
    friendsName: string;
    friendsLocation: string;
}

export class PlayList {
    playListName: string;
    playListDetails: Array<PlaylistDetails>;
}

export class PlaylistDetails{
    playUrl: string;
    customerName: string;
    customerAvatarUrl: string;
    playTime: string;
}

export class Module{
    module: string;
    name: string;
    progress: number;
}

export class Course{
    coverUrl: string;
    chapter: number;
    chapterStr: string;
    chapterTitle: string;
    chapterDetail: string;
    progress: number;
    modules : Array<Module>;
}