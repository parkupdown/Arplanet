interface TAdminList {
  title: string;
  route: string;
}

export const AdminList: TAdminList[] = [
  {
    title: "Artist",
    route: "artist",
  },
  {
    title: "CEO",
    route: "ceo",
  },
  { title: "Concert", route: "concert" },
  { title: "History", route: "history" },
  { title: "News", route: "news" },
];
