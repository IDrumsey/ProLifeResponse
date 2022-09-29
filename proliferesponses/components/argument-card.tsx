import { Paper, Text } from '@mantine/core';
import {FunctionComponent} from 'react'

// https://bobbyhadz.com/blog/react-binding-element-implicitly-has-an-any-type
export type ArgumentCardProps = {
    bgColor: string,
    content: string,
    fontColor: string,
    position: 'left' | 'right'
}

const ArgumentCard: FunctionComponent<ArgumentCardProps> = ({bgColor, content, fontColor, position = 'left'}) => {

    return (
        // https://stackoverflow.com/a/68164259/17712310
        // https://stackoverflow.com/questions/14727044/what-is-the-difference-between-types-string-and-string
        <Paper
        p='lg'
        shadow="sm"
        style={
            {
                backgroundColor: bgColor, 
                width: '70%', marginLeft: position === 'right' ? 'auto' : 0, 
                marginRight: position === 'left' ? 'auto' : 0}
        }>
            <Text color={fontColor} sx={{fontWeight: 500}}>{content}</Text>
        </Paper>
    )
}


export default ArgumentCard