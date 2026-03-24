import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '@/pages/auth';
import { LoginMfa } from '@/pages/auth mfa';
import { Home } from '@/pages/home';
import {
  DashboardPage,
  ConfigCodePage,
  ConfigWifiListPage,
  HotelListPage,
  LoginByAddressPage,
  ManualLoginPage,
  DeviceManagerPage,
  RoomListPage,
  StatutLoginsPage,
  WebsitesManagerPage,
  WifiCodePage,
} from '@/pages/mboalink';
import { routes } from './routes';

// Importez vos autres pages quand elles seront prêtes
// import { AdminLayout } from '@/pages/AdminLayout';
// import { UserLayout } from '@/pages/UserLayout';
// import { AuthGuard } from '@/guards';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route de login */}
        <Route path={routes.public.login} element={<LoginPage />} />

        {/* Route MFA */}
        <Route path={routes.public.mfa} element={<LoginMfa />} />

        {/* Pages MboaLink */}
        <Route path={routes.public.home} element={<Home />} />
        <Route path={routes.public.dashboard} element={<DashboardPage />} />
        <Route path={routes.public.devices} element={<DeviceManagerPage />} />
        <Route path={routes.public.wifiCode} element={<WifiCodePage />} />
        <Route path={routes.public.loginByAddress} element={<LoginByAddressPage />} />
        <Route path={routes.public.statusLogins} element={<StatutLoginsPage />} />
        <Route path={routes.public.manualLogin} element={<ManualLoginPage />} />
        <Route path={routes.public.websitesManager} element={<WebsitesManagerPage />} />
        <Route path={routes.public.configCode} element={<ConfigCodePage />} />
        <Route path={routes.public.hotels} element={<HotelListPage />} />
        <Route path={routes.public.rooms} element={<RoomListPage />} />
        <Route path={routes.public.configWifi} element={<ConfigWifiListPage />} />

        {/* Routes protégées - à décommenter quand prêt */}
        {/* 
        <Route 
          path="/admin/*" 
          element={
            <AuthGuard requiredRole="admin">
              <AdminLayout />
            </AuthGuard>
          } 
        />
        
        <Route 
          path="/user/*" 
          element={
            <AuthGuard requiredRole="user">
              <UserLayout />
            </AuthGuard>
          } 
        />
        */}
        
        {/* Redirection par défaut vers login */}
        <Route path="/" element={<Navigate to={routes.public.login} replace />} />
        
        {/* 404 - redirige vers login */}
        <Route path="*" element={<Navigate to={routes.public.login} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

// Exporter aussi les routes pour utilisation ailleurs
export { routes } from './routes';
