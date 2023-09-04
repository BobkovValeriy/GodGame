import { useSelector } from "react-redux";

export const useTexts = (property) => {
    return useSelector((state) => state.langagueReducer[property])
};
