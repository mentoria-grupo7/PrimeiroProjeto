import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import { LoginComponents } from "../../components/LoginComponents";
import { Title } from "../../components/TitleComponent";
import { ButtonComponents } from "../../components/ButtonComponents";

//StateFull Components
export const LoginScreen = () => {
    const [email, setEmail ] = useState('')
    const [senha, setSenha ] = useState('')
    const [ showEmail, setShowEmail ] = useState(false)

    const onChangeEmail = (valor) => setEmail(valor)
    
    const onChangeSenha = (valor) => setSenha(valor)

    const onShowEmail = () => {
        if(showEmail === true) {
            return (
                <Text>Email: {email}</Text>
            )
        }else{
            return (
                <Text>ainda não é para exibir o email</Text>
            )
        }
        
    }

    return (
        <View style={styles.container}>
            <Title title={'Login'} />
           
            <Text>Senha: {senha}</Text>
            <LoginComponents 
                onChangeEmail={onChangeEmail}
                onChangeSenha={onChangeSenha}
            />

            {onShowEmail()}

            <ButtonComponents 
                description={'Show email'} 
                onPress={()=> setShowEmail(true)}
            />
        </View>
    )
}