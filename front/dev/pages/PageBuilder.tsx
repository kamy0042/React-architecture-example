import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { httpSlice } from '~/apps/httpHandler/http.slice';
import { RootState } from '~/apps/store';

type PageBuilderProps = {
    body: JSX.Element;
};

export const PageBuilder: FC<PageBuilderProps> = ({ body }) => {
    const dispatch = useDispatch();
    const error = useSelector((store: RootState) => store.http.error);

    useEffect(
        () => () => {
            dispatch(httpSlice.actions.initHttpState());
        },
        [dispatch],
    );

    return (
        <>
            {error && <h1>{`Error:${error}`}</h1>}
            {body}
        </>
    );
};
