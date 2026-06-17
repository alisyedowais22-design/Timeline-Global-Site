const noImg = '';

const makeProduct = (id, model, name, categoryLabel, tagline, description, features = [], specs = {}) => ({
  id,
  model,
  name,
  image: noImg,
  categoryLabel,
  tagline,
  description,
  features,
  specs,
});

export const QOHO_PRODUCT_CATEGORIES = [
  {
    id: 'qoho-ai-dvr-nvr',
    label: 'QOHO AI DVR / NVR Systems',
    desc: 'AI-powered mobile DVR, NVR and dash camera systems',
    products: [
      { id: 'qh-ai-4g-dash-camera', model: 'AI 4G Dash Camera', image: noImg, name: '2CH/4CH 1080P AI Camera with 4G GPS WiFi' },
      { id: 'qh-mdvr8101s', model: 'MDVR8101S', image: noImg, name: '1080P HD Mobile DVR Camera' },
      { id: 'qh-mdvr101n', model: 'MDVR101N', image: noImg, name: '4G GPS SD Card Mobile DVR' },
      { id: 'qh-three-sd-card-ai-mobile-dvr', model: 'Three SD Card AI Mobile DVR', image: noImg, name: '8CH AI 1080P Mobile DVR' },
      { id: 'qh-ai-hdd-sd-mobile-dvr', model: 'AI HDD/SD Mobile DVR', image: noImg, name: '8CH AI 4TB HDD/SSD Mobile DVR' },
      { id: 'qh-hybrid-mobile-nvr', model: 'Hybrid Mobile NVR', image: noImg, name: '8CH AHD + 4CH IPC / 12CH IPC NVR' },
      { id: 'qh-smallest-mobile-dvr', model: 'Smallest Mobile DVR', image: noImg, name: '1CH to 4CH Waterproof Mobile DVR' },
      { id: 'qh-8ch-ahd-mobile-dvr-system', model: '8CH AHD Mobile DVR System', image: noImg, name: 'GPS 4G WiFi AHD Mobile DVR System' },
      { id: 'qh-4ch-mobile-dvr-system-kit', model: '4CH Mobile DVR System Kit', image: noImg, name: '1080P Cameras + Dual Lens DVR Camera' },
    ],
  },
  {
    id: 'qoho-ai-cameras',
    label: 'QOHO AI Cameras',
    desc: 'DMS, ADAS, BSD, counting, recognition and alcohol detection cameras',
    products: [
      { id: 'qh-mc810ip', model: 'QH-MC810IP', image: noImg, name: 'AI Smart IP People Counting Camera' },
      { id: 'qh-facial-palmprint-recognition-camera', model: 'Facial & Palmprint Recognition Camera', image: noImg, name: 'Driver Authentication Camera' },
      { id: 'qh-ai-alcohol-detection-camera', model: 'AI Alcohol Detection Camera', image: noImg, name: 'Contactless Automatic Alcohol Detection' },
      { id: 'qh-starlight-camera', model: 'Starlight Camera', image: noImg, name: 'AI Low-Light Full-Color Night Vision Camera' },
      { id: 'qh-dashboard-dms-camera', model: 'Dashboard Installation DMS', image: noImg, name: 'Driver Monitoring System Camera' },
      { id: 'qh-side-dms-camera', model: 'Side Installation DMS', image: noImg, name: 'Side Driver Monitoring Camera' },
      { id: 'qh-anti-explosive-dms-camera', model: 'Anti-Explosive DMS Camera', image: noImg, name: 'DMS Camera for Oil/Gas and Truck Fleets' },
      { id: 'qh-facial-recognition-terminal', model: 'Facial Recognition Terminal', image: noImg, name: 'Face Recognition Biometric Machine' },
      { id: 'qh-dual-lens-vehicle-counting-camera', model: 'Dual Lens Vehicle Counting Camera', image: noImg, name: 'Passenger Flow Counting Camera' },
      { id: 'qh-dual-lens-head-counting-camera', model: 'Dual Lens Head Counting Camera', image: noImg, name: 'People Counting Camera for Establishments' },
    ],
  },
  {
    id: 'qoho-body-cameras',
    label: 'QOHO Body Cameras',
    desc: 'Portable 4G/5G body cameras for field security and law enforcement',
    products: [
      { id: 'qh-ai-1080p-face-recognition-body-camera', model: 'AI 1080P Face Recognition Body Camera', image: noImg, name: 'AI Body Camera' },
      { id: 'qh-1080p-portable-body-camera', model: '1080P Portable Body Camera', image: noImg, name: 'Portable Body Camera' },
      { id: 'qh-5g-ai-body-camera', model: '5G AI Body Camera', image: noImg, name: '5G AI Enhanced Imaging Body Camera' },
      { id: 'qh-4g-ai-body-camera-mini-cam', model: '4G AI Body Camera with 720P Mini Cam', image: noImg, name: '4G AI Imaging & Positioning Body Camera' },
      { id: 'qh-advanced-hd-body-camera', model: 'Advanced HD Body Camera', image: noImg, name: 'HD Recording Body Camera' },
      { id: 'qh-720p-mini-cam', model: '720P Mini Cam', image: noImg, name: 'Mini USB Digital Camera' },
    ],
  },
  {
    id: 'qoho-vehicle-cameras',
    label: 'QOHO Vehicle Cameras',
    desc: 'Front, rear, side, dome, IP and anti-explosive vehicle cameras',
    products: [
      { id: 'qh-bb60v', model: 'BB60V', image: noImg, name: '1080P Anti-Explosive Camera' },
      { id: 'qh-mc1205', model: 'MC1205', image: noImg, name: '1080P Bullet Front Road Camera' },
      { id: 'qh-mc620', model: 'MC620', image: noImg, name: '1080P Dual Lens Vehicle Camera' },
      { id: 'qh-mc200d', model: 'MC200D', image: noImg, name: '2MP Dual View IP Camera' },
      { id: 'qh-inside-140-cabin-camera', model: 'Inside 140° Cabin Camera', image: noImg, name: 'Wide View Cabin Camera' },
      { id: 'qh-mc018', model: 'MC018', image: noImg, name: '1080P 18pcs LED Rear View Camera' },
      { id: 'qh-mc076', model: 'MC076', image: noImg, name: '1080P Mini Vehicle IR Rear Camera' },
      { id: 'qh-mc512', model: 'MC512', image: noImg, name: '1080P 12pcs IR Side IP Camera' },
      { id: 'qh-mc610', model: 'MC610', image: noImg, name: '1080P Mini Vehicle Side Camera' },
      { id: 'qh-ipc011', model: 'IPC011', image: noImg, name: '1080P 2MP Mini IP Camera' },
      { id: 'qh-mc710ip', model: 'MC710IP', image: noImg, name: 'Waterproof Vandalproof Dome IP Camera' },
      { id: 'qh-mc015w', model: 'MC015W', image: noImg, name: 'Vandal Proof IR Dome Bus Camera' },
      { id: 'qh-mc524', model: 'MC524', image: noImg, name: '1080P 24pcs IR Dome Bus Camera' },
    ],
  },
  {
    id: 'qoho-360-bsd-systems',
    label: 'QOHO 360° / BSD Systems',
    desc: '360° surround view, BSD, DVS and radar monitoring systems',
    products: [
      { id: 'qh-360-bsd-system', model: '360° BSD System', image: noImg, name: '10-inch 8CH 360° BSD System' },
      { id: 'qh-360-ai-bsd-monitor-system', model: '360° AI BSD Monitor System', image: noImg, name: '10-inch 5CH 360° BSD System' },
      { id: 'qh-dvs-system', model: 'DVS System', image: noImg, name: '7-inch Monitor + Radar + Rear Camera' },
      { id: 'qh-360-view-system', model: '360° View System', image: noImg, name: 'Truck & Specialty Vehicle View System' },
    ],
  },
  {
    id: 'qoho-monitors',
    label: 'QOHO On-board Monitors',
    desc: 'Vehicle monitors, recording monitors and wireless display systems',
    products: [
      { id: 'qh-7inch-2ch-car-monitor', model: '7inch 2CH Car Monitor', image: noImg, name: '720P/1080P 2CH Car Monitor' },
      { id: 'qh-12-3-tft-lcd-car-monitor', model: '12.3” TFT-LCD Car Monitor', image: noImg, name: 'Wide TFT-LCD Vehicle Monitor' },
      { id: 'qh-7inch-sd-card-quad-monitor', model: '7inch SD Card Quad Monitor', image: noImg, name: '720P HD Recording Quad Monitor' },
      { id: 'qh-7inch-waterproof-car-monitor', model: '7inch Waterproof Car Monitor', image: noImg, name: 'IP65 Waterproof Car Monitor' },
      { id: 'qh-wireless-waterproof-display-system', model: '7” Wireless Waterproof Display System', image: noImg, name: 'Wireless Waterproof Display System' },
      { id: 'qh-wireless-video-recorder', model: '7” Wireless Video Recorder', image: noImg, name: '1080P Wireless Video Recorder' },
    ],
  },
  {
    id: 'qoho-ptz-peripherals',
    label: 'QOHO PTZ & Peripherals',
    desc: 'PTZ cameras, thermal imaging, UPS battery and TPMS products',
    products: [
      { id: 'qh-thermal-laser-ptz-camera', model: 'Thermal/Laser PTZ Camera', image: noImg, name: 'Thermal & Laser PTZ Camera' },
      { id: 'qh-intelligent-ir-ptz-camera', model: 'Intelligent IR PTZ Camera', image: noImg, name: 'High-Speed Infrared PTZ Camera' },
      { id: 'qh-thermal-imaging-dual-light-machine', model: 'Thermal Imaging Dual-Light Machine', image: noImg, name: 'Vehicle Dual-Light Fusion Machine' },
      { id: 'qh-ups-battery', model: 'UPS Battery', image: noImg, name: 'Mobile DVR Backup Battery' },
      { id: 'qh-tire-pressure-monitoring-system', model: 'Tire Pressure Monitoring System', image: noImg, name: 'TPMS Monitoring System' },
    ],
  },
];

