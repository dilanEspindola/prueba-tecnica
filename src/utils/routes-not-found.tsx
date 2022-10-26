import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "@/components/not-found";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const RoutesNotFound: FC<Props> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
