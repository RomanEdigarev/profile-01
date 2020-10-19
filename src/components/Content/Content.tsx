import React from 'react';
import InfoBlock from "./Blocks/InfoBlock/InfoBlock";
import MainBlock from "./Blocks/MainBlock/MainBlock";
import FormBlock from "./Blocks/FormBlock/FormBlock";

const Content = () => {
    return (
        <div className={'app__content'}>
            <MainBlock/>
            {/*<InfoBlock/>*/}
            <FormBlock/>
        </div>
    );
};

export default Content;