import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routers/index.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { App, ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App>
            <Provider store={store}>
                <HelmetProvider>
                    <PersistGate loading={null} persistor={persistor}>
                        <ConfigProvider locale={enUS}>
                            <RouterProvider router={router} />
                        </ConfigProvider>
                    </PersistGate>
                </HelmetProvider>
            </Provider>
        </App>
    </StrictMode>,
);
