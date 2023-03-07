import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/configStore";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
