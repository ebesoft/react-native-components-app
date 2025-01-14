import useAnimation from "@/hooks/useAnimation";
import { useState } from "react";
import { ActivityIndicator, StyleProp, View, ImageStyle, Image, Animated } from "react-native"

interface Props {
    uri: string
    style: StyleProp<ImageStyle>
}

const FadeInImage = ({ uri, style }: Props) => {


    const [isLoading, setIsLoading] = useState(true);

    const { animatedOpacity, fadeIn} = useAnimation()

    return (
        <View 
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                }}
        >
            
        {
            isLoading && (
                <ActivityIndicator size={40} color='grey'
                    style={{ position: 'absolute'}}
                />
            )
        }
        
        {/* Se utiliza Animation para dar efecto a la imagen para ios */}
        <Animated.Image 
            source={{ uri }}
            style={[ style, { opacity: animatedOpacity } ]}
            onLoadEnd={() => {
               fadeIn({
                duration: 2000
               })
               setIsLoading(false) 
            }}
        />
            
            
        </View>
    )
}

export default FadeInImage