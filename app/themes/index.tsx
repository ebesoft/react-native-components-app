//import { useColorScheme } from 'react-native';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

import { useColorScheme } from "nativewind";
import { useThemeChangerContext } from '@/presentation/context/ThemedChangerContext';


const ThemesScreen = () => {

  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } = useThemeChangerContext();

  //const theme = useColorScheme()
  //const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    //setColorScheme(value ? 'dark' : 'light');
    toggleTheme()

    setDarkModeSettings({
      darkMode: value,
      systemMode: isSystemTheme,
    })
  }

  const setSystemMode = (value: boolean) => {
    if( value ){
      setDarkModeSettings({
        darkMode: darkModeSettings.darkMode,
        systemMode: true,
      })
      setSystemTheme()
    }
    
  }


  return (
    <ThemedView>
      <ThemedCard>

        <ThemedSwitch 
          value={darkModeSettings.darkMode}
          text="Dark Mode"
          className='mb-5'
          onValueChange={setDarkMode}
        />

        <ThemedSwitch 
          text="System Mode"
          className='mb-5'
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />

      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
