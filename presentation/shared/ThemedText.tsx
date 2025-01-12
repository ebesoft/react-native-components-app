import { Text, TextProps } from 'react-native';

type TextType = 'normal' | 'h1' | 'h2' | 'h3' | 'semi-bold' | 'link';

interface Props extends TextProps {
    className?: string;
    type?: TextType
}

/*
font-normal
text-3xl
text-xl 

font-bold
*/

const ThemedText = ({ 
    className,
    type,
    children,
    ...rest
}: Props ) => {
    //className='mt-10 text-3xl text-light-text dark:text-dark-text'
    return <Text 
        className={[
            type === 'normal' ? 'font-normal' : undefined,
            type === 'h1' ? 'text-3xl' : undefined,
            type === 'h2' ? 'text-xl' : undefined,
            type === 'h3' ? 'text-lg' : undefined,
            type === 'semi-bold' ? 'font-semibold' : undefined,
            type === 'link' ? 'text-blue-500' : undefined,
            className,
        ].join(' ')}
        {...rest}>{children}</Text>
    
}

export default ThemedText