const qohoFlatProducts = QOHO_PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.products.map((product) => ({
    ...product,
    categoryId: cat.id,
    categoryLabel: cat.label,
    categoryDesc: cat.desc,
  }))
);

const productDetails = {
  'qh-mc810ip': {
    tagline: 'AI people counting and child safety monitoring for smart vehicles.',
    description: 'AI Smart IP People Counting Camera for passenger left-behind detection, child safety monitoring and real-time people counting linked with MDVR workflows.',
    features: ['Passenger left-behind detection', 'Child safety monitoring', 'Real-time people counting', 'MDVR alarm linkage'],
    specs: { 'Technology': 'AI face and passenger detection', 'Integration': 'MDVR + remote app notification', 'Application': 'Family, business, ride-hailing and passenger fleets' },
  },
  'qh-ai-4g-dash-camera': {
    tagline: 'All-in-one AI 4G dash camera with ADAS, DMS, GPS and WiFi.',
    description: 'mDVR with 2CH/4CH 1080P AI camera support, built-in 4G, GPS, WiFi, ADAS, DMS and CMSV6 platform compatibility.',
    features: ['2CH/4CH 1080P AI camera support', 'Built-in 4G GPS WiFi', '110° ADAS and 135° DMS camera', 'Up to 512GB TF storage'],
    specs: { 'Processor': 'Novatek high-performance processor', 'Compression': 'H.265', 'Storage': '2 TF cards up to 512GB each', 'Platform': 'CMSV6, Wialon and third-party API' },
  },
  'qh-mdvr8101s': {
    tagline: 'Compact 1080P mobile DVR camera with 4G, WiFi and GPS.',
    description: 'MDVR8101S supports 1080P mobile DVR recording with integrated 4G, 2.4G WiFi, GPS/BeiDou positioning, G-sensor alarms and dual TF card storage.',
    features: ['Expandable video inputs', 'Integrated 4G/WiFi/GPS', 'Dual TF card storage', 'G-Sensor safety alarms'],
    specs: { 'Video': 'Up to 3x 1080P AHD or 1x 1080P IPC', 'Encoding': 'H.265/H.264 at 30FPS', 'Storage': 'Dual TF up to 1TB per card', 'Temperature': '-20°C to +70°C' },
  },
  'qh-mdvr101n': {
    tagline: '4G GPS SD card mobile DVR for simple fleet video recording.',
    description: 'MDVR101N supports H.264/H.265 encoding, 1080P video, CAT1 4G network, external GPS/BD and optional AI DMS/BSD detection.',
    features: ['1080P@25FPS video', 'CAT1 4G connectivity', 'External GPS/BD support', 'Optional DMS/BSD AI detection'],
    specs: { 'Encoding': 'H.264 / H.265', 'Storage': 'TF card up to 512GB', 'I/O': '1 input, 1 output, RS232 supported', 'AI': 'Optional DMS/BSD detection' },
  },
  'qh-ai-alcohol-detection-camera': {
    tagline: 'Contactless automatic alcohol detection camera for driver safety.',
    description: 'AI contactless alcohol detection camera uses sensor and camera-based detection for automatic driver alcohol monitoring.',
    features: ['Contactless detection', '99.90% accuracy', '0.5 to 2 meter detection distance', 'IP54 waterproof rating'],
    specs: { 'Voltage': 'DC 8–36V', 'Detection Angle': '45° horizontal', 'Detection Time': '100ms to 1 second', 'Temperature': '-25°C to 80°C' },
  },
  'qh-ai-hdd-sd-mobile-dvr': {
    tagline: '8CH AI 4TB HDD/SSD mobile DVR for heavy-duty fleets.',
    description: 'AI HDD/SD Mobile DVR supports 8CH 1080P recording, ADAS, DMS, BSD, AHD/IPC cameras, 4TB HDD/SSD storage and firebox mirror support.',
    features: ['8CH 1080P recording', 'ADAS/DMS/BSD support', 'Up to 4TB HDD/SSD', 'Aviation connectors and wide voltage'],
    specs: { 'Channels': '8CH 1080P/720P/960H', 'Storage': 'Up to 4TB HDD/SSD + external 2TB HDD + 1 SD card', 'Voltage': '8–36V', 'Dimensions': '199(W) × 76(H) × 190(L) mm' },
  },
  'qh-hybrid-mobile-nvr': {
    tagline: 'Hybrid NVR for IPC and AHD mobile video architecture.',
    description: 'Hybrid Mobile NVR supports up to 8CH IPC + 4CH AHD or 12CH IPC with 4G/5G, WiFi, GPS, geo-fence and AI camera compatibility.',
    features: ['8CH IPC + 4CH AHD or 12CH IPC', '4G/5G live view', 'AI ADAS/DMS/BSD camera support', 'H.265 compression'],
    specs: { 'Storage': '2.5” 4TB HDD/SSD + 64GB SD card', 'Voltage': 'DC 8V–36V', 'Certifications': 'CE, FCC, Emark, EN50155', 'Sensors': 'Temperature, TPMS, weight, thermal sensor support' },
  },
  'qh-smallest-mobile-dvr': {
    tagline: 'Compact waterproof DVR for 1CH to 4CH vehicle applications.',
    description: 'Smallest Mobile DVR supports 1CH to 4CH 1080P/720P video, 4G GPS WiFi, H.265 compression, dual TF cards and IP65 waterproof design.',
    features: ['1CH to 4CH camera support', 'H.265 video compression', 'Dual TF card slots', 'IP65 waterproof design'],
    specs: { 'Resolution': '1080P / 720P', 'Storage': 'Dual TF cards up to 512GB each', 'Connectivity': '4G GPS WiFi', 'Platforms': 'CMSV6 and Wialon' },
  },
};

