import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/types";
import { RootState } from "../redux";
import fetchData from "../redux/function/fetchData";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => {
    return state.data.data;
  });
  useEffect(() => {
    dispatch(fetchData());
    console.log(data);
  }, [dispatch]);

  return <section></section>;
};

export default MainPage;
