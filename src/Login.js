import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Button, Text, TouchableOpacity, Alert } from 'react-native';
import { ScreenOrientation } from 'expo';
import { MaterialIcons } from '@expo/vector-icons'
import * as Font from 'expo-font';

// import { Container } from './styles';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')

    useEffect(() => {
        async function Loadfont() {
            Font.loadAsync({
                'open-sans-bold': require('../assets/Fonts/Gelasio-Bold.ttf'),
            });
        }
        Loadfont();
    }, [])


    async function auth() {
        if (username == 'luismed' && senha == '123') {
            alert('bem vindo')
            navigation.navigate('Map')
        } else {
            alerta('Erro', 'Usuario ou Senha invalidos');
        }
    }

    function alerta(titulo, conteudo) {
        console.log('entrou no alerta com o titulo ' + titulo + ' e conteudo ' + conteudo);
        Alert.alert(
            `${titulo}`,
            `${conteudo}`,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.texto}>Entre na sua Conta</Text>
                <TextInput
                    onChangeText={text => { setUsername(text) }}
                    style={styles.Input}
                    placeholder="Entre com o seu Login"
                />
                <TextInput
                    onChangeText={text => { setSenha(text) }}
                    style={styles.Input}
                    secureTextEntry={true}
                    placeholder="Entre com a sua Senha"
                />
                <TouchableOpacity onPress={
                    () => {
                        auth()
                    }
                } style={styles.button}>
                    <MaterialIcons size={50} name="check-circle" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    Input: {
        backgroundColor: '#fff',
        width: 260,
        height: 35,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#000',
        textAlign: 'center',
        borderRadius: 12,
    },
    form: {
        width: 300,
        height: 450,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 24,
        marginBottom: 30,
        fontFamily: 'gelasio-bold',
    }
})