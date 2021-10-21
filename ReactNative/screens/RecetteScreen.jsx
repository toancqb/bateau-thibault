import React from 'react';
import { Background } from '../components/templates';
import { MainLayout } from '../components/templates';
import { Recettes } from '../api';

const constructButtons = (items) => {
    const buttons = []
    items.forEach(item => {
        buttons.push({
            id: item.id,
            icon: item.icon,
            title: item.name,
            onPress: (props) => props.navigation.navigate('Detail', {
                img: item.image,
                header: item.header,
                subHeader: item.subHeader,
                content: item.content,
            })
        })
    })
    return buttons
}


export default function RecetteScreen(props) {
    return(
        <Background>
            <MainLayout
                header={Recettes.title}
                descriptions={Recettes.descriptions}
                buttons={constructButtons(Recettes.items)}
                navigationProps={props}
            />
        </Background>
    )
}

