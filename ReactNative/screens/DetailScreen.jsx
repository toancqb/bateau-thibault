import React from 'react';
import DetailPage from '../components/pages/detail';

export default function DetailScreen({route, navigation}) {
    return(
        <DetailPage route={route} navigation={navigation}/>
    )
}
