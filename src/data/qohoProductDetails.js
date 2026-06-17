const noImg = '';

const makeProduct = (id, model, name) => ({
  id,
  model,
  image: noImg,
  name,
});

export const QOHO_PRODUCT_CATEGORIES = [
  {
    id: 'qoho-ai-dvr-nvr',
    label: 'QOHO AI DVR / NVR Systems',
    desc: 'AI-powered mobile DVR, NVR and smart dash camera systems',
    products: [
      makeProduct('qh-ai-4g-dash-camera', 'AI 4G Dash Camera', '2CH/4CH 1080P AI Camera with 4G GPS WiFi'),
      makeProduct('qh-mdvr8101s', 'MDVR8101S', '1080P HD Mobile DVR Camera'),
      makeProduct('qh-mdvr101n', 'MDVR101N', '4G GPS SD Card Mobile DVR'),
      makeProduct('qh-three-sd-card-ai-mobile-dvr', 'Three SD Card AI Mobile DVR', '8CH AI 1080P Mobile DVR'),
      makeProduct('qh-ai-hdd-sd-mobile-dvr', 'AI HDD/SD Mobile DVR', '8CH AI 4TB HDD/SSD Mobile DVR'),
      makeProduct('qh-hybrid-mobile-nvr', 'Hybrid Mobile NVR', '8CH AHD + 4CH IPC / 12CH IPC NVR'),
      makeProduct('qh-smallest-mobile-dvr', 'Smallest Mobile DVR', '1CH to 4CH Waterproof Mobile DVR'),
      makeProduct('qh-4ch-mobile-dvr-system-kit', '4CH Mobile DVR System Kit', '1080P Cameras + Dual Lens DVR Camera'),
      makeProduct('qh-8ch-ahd-mobile-dvr-system', '8CH AHD Mobile DVR System', 'GPS 4G WiFi AHD Mobile DVR System'),
    ],
  },
  {
    id: 'qoho-ai-cameras',
    label: 'QOHO AI Cameras',
    desc: 'DMS, ADAS, BSD, counting, recognition and alcohol detection cameras',
    products: [
      makeProduct('qh-mc810ip', 'QH-MC810IP', 'AI Smart IP People Counting Camera'),
      makeProduct('qh-facial-palmprint-recognition-camera', 'Facial & Palmprint Recognition Camera', 'Driver Authentication Camera'),
      makeProduct('qh-ai-alcohol-detection-camera', 'AI Alcohol Detection Camera', 'Contactless Automatic Alcohol Detection'),
      makeProduct('qh-starlight-camera', 'Starlight Camera', 'AI Low-Light Full-Color Night Vision Camera'),
      makeProduct('qh-dashboard-dms-camera', 'Dashboard Installation DMS', 'Driver Monitoring System Camera'),
      makeProduct('qh-side-dms-camera', 'Side Installation DMS', 'Side Driver Monitoring Camera'),
      makeProduct('qh-anti-explosive-dms-camera', 'Anti-Explosive DMS Camera', 'DMS Camera for Oil/Gas and Truck Fleets'),
      makeProduct('qh-facial-recognition-terminal', 'Facial Recognition Terminal', 'Face Recognition Biometric Machine'),
      makeProduct('qh-vehicle-people-counting-camera', 'Vehicle People Counting Camera', 'Passenger Counting Camera'),
      makeProduct('qh-dual-lens-vehicle-counting-camera', 'Dual Lens Vehicle Counting Camera', 'Passenger Flow Counting Camera'),
      makeProduct('qh-dual-lens-head-counting-camera', 'Dual Lens Head Counting Camera', 'People Counting Camera for Establishments'),
    ],
  },
  {
    id: 'qoho-body-cameras',
    label: 'QOHO Body Cameras',
    desc: 'Portable 4G/5G body cameras for field security and law enforcement',
    products: [
      makeProduct('qh-ai-1080p-face-recognition-body-camera', 'AI 1080P Face Recognition Body Camera', 'AI Body Camera'),
      makeProduct('qh-1080p-portable-body-camera', '1080P Portable Body Camera', 'Portable Body Camera'),
      makeProduct('qh-5g-ai-body-camera', '5G AI Body Camera', '5G AI Enhanced Imaging Body Camera'),
      makeProduct('qh-4g-ai-body-camera-mini-cam', '4G AI Body Camera with 720P Mini Cam', '4G AI Imaging & Positioning Body Camera'),
      makeProduct('qh-advanced-hd-body-camera', 'Advanced HD Body Camera', 'HD Recording Body Camera'),
      makeProduct('qh-720p-mini-cam', '720P Mini Cam', 'Mini USB Digital Camera'),
    ],
  },
  {
    id: 'qoho-vehicle-cameras',
    label: 'QOHO Vehicle Cameras',
    desc: 'Front, rear, side, dome, IP and anti-explosive vehicle cameras',
    products: [
      makeProduct('qh-bb60v', 'BB60V', '1080P Anti-Explosive Camera'),
      makeProduct('qh-mc1205', 'MC1205', '1080P Bullet Front Road Camera'),
      makeProduct('qh-mc620', 'MC620', '1080P Dual Lens Vehicle Camera'),
      makeProduct('qh-mc200d', 'MC200D', '2MP Dual View IP Camera'),
      makeProduct('qh-inside-140-cabin-camera', 'Inside 140° Cabin Camera', 'Wide View Cabin Camera'),
      makeProduct('qh-mc018', 'MC018', '1080P 18pcs LED Rear View Camera'),
      makeProduct('qh-mc076', 'MC076', '1080P Mini Vehicle IR Rear Camera'),
      makeProduct('qh-mc512', 'MC512', '1080P 12pcs IR Side IP Camera'),
      makeProduct('qh-mc610', 'MC610', '1080P Mini Vehicle Side Camera'),
      makeProduct('qh-ipc011', 'IPC011', '1080P 2MP Mini IP Camera'),
      makeProduct('qh-mc710ip', 'MC710IP', 'Waterproof Vandalproof Dome IP Camera'),
      makeProduct('qh-mc015w', 'MC015W', 'Vandal Proof IR Dome Bus Camera'),
      makeProduct('qh-mc524', 'MC524', '1080P 24pcs IR Dome Bus Camera'),
    ],
  },
  {
    id: 'qoho-360-bsd-systems',
    label: 'QOHO 360° / BSD Systems',
    desc: '360° surround view, BSD, DVS and radar monitoring systems',
    products: [
      makeProduct('qh-360-bsd-system', '360° BSD System', '10-inch 8CH 360° BSD System'),
      makeProduct('qh-360-ai-bsd-monitor-system', '360° AI BSD Monitor System', '10-inch 5CH 360° BSD System'),
      makeProduct('qh-dvs-system', 'DVS System', '7-inch Monitor + Radar + Rear Camera'),
      makeProduct('qh-360-view-system', '360° View System', 'Truck & Specialty Vehicle View System'),
    ],
  },
  {
    id: 'qoho-monitors',
    label: 'QOHO On-board Monitors',
    desc: 'Vehicle monitors, recording monitors and wireless display systems',
    products: [
      makeProduct('qh-7inch-2ch-car-monitor', '7inch 2CH Car Monitor', '720P/1080P 2CH Car Monitor'),
      makeProduct('qh-12-3-tft-lcd-car-monitor', '12.3” TFT-LCD Car Monitor', 'Wide TFT-LCD Vehicle Monitor'),
      makeProduct('qh-7inch-sd-card-quad-monitor', '7inch SD Card Quad Monitor', '720P HD Recording Quad Monitor'),
      makeProduct('qh-7inch-waterproof-car-monitor', '7inch Waterproof Car Monitor', 'IP65 Waterproof Car Monitor'),
      makeProduct('qh-wireless-waterproof-display-system', '7” Wireless Waterproof Display System', 'Wireless Waterproof Display System'),
      makeProduct('qh-wireless-video-recorder', '7” Wireless Video Recorder', '1080P Wireless Video Recorder'),
    ],
  },
  {
    id: 'qoho-ptz-peripherals',
    label: 'QOHO PTZ & Peripherals',
    desc: 'PTZ cameras, thermal imaging, UPS battery and TPMS products',
    products: [
      makeProduct('qh-thermal-laser-ptz-camera', 'Thermal/Laser PTZ Camera', 'Thermal & Laser PTZ Camera'),
      makeProduct('qh-intelligent-ir-ptz-camera', 'Intelligent IR PTZ Camera', 'High-Speed Infrared PTZ Camera'),
      makeProduct('qh-thermal-imaging-dual-light-machine', 'Thermal Imaging Dual-Light Machine', 'Vehicle Dual-Light Fusion Machine'),
      makeProduct('qh-ups-battery', 'UPS Battery', 'Mobile DVR Backup Battery'),
      makeProduct('qh-tire-pressure-monitoring-system', 'Tire Pressure Monitoring System', 'TPMS Monitoring System'),
    ],
  },
];

