import { useEffect, useState } from "react";
import { httpAuth } from "../api/http";
import { TadminNews } from "../model/admin.model";

export const useAdminNews = () => {
  const [adminNews, setAdminNews] = useState<TadminNews[]>([]);

  useEffect(() => {
    httpAuth.get(`/admin/news`).then((res) => setAdminNews(res.data.data));
  }, []);

  return { adminNews };
};
