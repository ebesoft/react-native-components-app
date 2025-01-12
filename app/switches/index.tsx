import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { Switch } from 'react-native';

const Switches = () => {

  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: false,
  })

  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>
        {/*<Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={state.isActive ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={( value ) => setState({ ...state, isActive: value })}
            value={state.isActive}
          />*/}

          <ThemedSwitch 
            className='mb-4'
            text="Activo"
            onValueChange={(value) => setState({ ...state, isActive: value })}
            value={state.isActive}
          />

          <ThemedSwitch 
            className='mb-4'
            text="Hungry"
            onValueChange={(value) => setState({ ...state, isHungry: value })}
            value={state.isHungry}
          />

          <ThemedSwitch 
            className='mb-4'
            text="Happy"
            onValueChange={(value) => setState({ ...state, isHappy: value })}
            value={state.isHappy}
          />

        </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
