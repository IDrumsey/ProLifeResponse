import { Paper, Text, createStyles } from '@mantine/core';
import {FunctionComponent} from 'react'

// https://bobbyhadz.com/blog/react-binding-element-implicitly-has-an-any-type
export type ArgumentCardProps = {
    bgColor: string,
    content: string,
    fontColor: string,
    position: 'left' | 'right'
}


// https://mantine.dev/styles/responsive/#media-queries-in-createstyles
const useStyles = createStyles((theme) => ({
    cardWrapper: {
        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            width: '65%'
        },

        [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
            width: '80%'
        },
        
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: '100%'
        },

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '100%'
        },

        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            width: '100%'
        }
    }
}))



const ArgumentCard: FunctionComponent<ArgumentCardProps> = ({bgColor, content, fontColor, position = 'left'}) => {


    const {classes} = useStyles()

    return (
        // https://stackoverflow.com/a/68164259/17712310
        // https://stackoverflow.com/questions/14727044/what-is-the-difference-between-types-string-and-string
        <Paper
        p='lg'
        shadow="sm"
        className={classes.cardWrapper}
        style={
            {
                backgroundColor: bgColor, 
                marginLeft: position === 'right' ? 'auto' : 0, 
                marginRight: position === 'left' ? 'auto' : 0}
            }
        >
            <Text color={fontColor} sx={{fontWeight: 500}}>{content}</Text>
        </Paper>
    )
}


export default ArgumentCard