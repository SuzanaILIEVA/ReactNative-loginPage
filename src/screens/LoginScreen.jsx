import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../../assets/images/background.png')}
        className="h-full w-full absolute"
      />

      {/* lights pictures */}
      <View className="flex-row absolute justify-around w-full">
        <Animated.Image
          entering={FadeInUp.delay(100).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require('../../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(300).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require('../../assets/images/light.png')}
        />
      </View>

      {/* title and form */}

      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center mt-5">
          <Animated.Text
            entering={FadeInUp.delay(200).duration(1000).springify()}
            className="text-5xl font-bold tracking-wider text-white">
            Login
          </Animated.Text>
        </View>
        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 w-full p-5 rounded-2xl ">
            <TextInput placeholder="E-mail" placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(200).springify()}
            className="bg-black/5 w-full p-5 rounded-2xl ">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>
          {/* buttons */}
          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            className="w-full">
            <TouchableOpacity className="w-full p-3 bg-sky-500 rounded-2xl">
              <Text className="text-white font-bold text-2xl text-center ">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="flex-row justify-center">
            <Text className="text-[16px] text-black">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.push('SignUp')}>
              <Text className="text-sky-500 font-bold text-[16px] ml-1">
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