const genericDetail = (product) => ({
  tagline: `${product.model} for intelligent vehicle safety and fleet monitoring.`,
  description: `${product.model} is a QOHO vehicle safety product designed for fleet monitoring, mobile surveillance, driver safety and professional vehicle operations.`,
  features: [
    'Vehicle safety monitoring',
    'Fleet operation visibility',
    'Professional installation support',
    'Commercial vehicle use',
  ],
  specs: {
    'Product Type': product.categoryLabel,
    'Model': product.model,
    'Application': 'Fleet safety, vehicle monitoring and mobile surveillance',
    'Image': 'Product image will be added later',
  },
});

export const QOHO_PRODUCT_DETAILS = Object.fromEntries(
  qohoFlatProducts.map((product) => {
    const detail = productDetails[product.id] || genericDetail(product);

    return [
      product.id,
      {
        model: product.model,
        name: product.name,
        image: product.image,
        category: product.categoryLabel,
        tagline: detail.tagline,
        description: detail.description,
        features: detail.features.map((label) => ({ icon: 'camera', label })),
        specs: {
          overview: {
            label: 'Overview',
            items: detail.specs,
          },
        },
        applications: [
          { title: 'Fleet Safety', desc: 'Supports safer vehicle operations with video evidence and monitoring capabilities.' },
          { title: 'Commercial Vehicles', desc: 'Suitable for buses, trucks, taxis, police vehicles, emergency fleets and specialty vehicles.' },
          { title: 'Control Room Monitoring', desc: 'Can be integrated with mobile DVR, NVR, CMS platforms or fleet monitoring workflows.' },
          { title: 'Driver & Passenger Protection', desc: 'Improves visibility, accountability and risk control during daily operations.' },
        ],
        accessories: [],
      },
    ];
  })
);