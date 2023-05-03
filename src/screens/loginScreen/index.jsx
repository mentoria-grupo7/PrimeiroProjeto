import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import { LoginComponents } from "../../components/LoginComponents";
import { Title } from "../../components/TitleComponent";

//StateFull Components
export const LoginScreen = () => {
    const [email, setEmail ] = useState('')
    const [senha, setSenha ] = useState('')

    const onChangeEmail = (valor) => setEmail(valor)
    
    const onChangeSenha = (valor) => setSenha(valor)

    return (
        <View style={styles.container}>
            <Title title={'Login'} />
           
            <LoginComponents 
                onChangeEmail={onChangeEmail}
                onChangeSenha={onChangeSenha}
            />

        </View>
    )
}