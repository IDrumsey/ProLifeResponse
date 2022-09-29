import { ReactNode, Children, isValidElement, cloneElement, ReactElement } from 'react'
import ArgumentCard, { ArgumentCardProps } from '../argument-card'
import styles from './debate-wrapper.module.scss'



// https://stackoverflow.com/a/55372465/17712310
interface Props {
    // https://blog.logrocket.com/using-react-children-prop-typescript/
    children?: ReactNode | ReactNode[]
}


export default function DebateWrapper({children}: Props) {

    const argumentCards = Children.map(children, (child, index) => {

        // https://www.smashingmagazine.com/2021/08/react-children-iteration-methods/
        // https://thewebdev.info/2021/09/18/how-to-pass-props-to-nested-child-components-in-react/

        if(isValidElement(child)){
            // https://stackoverflow.com/a/50298811/17712310
            // https://stackoverflow.com/a/73052952/17712310
            return cloneElement<ArgumentCardProps>(child as ReactElement<any>, {})
        }

    })

    return (
        <div className={styles.wrapper}>
            {
                argumentCards
            }
        </div>
    )
}