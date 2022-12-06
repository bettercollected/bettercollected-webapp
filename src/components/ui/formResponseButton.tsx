import React from 'react';

import { useDispatch } from 'react-redux';

import { formResponseTabActions } from '@app/store/counter/formresponsetabSlice';

const FormResponseButton = (props: any) => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(formResponseTabActions.tabSelector(props.onclick))} type="button" className={`inline-flex flex-col items-center py-4 px-8 text-md font-medium ${props.class} border border-[#B0B0B0] hover:text-[#007AFF]`}>
            {props.icon}
            {props.name}
        </button>
    );
};

export default FormResponseButton;
