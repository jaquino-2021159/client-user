import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from '../../../shared/constants/theme';
import Input from '../../../shared/components/common/Input';
import Button from '../../../shared/components/common/Button';
 
import KinalSportsLogo from '../../../../assets/kinal_sports.png';
 
const LoginScreen = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            emailOrUsername: '',
            password: ''
        }
    });
 
    const onSubmit = async (data) => {
 
    }
 
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Image
                            source={KinalSportsLogo}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={styles.subtitle}>Bienvenido de Nuevo</Text>
                    </View>
 
                    <View style={styles.form}>
                        <Controller
                            control={control}
                            rules={{ required: "Este campo es obligatorio" }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Correo Electrónico o Nombre de Usuario"
                                    placeholder="Ingresa tu correo o nombre de usuario"
                                    value={value}
                                    onChangeText={onChange}
                                    error={errors.emailOrUsername?.message}
                                />
                            )}
                            name="emailOrUsername"
                        />
                        <Controller
                            control={control}
                            rules={{ required: "Este campo es obligatorio" }}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Contraseña"
                                    placeholder="● ● ● ● ● ●"
                                    value={value}
                                    onChangeText={onChange}
                                    secureTextEntry
                                    error={errors.password?.message}
                                />
                            )}
                            name="password"
                        />
 
                        <Button
                            title="Iniciar Sesión"
                            onPress={handleSubmit(onSubmit)}
                            style={styles.button}
                        />
 
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>No tienes una cuenta?</Text>
                            <Text style={styles.link} onPress={() => navigation.navigate("Register")}>Regístrate aquí</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        padding: SPACING.xl,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        alignItems: "center",
        marginBottom: SPACING.xxl,
    },
    logo: {
        height: 80,
        width: 200,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.secondary,
        marginTop: SPACING.sm,
    },
    card: {
        width: "100%",
        maxWidth: 440,
        backgroundColor: COLORS.surface,
        borderRadius: 28,
        padding: SPACING.xl,
        ...SHADOWS.md,
    },
    form: {
        width: "100%",
    },
    button: {
        marginTop: SPACING.lg,
    },
    footer: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: SPACING.xl,
    },
    footerText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
        marginBottom: SPACING.xs,
    },
    link: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: "700",
    },
});
 
 
export default LoginScreen;
 