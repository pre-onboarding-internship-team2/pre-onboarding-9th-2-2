import { TypedUseSelectorHook } from "react-redux";
import { AppThunkDispatch, RootState } from "../types";
import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
