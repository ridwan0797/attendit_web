
const routes = [
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue'), meta: { name: 'Dashboard' } }
    ]
  },
  {
    path: '/pegawai',
    component: () => import('layouts/MainLayout.vue'),
    meta: { name: 'Pegawai' },
    children: [
      { path: '', component: () => import('pages/pegawai/Index.vue'), meta: { name: 'Pegawai' } },
      { path: '/pegawai/create', component: () => import('pages/pegawai/Form.vue'), meta: { name: 'Pegawai' } }
    ]
  },
  {
    path: '/perusahaan',
    component: () => import('layouts/MainLayout.vue'),
    meta: { name: 'Perusahaan' },
    children: [
      { path: '/perusahaan/lokasi', component: () => import('src/pages/perusahaan/lokasi/Index.vue'), meta: { name: 'Lokasi Perusahaan' } },
      { path: '/perusahaan/departemen', component: () => import('src/pages/perusahaan/departemen/Index.vue'), meta: { name: 'Departemen Perusahaan' } }
    ]
  },
  {
    path: '/absensi',
    component: () => import('layouts/MainLayout.vue'),
    meta: { name: 'Absensi' },
    children: [
      { path: '/absensi/', component: () => import('src/pages/absensi/absen/Index.vue'), meta: { name: 'Data Absensi' } },
      { path: '/absensi/import-absensi', component: () => import('src/pages/absensi/import/Index.vue'), meta: { name: 'Import Absensi' } }
    ]
  },
  {
    path: '/sakit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/sakit-izin/sakit/Index.vue'), meta: { name: 'Data Sakit' } }
    ]
  },
  {
    path: '/izin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/sakit-izin/izin/Index.vue'), meta: { name: 'Data Izin' } }
    ]
  },
  {
    path: '/shift-kerja',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/settings/shift/Index.vue'), meta: { name: 'Shift Kerja' } }
    ]
  },
  {
    path: '/hak-akses',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/settings/hak-akses/Index.vue'), meta: { name: 'Hak Akses' } }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Login.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
