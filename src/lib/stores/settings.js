import { writable } from 'svelte/store';

const defaultSettings = {
  colorScheme: 'light',
  language: 'en',
  fontSize: 12
};

function createSettingsStore() {
  const {subscribe, set, update} = writable({
    ...defaultSettings,
  });
  return {
    subscribe,
    set,
    update,
    updateSetting: (settings, value) => {
      update((settings) => ({
        ...settings,
        language: settings.language == 'vi' ? 'en' : 'vi'
      }));
    },
    toggleColorSetting: () => {
      update((settings) => ({
        ...settings,
        colorScheme: settings.colorScheme == 'dark' ? 'light' : 'dark'}));
    },
    reset: () => {
      set({...defaultSettings});
    }
  };
}

export default createSettingsStore();