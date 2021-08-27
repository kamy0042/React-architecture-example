import React, { FC } from 'react';

type FetchWrapperProps = {
    isFetched: boolean;
    children: React.ReactNode;
};

export const FetchWrapper: FC<FetchWrapperProps> = ({ children, isFetched }) => (
    <>
        {!isFetched && <p>Loading...</p>}
        {isFetched && children}
    </>
);
