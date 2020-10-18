import React from 'react';
import InfoBlock from "./Blocks/InfoBlock/InfoBlock";
import MainBlock from "./Blocks/MainBlock/MainBlock";

const Content = () => {
    return (
        <div className={'app__content'}>
            <MainBlock/>
            <InfoBlock/>
        </div>
    );
};

export default Content;