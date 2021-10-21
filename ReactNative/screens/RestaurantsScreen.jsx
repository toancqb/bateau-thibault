import React from 'react'
import { Background, MainLayout } from "../components/templates"
import { Restaurants } from '../api'

const constructButtons = (items) => {
    const buttons = []
    items.forEach(item => {
        if(item.notFull){
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
        }
        else{
            buttons.push({
                id: item.id,
                icon: item.icon,
                title: item.name,
                onPress: (props) => props.navigation.navigate('Detail', {
                    img: item.image,
                    header: item.header,
                    subHeader: item.subHeader,
                    content: item.content,
                    fullWidth: true
                })
            })
        }
    })
    return buttons
}

export default function ProductsAndPromotions(props) {
    return (
        <Background>
            <MainLayout
                header={Restaurants.title}
                descriptions={Restaurants.descriptions}
                buttons={constructButtons(Restaurants.items)}
                navigationProps={props}
            />
        </Background>

    )
}


