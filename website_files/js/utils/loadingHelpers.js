import React from 'react';
// import LandingSkeleton from "./../pages/LandingSkeleton";
// import BallotSkeleton from "./../pages/Ballot/BallotSkeleton";
import HeaderSkeleton from '../components/HeaderSkeleton';
import {
    getItem
} from './PrivacyManager';
import {
    IS_IE
} from './detectBrowser';
import Copy from './CopyManager';

const LOADING_TEXT = {
    EN: 'Loading',
    ES: 'Cargando',
    ZH: '載入中',
    JA: '読み込み中',
    KO: '로딩',
    VI: 'Tải',
    TL: 'Naglo-Load',
    HI: 'लोड हो रहा है',
    KM: 'ផ្ទុក',
    TH: 'โหลด',
    HY: 'բեռնում',
    FA: 'بارگذاری', //make sure rtl with ... ?
    RU: 'погрузка',
};

export function getLoadingScreen(path, withHeaderSkeleton) {
    let body;
    switch (path) {
        // case "/":
        //   body = <LandingSkeleton />;
        //   break;
        // case "/ballot":
        //   body = <BallotSkeleton />;
        //   break;
        default: body = ( <
            div
            /* A lot of this CSS is needed for proper layout in IE 11 */
            style = {
                {
                    width: '100vw',
                    textAlign: 'center',
                    margin: '50vh auto',
                    direction: getItem('selectedLanguage', 'EN') === 'FA' ? 'rtl' : 'ltr',
                }
            } >
            {
                IS_IE && Copy(undefined, 'ISB', getItem('selectedLanguage', 'EN')).zuc
            } {
                !IS_IE && LOADING_TEXT[getItem('selectedLanguage', 'EN')]
            }...
            <
            /div>
        );
    }

    return ( <
        > {
            withHeaderSkeleton && < HeaderSkeleton / >
        } {
            body
        } <
        />
    );
}