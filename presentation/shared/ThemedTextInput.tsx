import { TextInput, TextInputProps } from "react-native";


interface Props extends TextInputProps {
    className?: string;
}

const ThemedTextInput = ({ className, ...rest }: Props) => {
    return <TextInput 
                className={`text-black dark:text-white rounded-xl py-4 px-2 shadow-black/5 ${className}`}
                placeholderTextColor='grey'
                {...rest}
            />
}

export default ThemedTextInput