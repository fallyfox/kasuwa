import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";
import { Formik } from "formik";
import { Themes } from "../assets/themes";
import { TextInput, Button } from "react-native-paper";

export function Signup() {
    return (
        <CustomSafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headerText}>Create a Kasuwa account</Text>
                <Formik
                    initialValues={{ email: '', password: '', passwordConfirmation: '' }}
                    onSubmit={(event, values) => { }}
                    validationSchema={null}>
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
                        return (
                            <View style={styles.formBlock}>
                                <TextInput
                                    mode="outlined"
                                    placeholder="email address"
                                    style={{ fontSize: 24, color: '#3C4048', marginBottom: Themes.sizes[1] }}
                                    keyboardType='email-address'
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email} />
                                <Text style={{ display: touched.email && errors.email ? 'flex' : 'none', color: 'red' }}>
                                    {touched.email && errors.email}
                                </Text>

                                <TextInput
                                    mode="outlined"
                                    placeholder="create password"
                                    style={{ fontSize: 24, color: '#3C4048', marginBottom: Themes.sizes[1] }}
                                    secureTextEntry={true}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password} />
                                <Text style={{ display: touched.password && errors.password ? 'flex' : 'none', color: 'red' }}>
                                    {touched.password && errors.password}
                                </Text>

                                <TextInput
                                    mode="outlined"
                                    placeholder="confirm password"
                                    style={{ fontSize: 24, color: '#3C4048', marginBottom: Themes.sizes[3] }}
                                    secureTextEntry={true}
                                    onChangeText={handleChange('passwordConfirmation')}
                                    onBlur={handleBlur('passwordConfirmation')}
                                    value={values.passwordConfirmation} />

                                <Button
                                    mode="outlined"
                                    buttonColor={Themes.colors.blue400}
                                    textColor='white'
                                    style={{ borderRadius: 8, paddingVertical: 4 }}
                                    onPress={handleSubmit}>Create Acccount</Button>
                            </View>
                        )
                    }}
                </Formik>
            </View>

        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Themes.sizes[2]
    },
    headerText: {
        fontSize: Themes.fontSizePoint.h2,
        fontWeight: '200'
    },
    formBlock: {
        paddingTop: Themes.sizes[4]
    },
});

