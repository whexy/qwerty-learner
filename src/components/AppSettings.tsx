import React, { useCallback, useContext, useState } from 'react'

/**
 * Place global app settings here.
 */
export type AppSettings = {
  sound: boolean
  pronunciation: boolean
}

export type AppSettingsContextData = {
  settings: AppSettings
  dispatch: (settings: AppSettings) => void
}

const AppSettingsContext = React.createContext<AppSettingsContextData>({} as AppSettingsContextData)

export function useAppSettings(): AppSettings {
  const { settings } = useContext(AppSettingsContext)
  return settings
}

export function useSetSoundState(): [status: boolean, setSound: (state: boolean) => void] {
  const { settings, dispatch } = useContext(AppSettingsContext)
  const setSound = useCallback((state: boolean) => dispatch({ ...settings, sound: state }), [settings, dispatch])
  return [settings.sound, setSound]
}

export function useSetPronunciationState(): [status: boolean, setpronunciation: (state: boolean) => void] {
  const { settings, dispatch } = useContext(AppSettingsContext)
  const setpronunciation = useCallback((state: boolean) => dispatch({ ...settings, pronunciation: state }), [settings, dispatch])
  return [settings.pronunciation, setpronunciation]
}

const defaultSettings: AppSettings = {
  sound: true,
  pronunciation: true,
}

export const AppSettingsProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings)
  return <AppSettingsContext.Provider value={{ settings, dispatch: setSettings }}>{children}</AppSettingsContext.Provider>
}
