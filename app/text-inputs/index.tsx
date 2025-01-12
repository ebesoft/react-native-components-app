import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';


const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    extra:''
  })

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'height' : undefined}
    >

      <ScrollView>
        <ThemedView margin>
          <ThemedTextInput 
            autoCapitalize={'words'}
            placeholder='Name'
            autoCorrect={false}
            onChangeText={( text ) => setForm({ ...form, name: text })}
          />

          <ThemedTextInput 
            placeholder='Email'
            autoCorrect={false}
            keyboardType='email-address'
            onChangeText={( text ) => setForm({ ...form, email: text })}
          />

          <ThemedTextInput 
            placeholder='Phone'
            autoCorrect={false}
            keyboardType='phone-pad'
            onChangeText={( text ) => setForm({ ...form, phone: text })}
          />

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard 
            style={{ marginBottom: isIOS ? 100 : 10 }}
          >
            <ThemedTextInput 
              placeholder='Extra'
              autoCorrect={false}
              onChangeText={( text ) => setForm({ ...form, extra: text })}
            />
          </ThemedCard>

        </ThemedView>
      </ScrollView>

    </KeyboardAvoidingView>
    
  );
};
export default TextInputsScreen;
