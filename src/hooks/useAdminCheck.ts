import { useEffect } from "react";
import { fetchCheckAdmin } from "../api/admin.api";
import { useNavigate } from "react-router-dom";

export const useAdminCheck = () => {
  const navigator = useNavigate();
  useEffect(() => {
    const check = async () => {
      const response = await fetchCheckAdmin();
    };
    try {
      check();
    } catch (error) {}
  }, []);
};
