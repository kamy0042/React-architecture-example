import React,{ FC } from "react";

type FetchWrapperProps = {
    isLoading:boolean;
    isFailed:boolean;
    children:React.ReactNode;
}

export const FetchWrapper:FC<FetchWrapperProps> = ({children, isFailed, isLoading}) => (
    <>
        {isLoading && <p>Loading...</p>}
        {isFailed && <p>取得失敗!</p>}
        {isLoading || isFailed || children}
    </>
)