const commonApplications = [
  {
    title: 'Fleet Safety',
    desc: 'Supports safer vehicle operations with video evidence, monitoring and driver safety workflows.',
  },
  {
    title: 'Commercial Vehicles',
    desc: 'Suitable for buses, trucks, taxis, police vehicles, logistics fleets and specialty vehicles.',
  },
  {
    title: 'Control Room Monitoring',
    desc: 'Can be used with mobile DVR, NVR, CMS platforms and professional fleet monitoring workflows.',
  },
  {
    title: 'Driver & Passenger Protection',
    desc: 'Improves visibility, accountability and risk control during daily operations.',
  },
];

const makeDetail = (product, category) => ({
  model: product.model,
  name: product.name,
  image: product.image,
  category: category.label,
  tagline: `${product.model} for intelligent vehicle safety and fleet monitoring.`,
  description: `${product.model} is a professional QOHO vehicle safety product designed for fleet monitoring, mobile surveillance, driver safety and advanced vehicle operations.`,
  features: [
    { icon: 'camera', label: 'Vehicle video monitoring support' },
    { icon: 'adas', label: 'Fleet safety workflow ready' },
    { icon: 'cloud', label: 'Control room and platform integration support' },
    { icon: 'driver', label: 'Driver and passenger protection' },
    { icon: 'gps', label: 'Suitable for commercial vehicle operations' },
    { icon: 'wire', label: 'Professional installation support' },
  ],
  specs: {
    general: {
      label: 'General',
      items: {
        'Product Type': category.label,
        Model: product.model,
        Application: 'Fleet safety, vehicle monitoring and mobile surveillance',
        Image: 'Product image will be added later',
      },
    },
  },
  applications: commonApplications,
  accessories: [
    { label: 'Product image will be added later', comment: '/* Add image here later */' },
  ],
});

export const QOHO_PRODUCT_DETAILS = Object.fromEntries(
  QOHO_PRODUCT_CATEGORIES.flatMap((category) =>
    category.products.map((product) => [
      product.id,
      makeDetail(product, category),
    ])
  )
);