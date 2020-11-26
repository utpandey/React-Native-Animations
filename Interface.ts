export type Nav = {
  navigation?: any;
  current?: {
    progress?: any;
  };
};

export interface Props {
  id: number;
  image: string;
  profilePic: string;
  title: string;
  readtime: string;
  username: string;
  topic: string;
  likes: number;
}

export interface prop {
  route: {
    params: any;
  };
  navigation: any;
}
