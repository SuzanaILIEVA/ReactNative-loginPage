import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full h-full bg-white">
      <StatusBar barStyle="light-content" />
      <Image
        className="w-full h-full absolute"
        source={require('../../assets/images/background.png')}
      />

      {/* lights */}
      <View className="w-full flex-row justify-around absolute">
        <Animated.Image
          entering={FadeInUp.delay(100).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require('../../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(300).duration(1000).springify()}
          className="h-[160] w-[65] "
          source={require('../../assets/images/light.png')}
        />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center mt-5">
          <Animated.Text
            className="text-5xl font-bold tracking-wider text-white"
            entering={FadeInUp.delay(200).duration(1000).springify()}>
            SignUp
          </Animated.Text>
        </View>
        {/* form */}

        <View className="flex items-center mx-4 space-y-4 mt-10">
          <Animated.View
            className="w-full bg-black/5 p-2 rounded-2xl"
            entering={FadeInDown.duration(1000).springify()}>
            <TextInput placeholder="Username" placeholderTextColor="gray" />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-2 rounded-2xl w-full">
            <TextInput placeholder="E-mail" placeholderTextColor="gray" />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="bg-black/5 w-full rounded-2xl p-2">
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
            />
          </Animated.View>

          {/* button */}
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="w-full">
            <TouchableOpacity className="bg-sky-500 p-3 rounded-2xl">
              <Text className="text-white font-bold text-2xl text-center">
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            className="flex-row">
            <Text className="text-[16px] text-black">
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text className="text-[16px] text-sky-500 font-bold">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
