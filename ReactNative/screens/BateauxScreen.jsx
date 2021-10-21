import React from 'react'
import { Background, MainLayout } from "../components/templates"
import tig from '../assets/images/TIG.png'
import { Bateaux } from '../api'

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

export default function BateauxScreen(props) {
    return (
        <Background>
            <MainLayout
                header={Bateaux.title}
                descriptions={Bateaux.descriptions}
                buttons={constructButtons(Bateaux.items)}
                navigationProps={props}
            />
        </Background>

    )
}


